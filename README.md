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
│   uni.scss  定义全局样式变量
│
└───common   公用的js
│   └───css
│   	└───my
│   │		│ icon.css 工作台图标按钮
│   │		│ main.css 自定义的共有样式
│   │   html-parser.js
│   │   icon.scss
│   │   uni.css
│   │   util.js
│   │	config.js	配置服务器地址
│   │	constants.js 常量 ：请求的参数与计算所需模板
│   │	helpers.js  通用的一些工具方法
│   │	report.js  报表类
│   │	reportparam.js 请求报表的参数类
│   │	storage.js 存储类
│   │	...
│   │
│ 
└───components   组件/插件
│   └───******   插件市场下载（未改动）
│   └───******-1   个性化制订组件（插件市场改动版）
│   └───self ***   自定义的组件
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
└───store  vuex
│   └───modules   状态模块
│   │   │   global.js 全局状态
│   │   │   login.js 登录登出状态 
│   │   │   report.js 报表状态
│   │   index.js vuex 主文件
│    


```
## 开发日志
### 2019/8/6
> * 第一次整合项目finance-uniapp【v 0.1.0】
> * 实现了基本的页面设计


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

### 任务
* 2019/11/29 任务：把请求接口的方法从页面中分离
* todo 把map整合到请求结果返回中  利润表的本年累计问题 12/11 get 


## 优化目标，做分页请求
目前还不需要   todo maper方法
>* 对现金流水和现金流量的分页做了 其他的还没做

## 2020/1/11 真机调试TODO
* 主页面板 本月利润 的位置 ok
* 内容页面进入时请求数据时显示在加载 ok
* 内容页面底部提示下面还有内容，现在容易让人误以为下面没有内容了 ok 用屏幕高度减 导航高度
* 应收应付的样式 字体颜色 面板最后一个的位置 ok  请求时能够带着账龄区间的设置
* 金额显示的格式 对所有数字都用这种格式处理 风格统一问题
* 面板数据显示 对收入利润支出都根据其数值大小单独控制
* 登录页面的样式问题
* 服务页要放的内容

## 2020/1/30 
* 把应收应付账款 按账龄区间显示
* TODO 把所有的账龄的数据请求回来

## 2020/2/10
>* 增加流水和流量 的页面缓存功能
>* 应收应付账龄可以分页请求
>* 将请求参数模板作为一个类，可以实现对请求参数的灵活改变
>* 将每个报表类型作为一个类 ，每个类有不同的数据变换方法，根据业务需要写
>* constants 存放常量 config 存放配置信息  helper 常用处理工具

## 2020/3/3
>* AgeAnalysisRpt 类中 完善对应收应付帐龄区间设置错误的错误提示， 账套主管要按6个要求的区间设置账龄区间
>* AgeAnalysisRpt 在返回结果之前过滤掉余额为空的科目
>* 优化首页中分年月显示的请求逻辑
>* 优化流水流量页面中 布局显示
>* 解决真机调试中 缓存为空的bug

## 2020/3/4
* 修复因为uniapp版本升级导致 uni-icon 命名冲突问题，引入组件时 使用 uni-icons
* 修复服务页面中 因为同一个template中存在多个相同key值的v-for 导致命名冲突问题  区分key值的命名

## 2020/3/5
* 将显示加载提示框封装到helper中，并改为可穿透模式

## 2020/3/11
* 不同大小的按钮控制块 可以用 flex布局的 项目属性 flex-grow shrink 实现

## 2020/3/14 重构
> * 将数据获取与处理从页面中提取到vuex中，页面只负责使用数据
> * 对流水流量、应收应付 公用的部分做成自定义的组件
> * 增加修改密码的功能
> * 重构登录页
> * 统一风格样式，在uni.scss中定义了颜色的变量，可以做到风格的统一
> * 用css sprite 雪碧图制作detail页的按钮图标

## 2020/3/25 修改现金流水接口
> * 从cashFlowDetail 接口 改为GL_GLDetail接口，重写了流水类中toMap方法
> * 加入自定义app图标
> * toDo 修改服务页的图标  



## 说明
### 报表请求设计
1. constant中存储请求各报表时不变的一些参数，reportparam 类进行报表参数示例化的时候引用constant中对应的参数设置，注意constant 模块中报表参数的名称即需要请求报表的名称，加入新报表参数的时候需要保持一致
2. report 类负责数据的请求与第一步处理，使用reportparam对象作为请求报表的参数 不同的子类也就是子报表继承了report类，按照需求的不同重载toMap 和 getRportData 方法
3. 利润表、资产负债表、纳税表 没有直接对应的报表类，而是使用科目余额表的数据按照constant中的模板进行生成的，生成的方式是调用helper中对应的方法
4. 账龄显示要求账套要设置如下区间账龄区间设置 按半年（180天）、一年（180天-365天）、两年（365天-730天）、三年（730天-1095天）、五年（1095天-1825天）、五年以上（1825天以上）修改下
5. 资产负债表 资产 和 负债 从 系统中看公式 从余额表接口中找对应编号的本年累计 资产类记借方 如果公式中标记是借 只找对应编号中期末余额是借的数字为正 如果公式中没写借贷 则根据借正贷负计算结果 负债类 相同 不过是借 负 贷 正 记贷注意 本年累计的方向对应数据的正负  资产 借 – 贷 + 负债 借+ 贷- 项目列写死

### 页面状态管理
1. 用vuex对页面的状态进行管理，报表的请求也发生在这里面，组件直接使用vuex中所需的状态
2. login模块负责登录得状态管理
3. report 负责各报表页得状态管理
4. global 负责全局的状态管理

### 缓存设计
1. 报表的缓存发生在报表请求以后，有两种实现方式，一种是存储tomap之后的数据，像科目余额表，应收应付账龄分析，都是这种情况，另一种是流水流量表， 因为这两个表是按需加载的，所以为了统一请求与读缓存的操作，是按请求结果存入缓存
2. 缓存的key 是报表名称+该报表对应的报表时间拼接而成,用户信息的缓存名称是 userInfo 包含公司名、token 、id等

### 登录流程
1. 前端用户名密码登录，后端根据用户名从自建数据库找到对应的账套主管以及账套，登录T+返回 Token, 将token 返回给前端，写入缓存。接口请求时，从缓存中读token，如果缓存中没有token，肯定是显示未登录状态，如果在请求时显示token失效，让用户重新登录。 