# finance-uniapp 项目产品日志

------

为了以后产品开发和迭代工作的顺畅进行，在此追踪记录整个产品的开发迭代历程
## 项目目录结构
```
finance-uniapp
│
│   README.md   产品开发迭代历程
│   App.vue
│   main.js
│   manifest.json
│   pages.json
│   uni.scss
│
└───common   全局样式
│   │   html-parser.js
│   │   icon.scss
│   │   uni.css
│   │   util.js
│   
└───components   组件/插件
│   └───******   插件市场下载（未改动）
│   └───******-1   个性化制订组件（插件市场改动版）
│   └───l-components  【我的】功能模块所使用的组件（李鹏园）
│       └───uni-badge
│       └───...
│   
└───pages  页面
│   └───service   【服务】功能模块页面
│   └───workingtable   【工作台】功能模块页面
│   └───my   【我的】功能模块页面
│   
│
└───static   静态资源
│   └───images   图片资源
│       │   workingtable.png   以下6图为bar使用图
│       │   my.png  
│       │   ... （6）...
│       │   my_select.png  
│       │
│       └───l-img   【我的】功能模块所使用的图片（李鹏园）
│       └───w-img   【工作台】功能模块所使用的图片（李志展）
│       └───service-img   【服务】功能模块所使用的图片（王远）
│
└───...

```
## 开发日志
### 2019/8/6
> * 第一次整合项目finance-uniapp【v 0.1.0】
> * 实现了基本的页面设计









## 迭代日志
### 2019/10/04
> * 修复了service 中 第七行 <swiper-item v-for="(item, index) in banner" :key="index"> 增加了索引
> * 增加了images中更新了图片 换成了没水印的png图  增加了年月切换 引入了zz-switchc 组件
> * 去除了**
> 
### 2019/12/2
> * manifest.json 中修改了uni.request请求持续等待的时间
> * 将tax中的接口请求分离到helper中
> * T+ 中如果只有两个月的账，请求无账月份也会返回数据，但是没有本期发生额，会导致显示错误，通过限制选择无账月份来解决这个问题
### 2019/12/4
> * 对请求接口做了缓存，缓存类在 storage.js中，从helper.js 中读取缓存类如果缓存类在输出时加 {} 就报错 不加就没事，这个问题待解决
> * 对请求接口失败情况没处理

### 2019/12/6
> * 资产负债页面完成 
> * 将计算和tomap 分离到helper中，但是还没有进一步分离方法 下一步改造一下这两个方法 适应利润表的处理
> * 资产 负债的项目以及公式放在data.js文件中

### 2019/12/31
> * 应收应付接口打通，界面数据完成
> * todo 样式需优化 、合同待完成


