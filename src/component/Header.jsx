import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Breadcrumb } from 'antd';
import { CaretDownOutlined, MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import Router from '../router/router';
import {Link } from 'react-router-dom'
import logo from '../assets/img/logo192.png';
import './Header.scss'
const { Header } = Layout;

class Userinfo extends Component {
    state = {
        visible: false,//控制菜单显示
    }
    handleVisibleChange = (flag) => {

        this.setState({ visible: flag });
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="outlogin">退出登录</Menu.Item>
            </Menu>
        )
        return (
            <Dropdown overlay={menu} onVisibleChange={this.handleVisibleChange} visible={this.state.visible}>
                <div className="ant-dropdown-link">
                    <img src={logo} alt="" className="custom-img" />
                    <CaretDownOutlined />
                </div>
            </Dropdown>
        )
    }
}

// interface Iprops {
//     // collapsed: boolean;
//     toggle: () => void;
// }
// interface Route {
//     path: string;
//     breadcrumbName: string;
//     children: Array<{
//       path: string;
//       breadcrumbName: string;
//     }>;
//   }
/**
 * 以递归的方式展平react router数组
 */

const flattenRoutes = arr =>
  arr.reduce(function(prev, item) {
    prev.push(item);
    return prev.concat(
      Array.isArray(item.routes) ? flattenRoutes(item.routes) : item
    );
  }, []);
  //对象数组去重
 function unique(arr) {
    var result = [];
       var obj = {};
        for(var i =0; i<arr.length; i++){
          if(!obj[arr[i].path]){
             result.push(arr[i]);
              obj[arr[i].path] = true;
          }
       }
    return result;
  }
export default class HeaderBar extends Component {
    state = {
        collapsed: false,
        Breadcrumb:null
    }
   //导航栏收缩
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
      
        this.props.toggle();
    }
    //渲染面包屑
    renderBreadcrumb =(menus)=>{
      
        var bread = flattenRoutes(Router);
        var arr= unique(bread);
       
       var obj= {};
        arr.forEach(item=>{
            obj[item.path] = item.title;
        })
      
        const pathSnippets =window.location.pathname.split("/").filter((i) => i);
      
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
          
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}> {obj[url]}</Link>
                   
                </Breadcrumb.Item>
            )
        })
      
        return extraBreadcrumbItems
    }
   
    render() {
      
        return (
            <div>
                <Header className="site-layout-background flex">

                    <div className="collapse">
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                       
                        <Breadcrumb>{this.renderBreadcrumb(Router)}</Breadcrumb>
                    </div>

                    <Userinfo></Userinfo>
                </Header>
            </div>
        )
    }
}

