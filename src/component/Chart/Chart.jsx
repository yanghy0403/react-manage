import React, { Component } from 'react'
// import ReactEcharts  from 'echarts-for-react'
import * as echarts from 'echarts';
export default class Chart extends Component {
    constructor(props) {
        super(props);
            this.state = {
                width: '100%',
                height: '100%'
            };
           this.chart = null;
    }
    //初始化
    initChart = el => {
        console.log(111);
        const renderer = 'canvas';
        var that =this;
       
        return new Promise(resolve => {
            setTimeout(() => {
                that.chart = echarts.init(el, null, {
                    renderer,
                    width: 'auto',
                    height: 'auto'
                });
               
                resolve();
            }, 0);
        });
    };
    //重新渲染图形
    resize = () => {
        this.chart && this.chart.resize();
    };
    //重新设置新的option
    setOption=(option)=>{
         if(!this.chart){
             return ;
         }
        // notMerge:可选，是否不跟之前设置的 option 进行合并，默认为 false，即合并。
        //LazyUpdate:可选，在设置完 option 后是否不立即更新图表，默认为 false，即立即更新。
         const notMerge = this.props.notMerge; //是否
         const lazyUpdate = this.props.lazyUpdate;
  
         this.chart.setOption(option, notMerge, lazyUpdate);
    }
    //销毁挂载点
    dispose =()=>{
        if(!this.chart){
            return ;
        }
        this.chart.dispose();
        this.chart = null;
    }
    async componentDidMount(){
        await this.initChart(this.el);
        this.setOption(this.props.option);
        var that = this;
        window.addEventListener('resize',
            function(){
                let timer;
                if(timer){
                    clearTimeout(timer);
                }
                timer = setTimeout(()=>{
                    that.resize();
                },100)
            })
    }
    componentDidUpdate(){
        this.setOption(this.props.option);
    }
    componentWillUnmount(){
          this.dispose ();
    }
    render() {
      
        const {width,height} = this.state;
        return (
            <div ref={el => (this.el = el)} className="chart" style={{width,height}}></div>
        )
    }
}
