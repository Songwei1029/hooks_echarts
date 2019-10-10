import { message } from 'antd';

/**
 * 单例模式 - 唯一消息类
 */
class UniqueMsg {
  constructor() {
    this.msgMap = new Map();
  }

  // 获取实例，静态方法
  static getInstance() {
    if (!this.instance) {
      this.instance = new UniqueMsg();
    }
    return this.instance;
  }

  /**
   * 设置消息
   * @param {*} key 唯一消息key
   * @param {string} content 消息内容
   * @param {string} type 消息内容
   * @param {number} duration 消息持续时间，以秒为单位
   */
  setMsg(key, content, type = 'error', duration = 3) {
    if (!this.msgMap.has(key)) {
      // 开启一个新的消息，获得消息句柄
      const handler = message[type](content, 0);
      // 开启定时器，保存timer
      const timer = setTimeout(
        _key => {
          // 消息执行结束，开始清除操作
          const existMsg = this.msgMap.get(key);
          if (existMsg) {
            // 执行handler将消息关闭
            existMsg.handler && existMsg.handler();
            // 删除对应消息的key
            this.msgMap.delete(_key);
          }
        },
        duration * 1000,
        key
      );
      // 将消息相关的信息保存在map中
      this.msgMap.set(key, { handler, timer });
    }
  }

  /**
   * 删除消息
   * @param {*} key 唯一的消息key
   */
  delMsg(key) {
    if (this.msgMap.has(key)) {
      const existMsg = this.msgMap.get(key);
      if (existMsg) {
        // 执行handler将消息关闭
        existMsg.handler && existMsg.handler();
        // 清除定时器
        existMsg.timer && clearTimeout(existMsg.timer);
        // 删除对应消息的key
        this.msgMap.delete(key);
      }
    }
  }

  /**
   * 清除消息
   */
  clearMsg() {
    if (this.msgMap.size > 0) {
      for (let { handler, timer } of this.msgMap.values()) {
        handler && handler();
        timer && clearTimeout(timer);
      }
      this.msgMap.clear();
    }
  }
}

export default UniqueMsg.getInstance();
