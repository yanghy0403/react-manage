
import React, { Component } from 'react'
import { Row, Col ,Card} from 'antd';
import { QuestionCircleOutlined, CaretUpOutlined,CaretDownOutlined } from '@ant-design/icons';

import Histogram from './modules/histogram'//左侧销售量
import Tab from './modules/Tab'//右侧门店访问量
import './analysis.scss'
class Analysis extends Component {
    constructor(props:any) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="ant-pro-grid-content">
                   <div className="ant-pro-grid-content-children">
                       
                               <Row gutter={24}>
                                     <Col span={6} className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6" style={{marginBottom:'24px'}}>
                                        <Card  bordered={false} bodyStyle={{ padding: '20px 24px 8px'}}>
                                            <div className="card_page">
                                                    <div className="title_icon">
                                                        <span>总销售额</span>
                                                        <QuestionCircleOutlined />
                                                    </div>
                                                    <p className="money">￥126560</p>
                                                    <div className="up_down">
                                                        <span>周同比 12% <CaretUpOutlined style={{color:"#dc4848"}}/></span>
                                                        <span>日同比 11% <CaretDownOutlined style={{color:"#40e4ac"}}/></span>
                                                    </div>
                                                    <p className="limit">日销售额￥12,423</p>
                                            </div>
                                         </Card>
                                     </Col>
                                     <Col span={6} className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6" style={{marginBottom:'24px'}}>
                                        <Card  bordered={false} bodyStyle={{ padding: '20px 24px 8px'}}>
                                            <div className="card_page">
                                                    <div className="title_icon">
                                                        <span>总销售额</span>
                                                        <QuestionCircleOutlined />
                                                    </div>
                                                    <p className="money">￥126560</p>
                                                    <div className="up_down">
                                                        <span>周同比 12% <CaretUpOutlined style={{color:"#dc4848"}}/></span>
                                                        <span>日同比 11% <CaretDownOutlined style={{color:"#40e4ac"}}/></span>
                                                    </div>
                                                    <p className="limit">日销售额￥12,423</p>
                                            </div>
                                         </Card>
                                     </Col>
                                     <Col span={6} className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6" style={{marginBottom:'24px'}}>
                                        <Card  bordered={false} bodyStyle={{ padding: '20px 24px 8px'}}>
                                            <div className="card_page">
                                                    <div className="title_icon">
                                                        <span>总销售额</span>
                                                        <QuestionCircleOutlined />
                                                    </div>
                                                    <p className="money">￥126560</p>
                                                    <div className="up_down">
                                                        <span>周同比 12% <CaretUpOutlined style={{color:"#dc4848"}}/></span>
                                                        <span>日同比 11% <CaretDownOutlined style={{color:"#40e4ac"}}/></span>
                                                    </div>
                                                    <p className="limit">日销售额￥12,423</p>
                                            </div>
                                         </Card>
                                     </Col>
                                     <Col span={6} className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6" style={{marginBottom:'24px'}}>
                                        <Card  bordered={false} bodyStyle={{ padding: '20px 24px 8px'}}>
                                            <div className="card_page">
                                                    <div className="title_icon">
                                                        <span>总销售额</span>
                                                        <QuestionCircleOutlined />
                                                    </div>
                                                    <p className="money">￥126560</p>
                                                    <div className="up_down">
                                                        <span>周同比 12% <CaretUpOutlined style={{color:"#dc4848"}}/></span>
                                                        <span>日同比 11% <CaretDownOutlined style={{color:"#40e4ac"}}/></span>
                                                    </div>
                                                    <p className="limit">日销售额￥12,423</p>
                                            </div>
                                         </Card>
                                     </Col>
                               </Row>
                               <Row>
                                     <Col span={16}>

                                         <Histogram/>
                                     </Col>
                                     <Col span={8}>
                                        <Card bodyStyle={{padding:0}}  bordered={false}>
                                            {/* <h3 style={{lineHeight:'40px',margin:'10px 0'}}>门店访问量排名</h3> */}
                                            <ul>
                                                <Tab/>
                                            </ul>
                                        </Card>
                                     </Col>
                               </Row>
                   </div>
            </div>
        );
    }
}

export default Analysis;