/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios';
import store from '@/store/';
import router from '@/router/router';
import { serialize } from '@/util/util';
import { getToken } from '@/util/auth';
import { Message } from 'element-ui';
import website from '@/config/website';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Base64 } from 'js-base64';

router.beforeEach((to, from, next) => {
  if (to.path === '/userlogin') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === 'null' || token === '') {
      next('/userlogin');
    } else {
      next();
    }
  }
});

//默认超时时间
axios.defaults.timeout = 10000;
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500;
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress 配置
NProgress.configure({
  showSpinner: false
});


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  });

// //http request拦截
// axios.interceptors.request.use(config => {
//   //开启 progress bar
//   NProgress.start();
//   const meta = (config.meta || {});
//   const isToken = meta.isToken === false;
//   config.headers['Authorization'] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`;
//   if (getToken() && !isToken) {
//     //让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
//     config.headers['Blade-Auth'] = 'bearer ' + getToken()
//   }
//   //headers中配置serialize为true开启序列化
//   if (config.method === 'post' && meta.isSerialize === true) {
//     config.data = serialize(config.data);
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// });


// http response 拦截器
axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {

    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });


// //http response 拦截
// axios.interceptors.response.use(res => {
//   //关闭 progress bar
//   NProgress.done();
//   //获取状态码
//   const status = res.data.code || res.status;
//   const statusWhiteList = website.statusWhiteList || [];
//   const message = res.data.msg || res.data.error_description || '未知错误';
//   //如果在白名单里则自行catch逻辑处理
//   if (statusWhiteList.includes(status)) return Promise.reject(res);
//   //如果是401则跳转到登录页面
//   if (status === 401) store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }));
//   // 如果请求为非200否者默认统一处理
//   if (status !== 200) {
//     Message({
//       message: message,
//       type: 'error'
//     });
//     return Promise.reject(new Error(message))
//   }
//   return res;
// }, error => {
//   NProgress.done();
//   return Promise.reject(new Error(error));
// });

export default axios;
