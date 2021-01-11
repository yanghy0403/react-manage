import React, { Component } from 'react'
import {Card} from 'antd';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';
 import Chart from '../../../component/Chart/Chart'
import './histogram.scss'
const tabListNoTitle = [
    {
      key: '1',
      tab: '销售额',
    },
    {
      key: '2',
      tab: '访问量',
    },
  
  ];
export default class Histogram extends Component {
    state={
        noTitleKey: '1',
        contentListNoTitle:{
            '销售额': null,
            '访问量': <p>访问量 content</p>,
        },
        option:{},//传给图形组件的配置

    }
    onTabChange = (key, type) => {
       
        this.setState({ [type]: key });
        console.log(this.state);
      };
    //获取配置项
    getOption=()=>{
         
          let data = {
            legend: ["订购量", "需求量"],
            xAxis: ["七匹狼(豪情)", "中华(硬)", "中华(软)", "中南海(5mg)", "中南海(金8mg)"],
            series: [
                {
                    name: '订购量',
                    data: [723, 1233, 172, 2124, 1244]
                },
                {
                    name: '需求量',
                    data: [523, 1233, 302, 724, 1244]
                }
            ]
        };
        data.series=data.series.map(item=>{
          item.type= "bar"
          return item
      })
      
      let option =  {
        
          legend: {},
          grid: {
            top: "15%",
            left: "2%",
            right: "2%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: data.xAxis
          },
          yAxis: {
            type: "value"
          },
          color:["#516b91","#59c4e6","#edafda","#93b7e3","#a5e7f0","#cbb0e3"],
          series:data.series
      };
  
   
        return option;
    }
    
  componentDidMount(){
      this.getOption();
  }
    render() {
        // let width = 
        return (
            <Card
                bordered={false}
                style={{ width: '100%',height:"100%" }}
                className="tab"
                tabList={tabListNoTitle}
                activeTabKey={this.state.noTitleKey}
                 onTabChange={key => {
                    this.onTabChange(key, 'noTitleKey');
                }}
              >
              <div className="graph">
                  {this.state.noTitleKey =='1'? <Chart  option={this.getOption()}/> :'暂无数据'}
              </div>
            </Card>
        )
    }
}

