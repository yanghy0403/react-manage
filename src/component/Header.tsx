import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Breadcrumb } from 'antd';
import { CaretDownOutlined, MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import logo from '../assets/img/logo192.png';
import './Header.scss'
const { Header } = Layout;

class Userinfo extends Component {
    state = {
        visible: true,//控制菜单显示
    }
    handleVisibleChange = (flag: any) => {

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

interface Iprops {
    // collapsed: boolean;
    toggle: () => void;
}
export default class HeaderBar extends Component<Iprops> {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
      
        this.props.toggle();
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
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Userinfo></Userinfo>
                </Header>
            </div>
        )
    }
}

