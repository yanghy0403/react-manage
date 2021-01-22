import React, { Component } from 'react'
import {InfoCircleFilled,CloseOutlined} from '@ant-design/icons'
import { Form, Input, Button,Select  } from 'antd';
import style from'./configform.module.scss'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 12 },
  };
const Data={
    password:123456
}
  const Demo = (props)=>{
      //拿到提交的数据
      const onFinish=(values)=>{
         props.load();
        props.getPassword(values);
     }
     //调用父组件的返回方法
     const goBack=()=>{
      
        props.goBack()
     }
     return (
        <Form  {...layout} name="basic" onFinish={onFinish} initialValues={Data}>
        <Form.Item label="付款密码" name="password" rules={[{required:true,message:'请输入支付密码'}]}>
           <Input.Password />
       </Form.Item>
     
        <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={props.loading}>提交</Button>
                <Button onClick={goBack} style={{marginLeft:20}}>上一步</Button>
        </Form.Item>
      </Form>
     )
  }
export default class Configform extends Component {
    state={
         isshow:true,//是否展示提示信息
         Form:null,
         loading:false
    }
    //返回上一步
    goBack=()=>{
     
          this.props.prev();
    }
    //隐藏提示信息
    hide=()=>{
       this.setState({
           isshow:false
       })
    }
    //加载状态
    load=()=>{
        let that = this;
        that.setState({loading:true})
        let timer= setTimeout(()=>{
              that.setState({
                  loading:false
              })
              clearTimeout(timer);
              that.props.next();
        },3000)
    }
    //获取填写的密码
    getPassword=(value)=>{
        console.log(value);
        this.setState({
            Form:{
                ...this.state.Form,
                password:value.password
            }
        })
        console.log(this.state);
    }
    componentDidMount(){
      
        let {Form} = this.props;
          this.setState({Form})
         
    }
    render() {
       
        let Form = this.props.Form;
        
        return (
           
            <div className={style.wrap}>
                 {
                     this.state.isshow &&  ( <div className={style.remind}>
                        <span>
                            <InfoCircleFilled style={{color:'#64a6e2'}}/>
                            确认转账后，资金将直接打入对方账户，无法退回。
                        </span>
                        <CloseOutlined onClick={this.hide}/>
                    </div>)
                 }
                  <div className={style.detail}>
                       <ul>
                           <li>付款账户:  {Form.account}</li>
                           <li>收款账户:  {Form.collection.credaccount}</li>
                           <li>收款人姓名:  {Form.name}</li>
                           <li>转账金额:  {Form.money} 元</li>
                       </ul>
                       <Demo goBack={this.goBack} getPassword={this.getPassword} loading={this.state.loading} load={this.load}/>
                      

                       
                  </div>

            </div>
        )
    }
}
