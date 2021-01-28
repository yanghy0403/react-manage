import React, { Component } from 'react'
import {Row,Col,Card} from 'antd';
import {AlipayCircleOutlined,FontColorsOutlined,PlusOutlined} from '@ant-design/icons'
import Radar from './modules/Radar'
import logo from '../../assets/img/logo_Peson.png';
import style from './workbench.module.scss'

const  Data=[
    {
        title:"曲丽丽在高逼格设计天团新创建六月迭代",
        date:'一天前'
    },
    {
        title:"付小小 在 高逼格设计天团 新建项目 六月迭代",
        date:'一天前'
    },
    {
        title:"林东东 在 中二少女团 新建项目 六月迭代",
        date:'一天前'
    },
    {
        title:"周星星 将 5 月日常迭代 更新至已发布状态",
        date:'一天前'
    },
    {
        title:"朱偏右 在 工程效能 发布了 留言",
        date:'一天前'
    },
    {
        title:"乐哥 在 程序员日常 新建项目 品牌迭代",
        date:'一天前'
    }
 ]
const forlist= (list)=>{
    return list.map((item,index)=>{
         return <dl className={style.dynamic} key={index}>
                    <dt>
                        <img src={logo} alt=""/>
                    </dt>
                    <dd>
                        <p className={style.title}>{item.title}</p>
                        <p className={style.date}>{item.date}</p>
                    </dd>
            </dl>
    })
}
class Workbench extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    
    render() {
       
        return (
            <div >
                   <Row style={{marginBottom:20}} className={style.header}>
                         <Col span={20}>
                              <div className={style.head}>
                                  <img src={logo} alt=""/>
                                  <div className={style.info}>
                                      <h3>早安,Serati Ma,祝你开心每一天!</h3>
                                      <p>交互专家 | 蚂蚁金服-某某事业群</p>
                                  </div>
                              </div>
                           </Col>
                           <Col span={4} className={style.statis}>
                                 <ul>
                                     <li>
                                           <p className={style.title}>项目书</p>
                                           <p className={style.num}>56</p>
                                     </li>
                                     <li>
                                           <p className={style.title}>团队内排名</p>
                                           <p className={style.num}>8/24</p>
                                     </li>
                                     <li>
                                           <p className={style.title}>项目访问</p>
                                           <p className={style.num}>2,223</p>
                                     </li>
                                 </ul>
                             </Col>
                   </Row>
                   <div className={style.row_content} style={{margin:24}}>
                        <Row>
                                <Col span={16}>
                                   <Card title="进行中的项目" bodyStyle={{padding:0}}>
                                         <Row>
                                               <Col span={8}>
                                                    <Card>
                                                          <div className={style.module}>
                                                                <h3>
                                                                    <AlipayCircleOutlined style={{color:'#6d98ef',paddingRight:15,fontSize:24}}/>
                                                                    <span>Alipay</span>
                                                                </h3>
                                                                <p>那是一种内在的东西，他们到达不了，英文无法触及的</p>
                                                                <p style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                                    <span>科学版转租</span>
                                                                    <span>一天前</span>
                                                                </p>
                                                          </div>
                                                    </Card>
                                               </Col>
                                               <Col span={8}>
                                                      <Card>
                                                            <div className={style.module}>
                                                                    <h3>
                                                                        <FontColorsOutlined style={{color:'#6d98ef',paddingRight:15,fontSize:24}}/> 
                                                                        <span>Angular</span>
                                                                    </h3>
                                                                    <p>希望是一个好东西，也许是最好的，好东西是不会消亡的</p>
                                                                    <p style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                                        <span>科学版转租</span>
                                                                        <span>3年前</span>
                                                                    </p>
                                                            </div>
                                                        </Card>
                                               </Col>
                                               <Col span={8}>
                                                    <Card>
                                                          <div className={style.module}>
                                                                <h3>
                                                                    <AlipayCircleOutlined style={{color:'#6d98ef',paddingRight:15,fontSize:24}}/>
                                                                    <span>Ant Design</span>
                                                                </h3>
                                                                <p>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</p>
                                                                <p style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                                    <span>科学版转租</span>
                                                                    <span>一天前</span>
                                                                </p>
                                                          </div>
                                                    </Card>
                                               </Col>
                                         </Row>
                                         <Row>
                                               <Col span={8}>
                                                    <Card>
                                                          <div className={style.module}>
                                                                <h3>
                                                                    <AlipayCircleOutlined style={{color:'#6d98ef',paddingRight:15,fontSize:24}}/>
                                                                    <span>Alipay</span>
                                                                </h3>
                                                                <p>那是一种内在的东西，他们到达不了，英文无法触及的</p>
                                                                <p style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                                    <span>科学版转租</span>
                                                                    <span>一天前</span>
                                                                </p>
                                                          </div>
                                                    </Card>
                                               </Col>
                                               <Col span={8}>
                                                      <Card>
                                                            <div className={style.module}>
                                                                    <h3>
                                                                        <FontColorsOutlined style={{color:'#6d98ef',paddingRight:15,fontSize:24}}/> 
                                                                        <span>Angular</span>
                                                                    </h3>
                                                                    <p>希望是一个好东西，也许是最好的，好东西是不会消亡的</p>
                                                                    <p style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                                        <span>科学版转租</span>
                                                                        <span>3年前</span>
                                                                    </p>
                                                            </div>
                                                        </Card>
                                               </Col>
                                               <Col span={8}>
                                                    <Card>
                                                          <div className={style.module}>
                                                                <h3>
                                                                    <AlipayCircleOutlined style={{color:'#6d98ef',paddingRight:15,fontSize:24}}/>
                                                                    <span>Ant Design</span>
                                                                </h3>
                                                                <p>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</p>
                                                                <p style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                                    <span>科学版转租</span>
                                                                    <span>一天前</span>
                                                                </p>
                                                          </div>
                                                    </Card>
                                               </Col>
                                         </Row>
                                   </Card>
                                   <Card title="动态" style={{marginTop:20}} bodyStyle={{padding:0}}>
                                         {forlist(Data)}
                                   </Card>
                                </Col>
                                <Col span={8} style={{paddingLeft:20}}>
                                    <Card title="快速开始 / 便捷导航" style={{height:'auto',marginBottom:20}}>
                                        <div className={style.wrap}>
                                              <ul>
                                                  <li>操作一</li>
                                                  <li>操作二</li>
                                                  <li>操作三</li>
                                                  <li>操作四</li>
                                                  <li>操作五</li>
                                                  <li>
                                                       <span>
                                                       <PlusOutlined />添加
                                                       </span>
                                                  </li>
                                              </ul>
                                        </div>
                                    </Card>
                                    <Card title="x指数" style={{marginBottom:20}}>
                                        <div style={{width:'100%',height:400}}>
                                           <Radar/>
                                        </div>
                                    </Card>
                                    <Card title="团队" bodyStyle={{padding:0}}>
                                          <ul className={style.partin}>
                                                <li>
                                                    <AlipayCircleOutlined style={{color:'#1890ff',paddingRight:15,fontSize:24}}/>
                                                     <span>科学搬砖组</span>
                                                </li>
                                                <li>
                                                    <AlipayCircleOutlined style={{color:'#1890ff',paddingRight:15,fontSize:24}}/>
                                                     <span>科学搬砖组</span>
                                                </li>
                                                <li>
                                                    <AlipayCircleOutlined style={{color:'#1890ff',paddingRight:15,fontSize:24}}/>
                                                     <span>科学搬砖组</span>
                                                </li>
                                                <li>
                                                    <AlipayCircleOutlined style={{color:'#1890ff',paddingRight:15,fontSize:24}}/>
                                                     <span>科学搬砖组</span>
                                                </li>
                                                <li>
                                                    <AlipayCircleOutlined style={{color:'#1890ff',paddingRight:15,fontSize:24}}/>
                                                     <span>科学搬砖组</span>
                                                </li>
                                                <li>
                                                    <AlipayCircleOutlined style={{color:'#1890ff',paddingRight:15,fontSize:24}}/>
                                                     <span>科学搬砖组</span>
                                                </li>
                                          </ul>
                                    </Card>
                                </Col>
                        </Row>
                   </div>

              
            </div>
        );
    }
}

export default Workbench;