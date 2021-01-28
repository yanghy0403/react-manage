import React from 'react';
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/lib/locale/zh_CN';

import App from './App'
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
     <App />
</ConfigProvider>
  ,
 
  document.getElementById('root')
);


reportWebVitals();
