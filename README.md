
> **注意：** 每次拉取代码后，在运行前都应该先执行一下 `yarn install`，防止包没有更新或安装引起的报错。如果执行命令还是会报错，可以将项目中的`node_modules`文件夹删除，然后执行`npm cache clean --force`或`yarn cache clean`命令清除缓存，最后再执行`yarn install`重新安装依赖。

### 开发环境搭建

#### 配置hosts

根据不同操作系统，在hosts文件中添加如下配置：

``` bash
127.0.0.1	xxxx.xxxx.xx
```

#### 配置npm源

``` bash
# npm
npm config set registry=https://registry.npm.taobao.org -g

# cnpm，使用cnpm
npm install -g cnpm

# yarn
yarn config set registry https://registry.npm.taobao.org -g
```

#### 依赖安装

> 如果你本地没有安装 `yarn`，请提前安装，[yarn下载](https://yarnpkg.com/zh-Hans/docs/install)

将项目拉取到本地，在保证前面步骤没出问题到情况下，执行下面的代码

``` bash
yarn install
```

#### npm scripts

推荐使用 `yarn` 进行包的管理。

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

### 目录介绍

- `config/`：webpack配置目录
- `public/`：静态文件目录，只能在`index.html`中引入，注意引入路径。
- `scripts/`：执行命令的相关脚本文件
- `src/`：开发文件目录，`webpack`、`babel`将会对这个文件夹中的所有文件进行编译
    - `src/api/`：管理和封装项目请求的接口
    - `src/assets/`：资源文件目录，可以通过`import`引入
    - `src/components/`：公用组件目录，可以复用的组件放在这里
    - `src/constants/`：用于放置一些公用的配置信息（文件）
    - `src/layouts/`：放置布局相关的组件
    - `src/pages/`：放置页面文件（或者叫做路由页面）
    - `src/utils/`：工具函数目录，可以将公用的一些函数放到这里

- `.editorconfig`：配置一些代码格式，跨编辑器通用。[editorConfig编辑器配置](https://www.jianshu.com/p/00ac7bd5e74e)
- `.env`：`create-react-app`的一个配置文件，[查看详情](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- `.eslintrc.json`：`eslint`配置文件，`create-react-app`没有`eject`，这个文件不会起作用。如果你要禁用`eslint`，
找到 `config/webpack.config.js` 文件，注释掉`325-339`行的代码就行
- `.prettierrc`：`prettier`配置文件，主要配置代码格式化的样式。此项目使用`husky`和`lint-staged`和`prettier`会在`git commit`的时候对`src`目录的`jsx,js,less`文件进行格式化操作。
- `.stylelintrc.json`：`stylelint`配置文件
- `jsconfig.json`：`VSCode`可以使用此文件，从中识别到在`webpack`配置的`alias`
- `setupProxj.js`：用于配置本地开发环境后台接口的反向代理


### 用到的包介绍

> 太多了，可以去github搜索，然后查看用法...
