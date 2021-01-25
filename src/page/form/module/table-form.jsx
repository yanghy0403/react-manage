
import React, { useState, } from 'react';
import { Table, Input,InputNumber, Button, Popconfirm, Form ,Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './table-form.scss'


const originData = [];
let count = 5;
//原数据
for (let i = 0; i < count; i++) {
  originData.push({
    key: i.toString(),
    name: `name ${i}`,
    age: 32,
    address: `address. ${i}`,
  });
}

  //单元格编辑
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  
    return (
      <td {...restProps}>
          {editing ? (
            <Form.Item name={dataIndex} style={{margin:0}} rules={[{required:true,message:`请输入${title}`}]}>
                {inputNode}
            </Form.Item>
          ):(children)}
      </td>
    )
    };
  
 const EditableTable = () => {
   
    const [form] = Form.useForm();
    const [data,setData] = useState(originData);
   
    const [editingKey,setEditingKey] = useState('');
    const isEditing = record =>record.key ===editingKey;
    
     //删除
    const handleDelete =  (key) => {
     
      const newData = [...data];
      const index = newData.findIndex(item=>key ===item.key);
      newData.splice(index,1);
      setData(newData);
      setEditingKey('')
    };
   const handleAdd = () => {
    
    
      const obj = {
        key: count.toString(),
        name: '',
        age: '',
        address: '',
        isAdd:true
      };
       const newData = [...data,obj];
       form.setFieldsValue(obj);
       setData(newData);
       setEditingKey(newData[newData.length-1].key)
     
    };
    //确定添加
  const Add=(record)=>{
    
       save(record.key);
       count+=1;
        
    }
    //编辑
    const edit=(record)=>{
     
          form.setFieldsValue({
            name:'',
            age:'',
            address:'',
            ...record
          });
          setEditingKey(record.key)
    }
    //取消
    const cancel=()=>{
       setEditingKey('');
    }
    //保存
    const  save = async key=>{
         try{
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex(item=>key ===item.key);
            if(index>-1){
                const item = newData[index];
                newData.splice(index,1,{...item,...row,isAdd:false});
                setData(newData);
                setEditingKey('')
            }else{
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
            console.log(newData);
         } catch(error){
             console.log(error);
         }
    }
    
   
     const columns = [
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          editable: true,
        },
        {
          title: 'age',
          dataIndex: 'age',
          editable: true,
        },
        {
          title: 'address',
          dataIndex: 'address',
          editable: true,
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (_, record) =>{
              
              const editable = isEditing(record);
            
              return editable ? (!(record.isAdd && record.isAdd ===true) ?
                    ( <span>
                       <Typography.Link onClick={()=>save(record.key)} style={{marginRight:16}}>
                         保存
                      </Typography.Link>
                      {/* <a onClick={()=>save(record.key)} style={{marginRight:16}}>保存</a> */}
                      <Popconfirm title="确定取消?" onConfirm={cancel}>
                            <span style={{color: '#1890ff'}}>取消</span>
                      </Popconfirm>
                  </span>): ( <span>
                      <Typography.Link onClick={()=>Add(record)} style={{marginRight:16}}>
                          添加
                        </Typography.Link>
                        {/* <a onClick={()=>Add(record)} style={{marginRight:16}}>添加</a> */}
                        <Popconfirm title="确定取消?" onConfirm={cancel}>
                              <span style={{color: '#1890ff'}}>取消</span>
                        </Popconfirm>
                    </span>)
              ):(<span>
                  <Typography.Link disabled={editingKey !== ''} onClick={()=>edit(record)} style={{marginRight:16}}>
                      编辑
                  </Typography.Link>
                   <span onClick={()=>handleDelete(record.key)} style={{color: '#1890ff'}}>
                       删除
                   </span>
              </span>)
          }
        },
      ];
      const mergedColumns = columns.map((col) => {
        if (!col.editable) {
          return col;
        }
  
        return {
          ...col,
          onCell: (record) => ({
            record,
            inputType: col.dataIndex ==='age' ? 'number':'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record)
          }),
        };
      });
      return (
        // <div className="table_form">
        //   <Button
        //     onClick={this.handleAdd}
        //     type="primary"
        //     style={{
        //       marginBottom: 16,
        //     }}
        //   >
        //     Add a row
        //   </Button>
        //   <Table
        //     components={components}
        //     rowClassName={() => 'editable-row'}
        //     bordered
        //     dataSource={dataSource}
        //     columns={columns}
        //   />
        // </div>
        <Form form={form} component={false}>
              <Table components={{body:{cell:EditableCell}}} bordered dataSource={data} columns={mergedColumns} rowClassName="editable" pagination={false}></Table>
              <Button
                onClick={handleAdd}
                 style={{
                  marginTop:20,
                  marginBottom: 16,
                  width:'100%',
                  border:'1px dashed #ddd'
                }}
              >
                  <PlusOutlined style={{paddingRight:10}}/> 新增成员
              </Button>
        </Form>
      );
    // }
  }
export default EditableTable;