import basicLayout from '../layout/layout'
import Analysis from '../page/dashboard/Analysis'
import Monitor from '../page/dashboard/Monitor'
import Workbench from '../page/dashboard/Workbench'
import Personal from '../page/Personal'
import {
  
    UserOutlined,
   
    SmileOutlined
  } from '@ant-design/icons';

let  routes=[
    {
        title:'Dashboard',
        path:'/dashboard',
        id:'1',
        component:basicLayout,
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
            component:Workbench
           }
        ]
    },
    {
        title:'个人页',
        id:'2',
        path:'/personal',
        icon: <UserOutlined/>,
        component:Personal
    }
]
 export default routes;