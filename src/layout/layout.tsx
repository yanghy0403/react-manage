import HeaderBar from '../component/Header';
import React, { Component } from 'react'
import {Redirect,Route,Link,Switch } from 'react-router-dom'

import {Layout,Menu} from 'antd';
 import router from '../router/router'  
// import history from '../util/history'
import logo from '../assets/img/logo192.png';
import 'antd/dist/antd.css';
import './layout.scss'
const {Sider,Content} = Layout;
const { SubMenu } = Menu;
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
    //遍历左侧餐单
    renderMenu = (menus:any)=>{
           return menus.map((item:any)=>{
                  if(item.routes){
                         return <SubMenu key={item.path} title={
                                  <span>
                                         {item.icon}
                                         <span>{item.title}</span>
                                  </span>
                         }>
                              {this.renderMenu(item.routes)}
                         </SubMenu>
                  }else{
                      return <Menu.Item key={item.path} icon={item.icon ? item.icon:'' }>
                               <Link to={item.path}>{item.title}</Link> 
                             </Menu.Item>
                  }
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
    //路由跳转
    handleChangePage=(obj:any)=>{
         
//      history.push(obj.key);
    }
   
     render() {
       let name;
       if (!this.state.collapsed) {
         name = <span className="name">React管理后台</span>;
       }
      
          return (
                 <Layout>
                       <Sider trigger={null} collapsible collapsed={this.state.collapsed} width={256} style={{ minHeight: '100vh' }} onCollapse={ this.toggle }>
                            <div className="logo">
                                     <img src={logo} alt="" className="custom-img"/>
                                     {name}
                            </div>
                            <Menu theme="dark" mode="inline" 
                            defaultOpenKeys={ this.state.defaultOpenKeys }
                             defaultSelectedKeys={ this.state.defaultSelectedKeys }
                             onClick ={this.handleChangePage}>
                                  {this.renderMenu(router)}
                                 
                            </Menu>
                       </Sider>
                       <Layout className="site-layout">
                            
                              <HeaderBar toggle={this.toggle}></HeaderBar>
                              <Content
                                   className="site-layout-background"
                                   style={{
                                        margin: '24px',
                                         minHeight: 280,
                                        }}
                                       >
                                         <Switch>
                                         
                                            {this.forList(router)}
                                            <Redirect from="/*" to="/dashboard/Analysis"></Redirect>
                                        </Switch>   
                              </Content>
                         </Layout>
                      
                 </Layout>
          );
     }
}

export default BasicLayout;