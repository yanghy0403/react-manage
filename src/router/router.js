// import basicLayout from '../layout/layout'
import Analysis from '../page/dashboard/Analysis'
import Monitor from '../page/dashboard/Monitor'
import Workbench from '../page/dashboard/Workbench'
import Personal from '../page/Personal'
import Stepform from '../page/form/Stepform'
import Advanceform from '../page/form/Advanceform'
import Tablelist from '../page/list/Tablelist'
import Basiclist from '../page/list/Basiclist'
import {
    OrderedListOutlined,
    UserOutlined,
    FormOutlined,
    SmileOutlined
  } from '@ant-design/icons';

let  routes=[
    {
        title:'Dashboard',
        path:'/dashboard',
         icon: <SmileOutlined/>,
        routes:[
            {
                title:'分析页',
                id:'1-2',
                path:'/dashboard/Analysis',
                component:Analysis
            },
           
            {
             title:'监控页',
             id:'1-1',
             path:'/dashboard/Monitor',
             component:Monitor
            
            },
            {
                title:'工作台',
                id:'1-3',
                path:'/dashboard/Workbench',
                component: Workbench
             },
           
        ]
    },
    {
        title:'表单页',
       path:'/form',
        icon: <FormOutlined />,
        routes:[
            {
                title:'分布表单',
               path:'/form/step-form',
                component:Stepform
            },
            {
             title:'高级表单',
            path:'/form/advanced-form',
            component:Advanceform
            },
          
        ]
    },
    {
        title:'列表页',
        path:'/list',
        icon: <OrderedListOutlined />,
        // component:Personal
        routes:[
            {
                title:'查询表格',
                path:'/list/table-list',
                component:Tablelist
            },
            {
                title:'标准列表',
                path:'/list/basic-list',
                component:Basiclist
            }
        ]
    },
    {
        title:'个人页',
        path:'/personal',
        icon: <UserOutlined/>,
        component:Personal
    }
]
 export default routes;