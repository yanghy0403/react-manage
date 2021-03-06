import HeaderBar from '../component/Header';
import React, { Component } from 'react'
import {Redirect,Route,Link,Switch } from 'react-router-dom'

import {Layout,Menu} from 'antd';
 import router from '../router/router'  
import Footer from '../component/Footer'
import logo from '../assets/img/logo192.png';
import 'antd/dist/antd.css';
import './layout.scss'
const {Sider,Content} = Layout;
const { SubMenu } = Menu;



let route = router.map((item)=>{
       return item.path;
})

const SliderMenu = ()=>{
       let pathname = window.location.pathname;
       if(pathname ==='/'){
              pathname = '/dashboard/Analysis';
       }
     
      let selectedKey =  pathname  //设置defaultSelectedKeys
       let openKey = "/"+ pathname.split("/")[1] //截取二级路由的一级路径，设置defaultOpenKeys
      
       const [openKeys, setOpenKeys] = React.useState([openKey]); 
     
       const onOpenChange = (keys:any) => {
             
              const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key) === -1);
              if (route.indexOf(latestOpenKey) === -1) {
                setOpenKeys(keys);
              } else {
                setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
              }
       };

       //遍历左侧餐单
       const renderMenu = (menus:any)=>{
              let Menus = menus.map((item:any)=>{
                     if(item.routes){
                            return <SubMenu key={item.path} title={
                                     <span>
                                            {item.icon}
                                            <span>{item.title}</span>
                                     </span>
                            }>
                                 {renderMenu(item.routes)}
                            </SubMenu>
                     }else{
                         
                         return <Menu.Item key={item.path} icon={item.icon ? item.icon:'' }>
                                  <Link to={item.path}>{item.title}</Link> 
                                </Menu.Item>
                     }
              })
            
              return Menus;
       }
           
     return (
               <Menu theme="dark" mode="inline" 
                     defaultOpenKeys={ [openKey] }
                     defaultSelectedKeys={ [selectedKey] }
                     openKeys={openKeys} 
                     onOpenChange={onOpenChange}
                     >
                     {renderMenu(router)}
                     
              </Menu>
     )
}

class BasicLayout extends Component {
     
    state={
         collapsed:false,
         defaultOpenKeys: ['/dashboard'],       // 默认展开
         defaultSelectedKeys: ['/dashboard/Analysis'],   // 默认选中
    }
    //控制左侧菜单收缩
    toggle=()=>{
         
           this.setState({
                  collapsed:!this.state.collapsed
           })
          
    }
    
    //渲染路由
    forList=(List:any[])=>{
       
         var arr= List.map((item)=>{
                if(item.routes){
                       return item.routes.map((each:any)=>{
                              return <Route exact key={each.path} path={each.path} component={each.component}></Route>
                       })
                }else{
                    return <Route exact key={item.path} path={item.path} component={item.component}></Route>
                }
         })
    
         let newarr:any[] =[];
             arr.forEach(item=>{
                    if(Object.prototype.toString.call(item) === '[object Array]'){
                           item.forEach((each:any)=>{
                                  newarr.push(each);
                           })
                    }else{
                          newarr.push(item);
                    }
             })
         
         return newarr;
    }
   
    componentDidMount(){
      
    }
   
     render() {
              let name;
              if (!this.state.collapsed) {
                 name = <span className="name">React管理后台</span>;
              }
             
            
                
             
          return (
                 <Layout>
                       <Sider trigger={null} collapsible collapsed={this.state.collapsed}  style={{ height: '100vh',zIndex:100}} onCollapse={ this.toggle } width={208}>
                            <div className="logo">
                                     <img src={logo} alt="" className="custom-img"/>
                                     {name}
                            </div>
                            <SliderMenu/>
                       </Sider>
                       <Layout className="site-layout">
                            
                              <HeaderBar toggle={this.toggle}></HeaderBar>
                              <Content
                                   className="site-layout-background"
                                   style={{
                                       height:'auto',
                                       minHeight: 'auto'
                                        }}
                                       >
                                    <div className="ant-pro-grid-content">
                                       <div className="ant-pro-grid-content-children">
                                          <Switch>
                                          
                                          {this.forList(router)}
                                          <Redirect from="/*" to="/dashboard/Analysis"></Redirect>
                                          </Switch>   
                                      </div>
                                   </div>
                                         
                              </Content>
                              <Footer/>
                         </Layout>
                      
                 </Layout>
          );
     }
}

export default BasicLayout;