import axios from 'axios';
import Qs from 'qs';
import { message } from 'antd';
import { codeMessage } from '@/constants/config';
import uM from './uniqueMsg';

const all = axios.all;
const spread = axios.spread;
const request = axios.create({
  timeout: 100000,
  responseType: 'json',
  paramsSerializer: params => {
    return Qs.stringify(params, { arrayFormat: 'brackets', encode: true });
  },
  withCredentials: true
});

// 请求拦截
request.interceptors.request.use(
  config => {
    return config;
  },
  err => Promise.reject(err)
);

// 响应拦截
request.interceptors.response.use(
  res => {
    // 登陆失效
    if (res.data && res.data.state === 10000) {
      // 跳转到登陆系统进行登陆
      window.location.href = `xxxxxxxx`;
    }

    // 获取到数据处理
    if (res.data && res.data.code === 200) {
      return res.data;
    }

    // 错误统一处理
    if (res.data && (res.data.code !== 0 || res.data.code !== 200)) {
      const msg = res.data.code ? res.data.msg : res.data.message;
      const msgKey = `${res.config.method}_${res.config.url}`;
      uM.setMsg(msgKey, msg);
      return;
    }

    // http异常
    if (res.status !== 200) {
      message.error(codeMessage[res.status]);
      return;
    }
  },
  err => {
    if (err.response && err.response.status >= 400 && codeMessage[err.response.status]) {
      message.error(codeMessage[err.response.status]);
    }
    Promise.reject(err);
  }
);

export { all, spread };
export default request;
