## 前言
react的hooks兴起之后，我们开始了新技术的探研，重新构建了以react，hooks，echarts为基准的框架，对可视化的封装。开箱即可用，非常实用，特别是如果对echarts有需求的。

### 项目介绍
1. hooks刚出来时我们就在使用，已经踩了很多坑而完善了这一整套开箱即用的框。
2. 针对echarts进行了封装，菜单栏、面包屑等都做了自己的封装，对于icon都真正意义上进行了按需加载。
3. 对于echarts常用的，都做了很详细的注释说明，小白也都能很快上手。
4. 对自己项目需求但是不常用的进行了封装（特别是时间选择器）。
5. 我们把常用的都会封装，以达到统一性，我也已把封装方法写出来了大家指导指导：[npm插件制作](https://juejin.im/post/5c24c6b06fb9a049f57133d5)

`注：本文不是针对hooks用法说明，也把项目中用法删了，所以hooks用法很少，只有自己封装使用到的用法，但是没有给予注释，建议直接查看官网，更准确`

![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_one.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_two.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_three.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_four.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_five.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_six.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_seven.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_eight.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_night.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_ten.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_eleven.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_twelve.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_thirteen.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_fourteen.png)
![](https://github.com/Songwei1029/hooks_echarts/raw/master/src/assets/images/introduce_fifteen.png)


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

