import React, { Component } from 'react'
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
interface Data{
    key:string,
    name:string,
    chinese:number,
    math:number,
    english:number

}
const columns:ColumnsType<Data> = [
    {
        title:'排名',
        dataIndex:'key',
        align:'center'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align:'center'
    },
    {
      title: 'Chinese',
      dataIndex: 'chinese',
      sorter: {
        compare: (a:any, b:any) => a.chinese - b.chinese,
        multiple: 3,
      },
      align:'center'
    },
    {
      title: 'Math',
      dataIndex: 'math',
      sorter: {
        compare: (a:any, b:any) => a.math - b.math,
        multiple: 2,
      },
     align:'center'
    },
    {
      title: 'English',
      dataIndex: 'english',
      sorter: {
        compare: (a:any, b:any) => a.english - b.english,
        multiple: 1,
      },
     align:'center'
    },
  ];
  
  const data :Data[] = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];
export default class SearchTable extends Component {
    render() {
        return (
          <Table<Data> columns={columns} dataSource={data} />
        )
    }
}
