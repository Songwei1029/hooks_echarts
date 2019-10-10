export const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '请求的资源在服务器上不存在。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，获取数据失败，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

export const routeMap = [
  {
    title: '折线图柱状图',
    icon: 'dashboard',
    type: 'link',
    key: '/dashboard',
    hideInMenu: false,
    children: []
  },
  {
    title: '饼图',
    icon: 'cloud-upload',
    type: 'link',
    key: '/policy',
    hideInMenu: false,
    children: []
  }, 
  {
    title: '关系图',
    icon: 'cloud-upload',
    type: 'link',
    key: '/relation',
    hideInMenu: false,
    children: []
  }, 
  {
    title: '地图',
    icon: 'cloud-upload',
    type: 'link',
    key: '/map',
    hideInMenu: false,
    children: []
  }, 
];
