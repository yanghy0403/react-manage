import React, { Component } from 'react'
import { Card ,Row,Col,Form, Input, Select,DatePicker, Space,TimePicker,Button } from 'antd'
import Tableform from './module/table-form'
import style from './stepform.module.scss'
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { RangePicker } = DatePicker;
const { Option } = Select;
const layout = {
    labelCol: { span: 24},
    wrapperCol: { span: 24},
  };
  const tailLayout = {
    labelCol: {offset: 6, span: 18},
    wrapperCol: { offset: 6, span: 18},
  };
export default class Advanceform extends Component {
    onFinish= (values)=>{
        console.log(values)
        // this.setState({
        //     from:values
        // })
        // this.props.next(values);
       
    }
    onFinishFailed = (errorInfo)=>{
          console.log(errorInfo)
    }
    render() {
        return (
            <div className="ant-pro-grid-content" style={{ margin: '-24px -24px 0', width: 'auto' }}>
                <div className="ant-pro-grid-content-children" style={{ paddingBottom: 50 }} className="advanceform">
                        <Row style={{ marginBottom: 20 }} className={style.header}>
                            <Col span={24}>
                                <p>高级表单常见于一次性输入和提交大批量数据的场景。</p>
                            </Col>
                        </Row>
                        <div className={style.row_content}>
                            

                            <Form  
                            {...layout}
                         
                             name="basic"
                             onFinish={this.onFinish}
                             onFinishFailed={this.onFinishFailed}
                             colon={false}
                             >
                                <Card title="仓库管理">
                                    <Row>
                                        <Col span={6}>
                                            <Form.Item label="仓库名" rules={[{ required: false, message: '请选择仓库名称' }]} name="warehouse_name"> 
                                                 <Input placeholder="请输入仓库名称"/>
                                             </Form.Item>   
                                        </Col>
                                        <Col span={8}>
                                              <Form.Item label="仓库域名" rules={[{ required: false, message: '请选择' }]} {...tailLayout} name="warehouse_url"> 
                                                <Input.Group compact >
                                                       <Row style={{display:'flex',border: '1px solid #ddd'}}>
                                                       
                                                            <Col span={4} className={style.url_span}> <span>http://</span></Col>
                                                            <Col span={16}> 
                                                                    <Form.Item  rules={[{ required: false, message: '请选择' }]} style={{marginBottom:0}} className={style.input}> 
                                                                        <Input placeholder="请输入" />
                                                                    </Form.Item>
                                                            </Col>
                                                            <Col span={4} className={style.url_span}><span>.com</span></Col>
                                                       </Row>
                                                 </Input.Group>
                                             </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                                 <Form.Item label="仓库管理员" rules={[{ required: false, message: '请选择管理员' }]} {...tailLayout} name="warehouse_keeper"> 
                                                    <Select  placeholder="请选择管理员">
                                                        <Option value="fxx">付晓晓</Option>
                                                        <Option value="zmm">周毛毛</Option>
                                                    </Select>
                                                </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={6}>
                                              <Form.Item label="审批人" rules={[{ required: false, message: '请选择审批员' }]} name="approver"> 
                                                    <Select  placeholder="请选择审批员">
                                                        <Option value="fxx">付晓晓</Option>
                                                        <Option value="zmm">周毛毛</Option>
                                                    </Select>
                                                </Form.Item> 
                                        </Col>
                                        <Col span={8}>
                                              <Form.Item label="生效日期" rules={[{ required: false, message: '请选择生效日期' }]} {...tailLayout} name="date"> 
                                                    <Space  className="basic_date">
                                                        <RangePicker locale={locale} style={{width:'100%'}}/>
                                                    </Space>
                                             </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                                 <Form.Item label="仓库类型" rules={[{ required: false, message: '请选择仓库类型' }]} {...tailLayout} name="warehouse_type"> 
                                                    <Select  placeholder="请选择仓库类型">
                                                        <Option value="privacy">私密</Option>
                                                        <Option value="public">公开</Option>
                                                    </Select>
                                                </Form.Item>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card title="任务管理" style={{marginTop:20}}>
                                    <Row>
                                        <Col span={6}>
                                            <Form.Item label="任务名" rules={[{ required: false, message: '请选择任务名称' }]} name="task_name"> 
                                                 <Input placeholder="请选择任务名称"/>
                                             </Form.Item>   
                                        </Col>
                                        <Col span={8}>
                                              <Form.Item label="任务描述" rules={[{ required: false, message: '请选择' }]} {...tailLayout} name="task_description"> 
                                                      <Input placeholder="请选择任务描述"/>
                                             </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                                 <Form.Item label="执行人" rules={[{ required: false, message: '请选择执行人' }]} {...tailLayout} name="task_execute"> 
                                                    <Select  placeholder="请选择执行人">
                                                        <Option value="fxx">付晓晓</Option>
                                                        <Option value="zmm">周毛毛</Option>
                                                    </Select>
                                                </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={6}>
                                              <Form.Item label="责任人" rules={[{ required: false, message: '请选择审批员' }]} name="task_duty"> 
                                                    <Select  placeholder="请选择审批员">
                                                        <Option value="fxx">付晓晓</Option>
                                                        <Option value="zmm">周毛毛</Option>
                                                    </Select>
                                                </Form.Item> 
                                        </Col>
                                        <Col span={8}>
                                              <Form.Item label="生效日期" rules={[{ required: false, message: '请选择生效日期' }]} {...tailLayout} name="time"> 
                                                     <TimePicker style={{width:'100%'}}/>
                                             </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                                 <Form.Item label="任务类型" rules={[{ required: false, message: '请选择任务类型' }]} {...tailLayout} name="task_type"> 
                                                    <Select  placeholder="请选择任务类型">
                                                        <Option value="privacy">私密</Option>
                                                        <Option value="public">公开</Option>
                                                    </Select>
                                                </Form.Item>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card style={{marginTop:20}}>
                                    <Row>
                                        <Col span={24}>
                                           <Tableform/>
                                        </Col>
                                    </Row>
                                </Card>
                                <div className={style.submit}>
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    
                                </div>
                            </Form>
                           
                        </div>
                    </div>
            </div>
        )
    }
}
