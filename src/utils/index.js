import produce from 'immer';

// lodash
// 如果您要使用import _ from 'lodash'这种形式来使用lodash
// 建议配置config/webpack.config.js的LodashModuleReplacementPlugin以使打包最小
// 参考https://github.com/lodash/lodash-webpack-plugin#feature-sets

// import set from 'lodash/set';

/**
 * 防抖函数 / 节流函数
 * @param {function} fn 需要执行的函数
 * @param {number} wait 间隔时间
 * @param {object} options 参数
 *                         leading，函数在每个等待时延的开始被调用
 *                         trailing，函数在每个等待时延的结束被调用
 *                         maxwait(debounce才有的配置)，最大的等待时间，因为如果 debounce 的函数调
 *                         用时间不满足条件，可能永远都无法触发，因此增加了这个配置，保证大于一段时间后一定能执行一次函数
 */
export { default as debounce } from 'lodash/debounce';
// throttle 就是设置了 maxwait 的 debounce
export { default as throttle } from 'lodash/throttle';
export { default as isEmpty } from 'lodash/isEmpty';
export { default as isEqual } from 'lodash/isEqual';
export { default as isFunction } from 'lodash/isFunction';
export { default as isPlainObject } from 'lodash/isPlainObject';

// hooks
export { default as useWindowSize } from './hooks/useWindowSize';
export { default as usePrevious } from './hooks/usePrevious';
export { default as useDidUpdate } from './hooks/useDidUpdate';

// eslint-disable-next-line
const URLREG = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

/**
 * 用于保存数据公共方法
 * 支持{"groupuser.user_info": {}}的形式
 */
export const saveDataCommon = produce((state, payload) => {
  // Object.keys(payload).forEach(k => set(state, k, payload[k]));
  Object.keys(payload).forEach(k => (state[k] = payload[k]));
});

/**
 * 判断是否为url
 * @param {string} url 路径
 */
export function isUrl(url) {
  return URLREG.test(url);
}

/**
 * 将url转成列表
 * /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
 * @param {string} url 路径
 */
export function urlToList(url) {
  const urlList = url.split('/').filter(i => i);
  return urlList.map((_, index) => {
    return `/${urlList.slice(0, index + 1).join('/')}`;
  });
}

/**
 * 计算占比
 * @param {data}
 */
export function calculateProportion(data, sum) {
  return Array.isArray(data)
    ? data.map((item, index) => {
        item['index'] = index + 1;
        item['percent'] =
          (
            ((item.read || item.publish || item.pv || item.share || item.registered) / sum) *
            100
          ).toFixed(2) + '%';
        return item;
      })
    : [];
}
