import basicLayout from '../layout/layout'
import Analysis from '../page/Analysis'
import Monitor from '../page/Monitor'
import Workbench from '../page/Workbench'
import Personal from '../page/Personal'
import {
  
    UserOutlined,
   
    SmileOutlined
  } from '@ant-design/icons';

let  routes=[
    {
        title:'Dashboard',
        path:'/',
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
            title:'控制台',
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