import React, { Component } from 'react'
import Chart from '../../../component/Chart/Chart';


import json from '../../../assets/json/hightword.json'
export default class Hightword extends Component {
  
    getOption=()=>{
      
        let option = {
   
            backgroundColor: '#F7F7F7',
            tooltip: {
                show: true
            },
           
            series: [
                {
                name: '热点分析',
                type: 'wordCloud',
                //size: ['9%', '99%'],
                sizeRange: [6, 50],
                //textRotation: [0, 45, 90, -45],
                rotationRange: [-45, 60],
                //shape: 'circle',
                textPadding: 0,
                autoSize: {
                    enable: true,
                    minSize: 6
                },
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                left:'center',
                top:'center',
                width:'70%',
                height:'80%',
                data:json.dataval
            }]
        };
       
       return option;
       
    }
   componentDidMount(){
       this.getOption();
   }
    render() {
        return (
            <div style={{height:200}} ref="chart">
                  <Chart option={this.getOption()}/>
            </div>
          
        )
    }
}
