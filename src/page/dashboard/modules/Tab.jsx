import React, { Component } from 'react'
import { Tabs,Card } from 'antd';
import './Tab.scss'
const { TabPane } = Tabs;
const list= [
    {
       index:0,
       value:323234
    },
    {
        index:1,
        value:323234
     },
     {
        index:2,
        value:323234
     }, 
     {
        index:3,
        value:323234
     },
     {
        index:4,
        value:323234
     },
     {
        index:5,
        value:323234
     },
     {
        index:6,
        value:323234
     }
]

export default class Tab extends Component {
    //模板渲染
    Demo = (list)=>{
        return list.map((item,i)=>{
             if(i>2){
                 return  (
                    <li key={i}>
                            <p>
                                <label >{i+1}</label>
                                <span>工业专路{item.index}号店</span>
                            </p>
                            <span>{item.value}</span>
                    </li>
                 )
             }else{
                 return  <li  key={i}>
                                <p>
                                     <label className="bg">{i+1}</label>
                                     <span>工业专路{item.index}号店</span>
                                </p>
                                <span>{item.value}</span>
                         </li>
             }
        })
     }
    render() {
        return (
         
                  <Tabs defaultActiveKey="1" className="tabs">
                        <TabPane tab="今日" key="1">
                            <h3 style={{lineHeight:'40px',margin:'10px 0'}}>门店访问量排名</h3>
                            {this.Demo(list)}
                        </TabPane>
                        <TabPane tab="本周" key="2">
                             
                        <h3 style={{lineHeight:'40px',margin:'10px 0'}}>门店访问量排名</h3>
                            {this.Demo(list)}
                        </TabPane>
                        <TabPane tab="本月" key="3">
                           <h3 style={{lineHeight:'40px',margin:'10px 0'}}>门店访问量排名</h3>
                            {this.Demo(list)}
                        </TabPane>
                        <TabPane tab="全年" key="4">
                           <h3 style={{lineHeight:'40px',margin:'10px 0'}}>门店访问量排名</h3>
                            {this.Demo(list)}
                        </TabPane>
                    </Tabs>
         
        )
    }
}
