import React, { Component } from 'react'
import {Button} from 'antd'
import { CheckCircleFilled} from '@ant-design/icons';
import style from './form-complete.module.scss'
export default class Formcomplete extends Component {
    handleClick=()=>{
        this.props.reset();
    }
    render() {
        let {Form} = this.props;
        return (
            <div className={style.completeinfo}>
                  <div className={style.logo}>
                     <CheckCircleFilled className={style.logo_img}/>
                  </div>
                  <p style={{fontSize:26}}>操作成功</p>
                  <p style={{color: 'rgba(0,0,0,.45)'}}>预计两小时到账</p>
                  <div className={style.oper}>
                      <Button type="primary" onClick={this.handleClick}>再转一笔</Button>
                      <Button>查看账单</Button>
                  </div>
                  <ul className={style.content}>
                        <li>付款账户:  {Form.account}</li>
                        <li>收款账户:  {Form.collection.credaccount}</li>
                        <li>收款人姓名:  {Form.name}</li>
                        <li>转账金额:  {Form.money} 元</li>
                    </ul>
            </div>
        )
    }
}
