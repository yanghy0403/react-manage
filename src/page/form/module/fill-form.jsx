import React, { Component } from 'react'
import { Form, Input, Button,Select  } from 'antd';

const { Option } = Select;
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 12 },
  };
export default class Fillform extends Component {
    state={
        form:{}
    }
    onFinish= (values)=>{
       
        this.setState({
            from:values
        })
        this.props.next(values);
       
    }
    onFinishFailed = (errorInfo)=>{
          console.log(errorInfo)
    }
    render() {
     
        let {Data} = this.props;
        return (
            <Form
            {...layout}
            name="basic"
            initialValues={Data}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
           
            // style={{width:'60%',margin:'0 auto'}}
            >
                <Form.Item label="付款账户" name="account" rules={[{required:true,message:'请选择付款账户'}]}>
                        <Input/>
                </Form.Item>
              
                    <Form.Item label="收款账户">
                        <Input.Group compact style={{display:'flex'}}>
                              <Form.Item
                                    name={['collection', 'type']}
                                    noStyle
                                    rules={[{ required: true, message: '请选择支付方式' }]}
                                >
                                    <Select style={{ width: 120 }}>
                                        <Option value="zhb">支付宝</Option>
                                        <Option value="wx">微信</Option>
                                        <Option value="bank">银行卡</Option>
                                    </Select>
                                </Form.Item>
                               <Form.Item name={['collection','credaccount']} noStyle rules={[{ required: true, message: '请填写收款账户' }]}>
                                   <Input style={{textAlign:'left'}}/>
                                </Form.Item> 
                          </Input.Group>
                        </Form.Item>
                    <Form.Item
                        label="收款人姓名"
                        name="name"
                        rules={[{ required: true, message: '请填写收款人姓名!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="转账金额"
                        name="money"
                        rules={[{ required: true, message: '请输入转账金额!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" >下一步</Button>
                  
                    </Form.Item>
            </Form>
        )
    }
}

