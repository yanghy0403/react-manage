import React, { Component,useState  } from 'react'
import moment from 'moment';
import { Card ,Row,Col, Input,Button,Form,Table, Space,message,Tooltip,Modal, Menu, Dropdown,DatePicker,Typography } from 'antd'
import {
    PlusOutlined,
    ReloadOutlined,
    ColumnHeightOutlined,
    SettingOutlined
  } from '@ant-design/icons';
import axios from 'axios';
import Global from '../../util/config';
import style from './tablelist.module.scss'
const {baseUrl} = Global; //全局baseUrl
const { TextArea } = Input;
let defaultSelectedKeys= 'default';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const talout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const TableModl = (props)=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
  //点击新建
  const showModal = () => {
    setIsModalVisible(true);
  };
  //确定
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
        setIsModalVisible(false);
       setConfirmLoading(false);
       message.success('添加成功');
       props.handleReload();
    }, 2000);
  };
  //取消
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //刷新
 const handleReload =()=>{
       props.handleReload();
 }
 //调用父组件设置密度方法
 const Setdensity=(value)=>{
    
     props.Setdensity(value)
 }
 //点击选中的密度选项
 const handleClickMenu=(item)=>{
  
    defaultSelectedKeys = item.key;
    Setdensity(item.key);
}

const menu = (
 <Menu selectable defaultSelectedKeys={[defaultSelectedKeys]} onClick={handleClickMenu}>
   <Menu.Item key="default">默认
       
   </Menu.Item>
   <Menu.Item key="middle">
      中等
   </Menu.Item>
  
   <Menu.Item key="small">紧凑</Menu.Item>
 </Menu>
);
  return (
      <div>
            <div className={style.table_title}>
                    <span>查询表格</span>
                    <ul>
                        <li>
                            
                            <Button icon={ <PlusOutlined />} type="primary" onClick={showModal}>新建</Button>
                        </li>
                        <li>
                            <Tooltip placement="top" title="刷新">
                                <ReloadOutlined onClick={handleReload}/>
                             </Tooltip>
                            
                        </li>
                        <li>
                            <Tooltip placement="top" title="密度">
                               
                                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" arrow>
                                   <ColumnHeightOutlined />
                                </Dropdown>
                             </Tooltip>
                            
                        </li>
                        <li>
                            <Tooltip placement="top" title="列设置">
                                <SettingOutlined />
                            </Tooltip>
                            
                        </li>
                    </ul>
            </div>
            <Modal title="新建规则" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} confirmLoading={confirmLoading}>
                <Form {...layout} preserve={false}>
                     <Form.Item label="规则名称" rules={[{required:true,message:'请输入'}]} name="ruleName">
                          <Input/>
                     </Form.Item>
                     <Form.Item label="描述" rules={[{required:false,message:'请输入'}]} name="desc">
                          <TextArea rows={3} />
                     </Form.Item>
                </Form>
            </Modal>
      </div>
  )
}



export default class Tablelist extends Component {
    constructor(props){
        super(props);
        this.state={
             columns:[
                  {
                    title: '规则名称',
                    dataIndex: 'ruleName',
                    key: 'ruleName',
                    align:'center'
                  },
                  {
                    title: '描述',
                    dataIndex: 'desc',
                    key: 'desc',
                    width:'30%',
                    align:'center'
                  },
                  {
                    title: '服务调用次数',
                    dataIndex: 'num',
                    key: 'num',
                    align:'center'
                  },
                  {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                    align:'center',
                    render:(status)=>{
                        switch(status){
                            case 1:
                            status= '运行完成'
                            break;
                            case 2:
                            status= '运行中'
                              break;
                            case 3:
                             status='异常' 
                             break;
                            case 4:
                             status = "关闭"
                             break;
                            default:
                             status="运行完成"
                             break;
                        }
                      return status;
                    }
                  },
                  {
                    title: '上次调度时间',
                    dataIndex: 'prevdate',
                    key: 'prevdate',
                    align:'center'
                  },
                  {
                    title: '操作',
                    dataIndex: 'oper',
                    key: 'oper',
                    align:'center',
                    render:(record)=>(
                      <Space size="middle">
                          <Typography.Link>编辑</Typography.Link>
                          <Typography.Link>订阅</Typography.Link>
                      </Space>
                    )
                  },
             ],
             data:[],
            
             loading:false,
             pagination:{
                 current:1,
                 pageSize:10,
                 total:0
             },
             size:'default',
             Form:{}
        }
    }
    formRef = React.createRef();
    //获取表格数据
    getData=()=>{
       var url= baseUrl + '/table-list';
        let data={
            offset:this.state.pagination.current-1,
            limit:this.state.pagination.pageSize
        }
        this.setState({ loading: true });
        axios.get(url,{params:data}).then(res=>{
            //  console.log(res);
             if(res.data.code ===200){
                   let data = res.data.data;
                   this.setState({
                        data:data.list,
                      loading:false,
                        pagination:{
                            ...this.state.pagination,
                            total:data.total
                        }
                   })
             }
        }).catch(error=>{
              message.error(error);
        })
    }
    //表格数据发生变化
    handleChange =(pagination)=>{
       
         let newPag = JSON.parse(JSON.stringify(pagination));
         this.setState({ pagination:newPag },()=>{
             this.getData();
        });
       
    }
    //刷新
    handleReload=()=>{
        this.getData();
    }
    //设置密度
    Setdensity=(value)=>{
      
        this.setState({
            size:value
        })
    } 
    //确定获取表单
    onFinish = (values) => {
       
        var form = {
             ...values,
             prevDate:moment(values.prevDate).format(dateFormat)
        }
          this.setState({
            Form:form
          })
        
      };
      //重置
      onReset = () => {
        this.formRef.current.resetFields();
      };
      onOk=(value)=> {
       
       let formateDate = moment(value).format(dateFormat);
       console.log(formateDate);
       this.setState({
        prevDate:formateDate
       })
   
      }
    componentDidMount(){
          this.getData();
    }
    render() {
        let {columns,data,pagination,loading } =  this.state;
      
        return (
            <div>
                <Row style={{ marginBottom: 20 }} className="header_title">
                    <Col span={24}>
                        <p>查询表格</p>
                    </Col>
                </Row>
                <div className="content_main">
                     <div className={style.top}>
                        <Form {...talout} ref={this.formRef} onFinish={this.onFinish}>
                                <Row gutter={24} >
                                    <Col span={6}>
                                            <Form.Item label="规则名称" name="ruleName">
                                                <Input placeholder="请输入"/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                            <Form.Item label="描述" name="description">
                                                <Input placeholder="请输入"/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                            <Form.Item label="服务调用次数" name="num">
                                                <Input placeholder="请输入"/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                            <Form.Item label="上次调度时间" name="prevDate" >
                                               <DatePicker showTime format={dateFormat}/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                           <Form.Item>
                                               <Button htmlType="button" onClick={this.onReset}>重置</Button>
                                               <Button type="primary" htmlType="submit">查询</Button>
                                            </Form.Item>
                                           
                                    </Col>
                                </Row>
                        </Form>
                     </div>
                     <div className="table" style={{marginBottom:50}}>
                         
                         <Card >
                             <TableModl handleReload={this.handleReload} Setdensity={this.Setdensity}/>
                             <Table columns={columns} dataSource={data} rowKey="id" pagination={pagination} loading={loading} onChange={this.handleChange} size={this.state.size}/>
                           
                            
                         </Card>
                     </div>
                </div>
            </div>
        )
    }
}
