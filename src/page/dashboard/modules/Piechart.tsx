import React, { Component } from 'react'

 import Chart from '../../../component/Chart/Chart'
let bgColor = '#fff';
let title = '销售额';
let color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
let echartData = [{
        name: "A类",
        value: "3720"
    },
    {
        name: "B类",
        value: "2920"
    },
    {
        name: "C类",
        value: "2200"
    },
    {
        name: "D类",
        value: "1420"
    }
];

let formatNumber = function(num:number) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b:any) => {
    return a + b.value * 1
}, 0);
interface Object{
    name:string,
    value:number
}
export default class Piechart extends Component {
    getOption=()=>{
       let option = {
           
            color: color,
           
            title: [{
                text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
                top: 'center',
                left: 'center',
                textStyle: {
                    rich: {
                        name: {
                            fontSize: 14,
                            fontWeight: 'normal',
                            color: '#666666',
                            padding: [10, 0]
                        },
                        val: {
                            fontSize: 32,
                            fontWeight: 'bold',
                            color: '#333333',
                        }
                    }
                }
            }],
           
            series: [{
                type: 'pie',
                radius: ['45%', '60%'],
                center: ['50%', '50%'],
                data: echartData,
                // hoverAnimation: false,
                itemStyle: {
                   
                        borderColor: bgColor,
                        borderWidth: 2
                   
                },
                labelLine: {
                    
                        length: 20,
                        length2: 120,
                        lineStyle: {
                            color: '#e6e6e6'
                        }
                    
                },
                label: {
                   
                        show:false,
                        formatter: (params:Object) => {
                            return (
                                '{icon|●}{name|' + params.name + '}{value|' +
                                formatNumber(params.value) + '}'
                            );
                        },
                        padding: [0 , -100, 25, -100],
                        rich: {
                            icon: {
                                fontSize: 16
                            },
                            name: {
                                fontSize: 14,
                                padding: [0, 10, 0, 4],
                                color: '#666666'
                            },
                            value: {
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#333333'
                            }
                        }
                   
                },
            }]
        };
        return option;
    }
    componentDidMount(){
        this.getOption()
    }
    render() {
        return (
            <Chart option={this.getOption()} />
        )
    }
}
