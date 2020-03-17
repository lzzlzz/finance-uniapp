# 参数
Appkey:9baa787e-4009-4726-a43d-f4ee8f11770b	Appsecret:tcwgop

D:\Chanjet\ISV\cjet_pri.pem 
 
reportQuery/GetReportData   "isNohappenDisplayAccu": true,

SELECT * FROM dbo.eap_reporttablecol WHERE ideap_reportsolution = 
(SELECT id FROM dbo.eap_reportsolution WHERE name = 'SA_SaleDeliveryDetailRpt' AND isDefault = '1')

java -jar finance-0.0.1-SNAPSHOT.jar --prefix.secret_url=D:\Chanjet\ISV\cjet_pri.pkcs8

# 需要解决的问题：
1.	资产负债表 接口没有  从科目余额表中 根据科目编码组成行不行 需要科目编码
利润表同此
资产负债表 资产 和 负债 从 系统中看公式 从余额表接口中找对应编号的本年累计
资产类记借方 如果公式中标记是借 只找对应编号中期末余额是借的数字为正 如果公式中没写借贷 则根据借正贷负计算结果

负债类 相同 不过是借 负 贷 正 记贷
注意 本年累计的方向对应数据的正负  资产 借 – 贷 + 负债 借+ 贷-
项目列写死

2.	预算管理表 的接口没有  数据应该从哪里取 等后台完成 
3.	现金流水表 对应明细账 GL_detailRpt  明确一下页面结构 形成确定的文档 以及页面间的关系结构  问题：流水与凭证的关系
摘要 金额  收入 借 一个表 支出  贷  一个表  

4.	合同归档表  合同扫描件从哪里来 合同 与 凭证如何对应  等后台完成
5.	财务分析的公式 以及数据来源的问题  公式待确认



待确认接口
接口可以用，但是请求的参数不会写，从T+中调不出数据   接口请求待设计
应收账款 总账 – 应收账龄分析  GL_CustomerAgeAnalysisSumRpt 
 账龄区间设置
 按半年（180天）、一年（180天-365天）、两年（365天-730天）、三年（730天-1095天）、五年（1095天-1825天）、五年以上（1825天以上）修改下
应收账龄分析明细表 GL_CustomerAgeAnalysisDetailRpt
应付账款 总账 – 应付账龄分析  GL_SupplierAgeAnalysisSumRpt
                应付账龄分析明细表 GL_SupplierAgeAnalysisDetailRpt

现金流量表（现金流水表是明细，流量表是总量）现金流量明细表 GL_CashFlowDetailRpt
                                            现金流量统计表 GL_CashFlowSumRpt

# 流程
## 登录
前端用户名密码登录，后端根据用户名从自建数据库找到对应的账套主管以及账套，登录T+
返回 Token, 将token 返回给前端，写入缓存。接口请求时，从缓存中读token，如果缓存中
没有token，肯定是显示未登录状态，如果在请求时显示token失效，让用户重新登录。
## 请求
从缓存中获取token，应该定期更新数据 不同接口应该设置不同的更新时间
> * 2019/12/17 将接口请求抽象出参数，将请求参数封装到reqparam中
> *             setparam 将时间设置到参数中
# 任务
2019/11/29 任务：把请求接口的方法从页面中分离


todo 把map整合到请求结果返回中  利润表的本年累计问题 12/11 get 


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
* 增加流水和流量 的页面缓存功能
* 应收应付账龄可以分页请求
* 将请求参数模板作为一个类，可以实现对请求参数的灵活改变
* 将每个报表类型作为一个类 ，每个类有不同的数据变换方法，根据业务需要写
* constants 存放常量 config 存放配置信息  helper 常用处理工具

## 2020/3/3
* AgeAnalysisRpt 类中 完善对应收应付帐龄区间设置错误的错误提示， 账套主管要按6个要求的区间设置账龄区间
* AgeAnalysisRpt 在返回结果之前过滤掉余额为空的科目
* 优化首页中分年月显示的请求逻辑
* 优化流水流量页面中 布局显示
* 解决真机调试中 缓存为空的bug

## 2020/3/4
* 修复因为uniapp版本升级导致 uni-icon 命名冲突问题，引入组件时 使用 uni-icons
* 修复服务页面中 因为同一个template中存在多个相同key值的v-for 导致命名冲突问题  区分key值的命名

## 2020/3/5
* 将显示加载提示框封装到helper中，并改为可穿透模式

## 2020/3/11
* 不同大小的按钮控制块 可以用 flex布局的 项目属性 flex-grow shrink 实现

