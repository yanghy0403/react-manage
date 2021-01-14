import React, { Component } from 'react'
import { Row, Col ,Card } from 'antd';
import Map from './modules/Map' //
import Effic from './modules/Effic'//券核效率
import Resourcespie from './modules/Resourcespie' //资源剩余
import Ring from './modules/Ring' //各品类占比
import Hightword  from './modules/Hightword'//热词搜索
import './monitor.scss'


//获取当前时间
 const  getdate=()=> {
    var date = new Date();
     
	var year = date.getFullYear() - 1;
	var month =
		date.getMonth() + 1 < 10 ?
		"0" + (date.getMonth() + 1) :
		date.getMonth() + 1;
	var day =
		date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var hours =
		date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	var minutes =
		date.getMinutes() < 10 ?
		"0" + date.getMinutes() :
		date.getMinutes();
	var seconds =
		date.getSeconds() < 10 ?
		"0" + date.getSeconds() :
		date.getSeconds();
	let time =
		year +
		"-" +
		month +
		"-" +
		day +
		" " +
		hours +
		":" +
		minutes +
		":" +
        seconds;
      return time;
	
}
class Monitor extends Component<any,any> {
   //定义定时器
    timer: NodeJS.Timeout | null = null
    constructor(props:any) {
        super(props);
        this.state = { 
            Date:getdate()
         };
         this.timer = null;
    }
    getDate=()=>{
       var date= getdate();
      this.setState({
          Date:date
       })
      
    }
    componentDidMount(){
         var that = this;
         this.timer= setInterval(()=>{
            that.getDate();
            },1000)
   
    }
    componentWillUnmount() {
        //清除定时器需要强转为数组类型
        clearInterval(Number(this.timer));
      }
    render() {
        let { Date } = this.state;
     
        return (
            <div className="ant-pro-grid-content">
               <div className="ant-pro-grid-content-children">
                    <Row className="trading">
                          <Col span={18}>
                              <Card title="活动实时交易情况">
                                 <Row>
                                      <Col span={6}>
                                           <p>今日交易总额</p>
                                           <span>124,543,233元</span>
                                        </Col>
                                      <Col span={6}>
                                            <p>销售目标完成率</p>
                                           <span>92%</span>
                                      </Col>
                                      <Col span={6}>
                                           <p>活动剩余时间 </p>
                                           <span>{Date}</span>
                                      </Col>
                                      <Col span={6}> 
                                           <p>每秒交易总额</p>
                                           <span>234元</span>
                                      </Col>
                                </Row>
                                  <div style={{width:'100%',height:'400px',marginTop:'20px'}}>
                                       <Map/>
                                  </div>
                              </Card>
                          </Col>
                          <Col span={6} style={{paddingLeft:'2%',display: 'flex',flexDirection: 'column'}}>
                              <Card title="活动情况预测" style={{flex:1}}>
                                   
                              </Card>
                              <Card title="劵核效率" style={{marginTop:'20px',flex:1}} className="tab">
                                  
                                      <Effic/>
                                   
                              </Card>
                          </Col>
                    </Row>
                    <Row style={{margin:"20px 0",paddingBottom:30}} className="tab">
                        <Col span={18}>
                             <Row style={{ height: '100%'}}>
                                  <Col span={16}>
                                    <Card title="各类占比">
                                        <Ring/>
                                    </Card>
                                  </Col>
                                  <Col span={8} style={{paddingLeft:'2%'}}>
                                       <Card title="热门搜索">
                                            <Hightword/>
                                       </Card>
                                  </Col>
                             </Row>
                        </Col>
                        <Col span={6} style={{paddingLeft:'2%'}}>
                             <Card className="tag" title="资源剩余">
                                 <Resourcespie/>
                             </Card>
                        </Col>
                    </Row>
               </div>
            </div>
        );
    }
}

export default Monitor;