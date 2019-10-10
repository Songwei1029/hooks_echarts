import React from 'react';
import { LocaleProvider, message } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import BasicLayout from './layouts/BasicLayout';

message.config({
  maxCount: 3
});

moment.locale('zh-cn');

function App() {
  return (
    <LocaleProvider locale={zh_CN}>
      <BasicLayout />
    </LocaleProvider>
  );
}

export default App;
