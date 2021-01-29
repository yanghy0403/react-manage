import React, { Component,useState  } from 'react'
import moment from 'moment';
import { Card ,Row,Col, Input,Button,Form,Table, Space,message,Tooltip,Modal, Menu, Dropdown,DatePicker,Typography, Checkbox, Divider } from 'antd'
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
const CheckboxGroup = Checkbox.Group;
const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const talout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };



  const plainOptions = ['规则名称', '描述', '服务调用次数','状态','上次调度时间','操作'];
  const defaultCheckedList = ['规则名称', '描述', '服务调用次数','状态','上次调度时间','操作'];
//设置
const CheckboxModal = (props)=>{
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(false);//false代表样式全选中状态,true代表未全部选中
  const [checkAll, setCheckAll] = React.useState(true);//true代表数据选中状态
   //选中状态
  const onChange = list => {
     
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  
    props.propsColumn(list);
  };
   //多选
  const onCheckAllChange = e => {
    
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
   
   
  };
  //类别重置
  const onReset=()=>{
    setCheckedList( plainOptions);
    setIndeterminate(false);
    setCheckAll(true);
    props.propsColumn(plainOptions);
  }
  return (
       <div className={style.Edit}>
            <div className={style.header}>
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                   列展示
                </Checkbox>
                <Typography.Link onClick={onReset}>重置</Typography.Link>
            </div>
            <Divider style={{margin:'5px 0'}}/>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
       </div>
  )
}

  //表格头部查询表格一系列功能组件
const TableModl = (props)=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    let isEdit= false;
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
                                <Dropdown overlay={<CheckboxModal propsColumn={props.propsColumn}/>} trigger={['click']} arrow placement="bottomRight" getPopupContainer={triggerNode => triggerNode.parentNode}>
                                     <SettingOutlined/>
                                 </Dropdown>
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
             columns1:[
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
             Form:{},
             selectedRowKeys:[],//默认选中项的key
             selectedRows:[],//选中项数据
             count:0,//统计综合
            selectColumn:[],//选中的column
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
       this.getData();
      };
      //重置
      onReset = () => {
        this.formRef.current.resetFields();
      };

      //表格选中项发生变化
      onSelectChange=(selectedRowKeys,selectedRows )=>{
        this.setState({ selectedRowKeys });
       
        let count = selectedRows.reduce((prev,cur)=>{
            return prev + cur.num;
        },0)
        this.setState({count});
      
      }
      //批量审批
      handleApproval=()=>{

      }
      //批量删除
      handleDelete=()=>{
          this.setState({
              selectedRowKeys:[],
          })
          this.getData();
          setTimeout(()=>{
              message.success('删除成功')
          },1000)
      }
      //接收子组件传过来的类别
      propsColumn=(list)=>{
        
          let {columns1} = this.state;
          let newColumn = [];
           columns1.forEach(item=>{
                list.forEach(each=>{
                     if(item.title === each){
                        newColumn.push(item)
                     };
                })
          })
         
         this.setState({
             columns:[...newColumn]
         })
         
      }

    componentDidMount(){
          this.getData();
    }
    render() {
        let {columns,data,pagination,loading,selectedRowKeys  } =  this.state;
        const rowSelection ={
            selectedRowKeys,
            onChange:this.onSelectChange
        }
       
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
                                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} >
                                    <Col span={8}>
                                            <Form.Item label="规则名称" name="ruleName">
                                                <Input placeholder="请输入"/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                            <Form.Item label="描述" name="description">
                                                <Input placeholder="请输入"/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                            <Form.Item label="服务调用次数" name="num">
                                                <Input placeholder="请输入"/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                            <Form.Item label="上次调度时间" name="prevDate" >
                                               <DatePicker showTime format={dateFormat} style={{ width: '100%'}}/>
                                            </Form.Item>
                                    </Col>
                                    <Col span={8}>
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
                             <TableModl handleReload={this.handleReload} Setdensity={this.Setdensity} propsColumn={this.propsColumn}/>
                             <Table columns={columns} dataSource={data} rowKey="id" pagination={pagination} loading={loading} onChange={this.handleChange} size={this.state.size} rowSelection={rowSelection}/>
                          </Card>
                     </div>
                </div>
                {
                     this.state.selectedRowKeys.length>0 ? (
                        <div className={style.footer}>
                                <p>已选择{this.state.selectedRowKeys.length} 项 服务调用次数总计 {this.state.count}</p>
                                <p>
                                    <Button onClick={this.handleDelete}>批量删除</Button>
                                    <Button type="primary" onClick={this.handleApproval}>批量审批</Button>
                                </p>
                        </div>
                     ):null
                }
            </div>
        )
    }
}
