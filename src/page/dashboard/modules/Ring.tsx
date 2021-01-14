import React, { Component } from 'react'
// import echarts from
import Chart from '../../../component/Chart/Chart'
export default class Ring extends Component {
    getoption=()=>{
        var data = [
           {
                name: '较高风险国家',
                value: 27
            },{
                name: '中等风险国家',
                value: 54
            },{
                name: '低风险国家',
                value: 92
            }]
            var titleArr:any= [], seriesArr:any=[];
            var sCenter:any,TitleXy:any = {};
            var colors=[['#FF800D', '#E7E7E7'], ['#FDC210', '#E7E7E7'],['#2087ED', '#E7E7E7']]
            data.forEach(function(item, index){
                sCenter = [index * 35 + 14 +'%', '36%']
                TitleXy = {
                  left: index * 35 + 14 +'%',
                  top: '78%'
                }
                titleArr.push(
                    {
                        text:item.name,
                        left: TitleXy.left,
                        top: TitleXy.top,
                        textAlign: 'center',
                        textStyle: {
                            fontWeight: 'bold',
                            fontSize: '20',
                            color: colors[index][0],
                            textAlign: 'center',
                        },
                    }        
                );
                seriesArr.push(
                    {
                        name: item.name,
                        type: 'pie',
                        clockWise: false,
                        radius: [40,60],
                        itemStyle:  {
                            normal: {
                                color: colors[index][0],
                                shadowColor: colors[index][0],
                                shadowBlur: 0,
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                            }
                        },
                        hoverAnimation: false,
                        center: sCenter,
                        data: [{
                            value: item.value,
                            label: {
                                normal: {
                                    formatter: function(params:any){
                                        return params.value+'%';
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold',
                                        color: colors[index][0]
                                    }
                                }
                            },
                        }, {
                            value: 100-item.value,
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: colors[index][1]
                                },
                                emphasis: {
                                    color: colors[index][1]
                                }
                            }
                        }]
                    }    
                )
            });
        let  option = {
                backgroundColor: "#fff",
                title:titleArr,
                series: seriesArr
            }
            return option;
    }
    componentDidMount(){
        this.getoption();
    }
    render() {
        return (
            <div style={{height:200}}>
                <Chart option={this.getoption()}/>
            </div>
        )
    }
}
