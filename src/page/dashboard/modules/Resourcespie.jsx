import React, { Component } from 'react'
// import echarts from 'echarts/lib/echarts';
import 'echarts-liquidfill'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/src/chart/pie';
import echarts from 'echarts';
// import Chart from '../../../component/Chart/Chart'
export default class Resourcespie extends Component {
    getOption = () => {

        var dom = this.refs.chart;
        var mychart = echarts.init(dom);

        var max = 200; //满刻度大小
        var scroe = 40 / 100;
        var data = max * scroe;
        var text = '补贴资金剩余\n' + (scroe * 5000 / 100) + ' 分';
       let option = {
            // backgroundColor: '#ddd',
            title: {
                top: '30%',
                left: 'center',
                text: text,
                textStyle: {
                    color: 'rgba(0,0,0,0.7)',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 16
                }
            },
            series: [{
                type: 'liquidFill',
                itemStyle: {
                    opacity: 0.8,//波浪的透明度
                    shadowBlur: 10,//波浪的阴影范围
                    shadowColor: '#4BA8FF'//阴影颜色
                },
                radius: '80%',
                //水波
                //   color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //           offset: 0,
                //           color: "#4BA8FF"
                //       },
                //       {
                //           offset: 1,
                //           color: '#3366cc'
                //       }
                //   ])],
                //  color: '#FFB931',
                data: [{
                    value: scroe,
                }],
                 background: '#4BA8FF',
                center: ['50%', '50%'],
                backgroundStyle: {
                    color: '#fff'
                },
                label: {
                    normal: {
                        formatter: '',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                outline: {
                    itemStyle: {
                        borderColor: 'transparent',
                        borderWidth: 5
                    },
                    borderDistance: 0
                }
            },
            //外环线
            {
                "color": ['#4BA8FF'],
                "type": "pie",
                "center": ["50%", "50%"],
                "radius": ["81%", "82%"],
                "hoverAnimation": false,
                "data": [{
                    "name": "",
                    "value": data,
                    "label": {
                        "show": false,
                        "position": "center",
                        "color": "#fff",
                        "fontSize": 22,
                        "fontWeight": "200",
                        "formatter": function (o) {
                            return data
                        }
                    }
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": max - data,
                    "label": {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
                ]
            }
            ]
        };

        mychart.setOption(option);
        // return option;
    }
    componentDidMount() {
        this.getOption();
    }
    render() {

        return (
            // <Chart option={this.getOption()} />
           <div ref="chart" style={{ width: '100%', height: 200 }}></div>
        )
    }
}
