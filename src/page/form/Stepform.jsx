import React, { Component } from 'react'
import { Row, Col, Steps,Card } from 'antd'
import Fillform from './module/fill-form'
import Configform from './module/config-form'
import Completeform from './module/form-complete'
import style from './stepform.module.scss'
const { Step } = Steps;


//做来验证下一步拿到的数据是否是第一步填写的数据，Form可以是空对象，id无意义
let Form = {
    id: 1
};
 //转账信息默认信息
let Data = { 
    account: 'ant-design@alipay.com',
   collection: { credaccount: 'test@example.com', type: 'zhb' },
   name: 'Alex',
   money:500
 }
const MyStep = () => {
   
   
    const [current, setCurrent] = React.useState(0);

    const next = (value) => {
        Form = {
            ...Form,
            ...value
        }
        steps[1].content = <Configform Form={Form} prev={prev} />;
        setCurrent(current + 1);

    };

    const prev = () => {
       
        Data = Form;
        setCurrent(current - 1);
    };
    const reset = () => {
        setCurrent(current - 2)
    }
    const steps = [
        {
            title: '填写转账信息',
            content: <Fillform next={next} Data ={Data}/>,
        },
        {
            title: '确认转账信息',
            content: <Configform Form={Form} prev={prev} next={next}/>,
        },
        {
            title: '完成',
            content: <Completeform Form={Form} reset={reset}/>,
        }
    ]
    return (

        <div className="ant-pro-grid-content" style={{ margin: '-24px -24px 0', width: 'auto' }}>
            <div className="ant-pro-grid-content-children" style={{ paddingBottom: 50 }}>
                <Row style={{ marginBottom: 20 }} className={style.header}>
                    <Col span={24}>
                        <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
                    </Col>
                </Row>
                <div className={style.row_content}>
                   <Card>
                      {/* <div className={style.wrap}> */}
                            <div className={style.step}>
                                <Steps current={current}>
                                    {steps.map(item => {
                                        return <Step key={item.title} title={item.title} />
                                    })}
                                </Steps>
                            </div>
                            <div className="steps-content">{steps[current].content}</div>

                        
                        {/* </div> */}
                   </Card>
                </div>

            </div>
        </div>

    )
}
export default MyStep;


