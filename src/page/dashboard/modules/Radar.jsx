import React, { Component } from 'react'

import Chart from '../../../component/Chart/Chart'
export default class Radar extends Component {
    getOption= ()=>{
          let option = {
            backgroundColor: '#fff',
             "normal": {
                 "top": 200,
                 "left": 300,
                 "width": 500,
                 "height": 400,
                 "zIndex": 6,
                 "backgroundColor": ""
             },
             "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
             
             "tooltip": {
                 "show": true,
                 "trigger": "item"
             },
             "legend": {
                 "show": true,
                 "icon": "circle",
                //  "left": "30%",
                 "bottom": 20,
                 "orient": "horizontal",
                 "textStyle": {
                     "fontSize": 14,
                     "color": "#000"
                 },
                 "data": ["平均值", "教师业绩"]
             },
             "radar": {
                 "center": ["50%", "50%"],
                 "radius": "70%",
                 "startAngle": 90,
                 "splitNumber": 4,
                 "shape": "circle",
                 "splitArea": {
                     "areaStyle": {
                         "color": ["transparent"]
                     }
                 },
                  "name": {
                     "textStyle": {
                         "color":'#000'
                        }
                  },
                "axisLabel": {
                     "show": false,
                     "fontSize": 18,
                    
                     "fontStyle": "normal",
                     "fontWeight": "normal"
                 },
                 "axisLine": {
                     "show": true,
                     "lineStyle": {
                         // "color": "#000",//
                         "type": "dashed"
                     }
                 },
                 "splitLine": {
                     "show": true,
                     "lineStyle": {
                         "color": "#ddd",//
                         "type": "dashed"
                     }
                 },
               
                 "indicator": [{
                     "name": "本学期教授课时数",
                     "max": 88
                 }, {
                     "name": "教学平均成绩",
                     "max": 88
                 }, {
                     "name": "教研成果",
                     "max": 88
                 }, {
                     "name": "教学报告与课题研究",
                     "max": 88
                 },  {
                     "name": "继续教育情况",
                     "max": 88
                 }]
             },
             "series": [{
                 "name": "平均值",
                 "type": "radar",
                 "symbol": "circle",
                 "symbolSize": 10,
                
                 itemStyle:{
                     color:'rgba(245, 166, 35, 1)',
                    
                 },
                 "lineStyle": {
                     "normal": {
                         "type": "solid",
                         
                         "color": "rgba(245, 166, 35, 1)",
                         "width": 2
                     }
                 },
                 "data": [
                     [80, 50, 55, 80, 50, 80, 48, 43]
                 ]
             }, {
                 "name": "教师业绩",
                 "type": "radar",
                 "symbol": "circle",
                 "symbolSize": 10,
                 "itemStyle": {
                     "normal": {
                         color:'rgba(19, 173, 255, 1)',
                        
                     }
                 },
                
                 "lineStyle": {
                     "normal": {
                         "color": "rgba(19, 173, 255, 1)",
                         "width": 2,
                         "type": "solid"
                     }
                 },
                 "data": [
                     [60, 60, 65, 60, 70, 40, 80, 63]
                 ]
             }]
         };
         return option;
    }
    componentDidMount(){
        this.getOption()
    }
    render() {
        return (
            <Chart option={this.getOption()}/>
        )
    }
}
