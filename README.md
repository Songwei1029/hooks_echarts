## 前言
react的hooks兴起之后，我们开始了新技术的探研，重新构建了以react，hooks，echarts为基准的框架，对可视化的封装。开箱即可用，非常实用，特别是如果对echarts有需求的。

### 项目介绍
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_one.png)


#### 第一步：拉取项目

```
git clone https://github.com/Songwei1029/hooks_echarts.git
```
#### 第二部：配置npm源
如果已有npm/yarn则跳过

``` bash
# npm
npm config set registry=https://registry.npm.taobao.org -g

# cnpm，使用cnpm
npm install -g cnpm

# yarn
yarn config set registry https://registry.npm.taobao.org -g
```

#### 第三步：依赖安装

> 如果你本地没有安装 `yarn`，请提前安装，[yarn下载](https://yarnpkg.com/zh-Hans/docs/install)

``` bash
yarn install
```

#### 第四步：启动项目

``` bash
# 启动本地服务预览
npm start
或
yarn start

# 构建打包
npm run build
或
yarn build

# 打包并查看包大小分析
npm run analyze
```

