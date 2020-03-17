//科目余额表
const GL_BalanceSumRpt= new Map(); 
GL_BalanceSumRpt.set('searchItems',[
									{
										"ColumnName": "period",
										"BeginDefaultText": null ,
										"BeginDefault": null,
										"EndDefaultText": null,
										"EndDefault": null 
									},
									{
										"ColumnName": "level",
										"BeginDefaultText": "1",
										"BeginDefault": "1",
										"EndDefaultText": "3",
										"EndDefault": "3"
									},{
										 "ColumnName": "isNohappenDisplayAccu",//决定是不是显示本期无发生累计有发生
										 "BeginDefaultText": "1",//根据数据库中的值写
										 "BeginDefault": "1"
									},{
										 "ColumnName": "isIncludeUnPost",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									},{
										 "ColumnName": "auxAccCustomerName",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									},{
										 "ColumnName": "auxAccPersonName",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									},{
										 "ColumnName": "auxAccDepartmentName",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									},{
										 "ColumnName": "auxAccProjectName",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									},{
										 "ColumnName": "auxAccInventoryName",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									}
								]);
GL_BalanceSumRpt.set('reportTableColNames',"accountCode,accountName,dCDirection,origAmountABSBalance,origAmountDr,origAmountCr,cumOrigAmountDr,cumOrigAmountCr,EnddCDirection,EndorigAmountABSBalance");
GL_BalanceSumRpt.set('reportTableCols',[]);
GL_BalanceSumRpt.set('pageSize',40);
GL_BalanceSumRpt.set('period','period');//搜索条件中时间的名称
//现金流量表
const GL_CashFlowSumRpt = new Map();
GL_CashFlowSumRpt.set('searchItems',[
									{
										"ColumnName": "currentPeriod",
										"BeginDefaultText": null,
										"BeginDefault": null,
										"EndDefaultText": null,
										"EndDefault": null
									},{
										 "ColumnName": "isIncludeUnPost",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									}
								]);
GL_CashFlowSumRpt.set('reportTableColNames',"");
GL_CashFlowSumRpt.set('reportTableCols',[]);
GL_CashFlowSumRpt.set('pageSize',40);
GL_CashFlowSumRpt.set('period','currentPeriod');
const GL_CashFlowDetailRpt = new Map();
GL_CashFlowDetailRpt.set('searchItems',[
										{
											"ColumnName": "currentPeriod",
											"BeginDefaultText": null,
											"BeginDefault": null,
											"EndDefaultText": null,
											"EndDefault": null
										},{
										 "ColumnName": "isIncludeUnPost",
										 "BeginDefaultText": "1",
										 "BeginDefault": "1"
									    }
									]);
GL_CashFlowDetailRpt.set('reportTableColNames',"");
GL_CashFlowDetailRpt.set('reportTableCols',[]);
GL_CashFlowDetailRpt.set('pageSize',40);
GL_CashFlowDetailRpt.set('period','currentPeriod');

const GL_CustomerAgeAnalysisSumRpt = new Map();
GL_CustomerAgeAnalysisSumRpt.set('searchItems',[
												{
													"ColumnName": "expiryDate",
													"BeginDefaultText": null,
													"BeginDefault": null,
													"EndDefaultText": null,
													"EndDefault": null
												   
													
												},
												{
													"ColumnName": "analysisVoucherType",
													"BeginDefault": "0",
													"BeginDefaultText": "凭证日期"
												},
												
												{
													"ColumnName": "AgingAnalysisContent",
													"BeginDefault": "0"
												},
												{
													"ColumnName": "AgingAnalysisMode",
													"BeginDefault": "0"
												},
												{
													"ColumnName": "AgingAnalysisGreaterZero",
													"BeginDefault": "0",
													"BeginDefaultText": "不等于0"
												},
												
												{
													"ColumnName": "includeNoBookkeeping",
													
													"BeginDefault": "1"
													
												}
											]);
GL_CustomerAgeAnalysisSumRpt.set('reportTableColNames',"");
GL_CustomerAgeAnalysisSumRpt.set('reportTableCols',[]);
GL_CustomerAgeAnalysisSumRpt.set('pageSize',40);
GL_CustomerAgeAnalysisSumRpt.set('period','expiryDate');

const GL_SupplierAgeAnalysisSumRpt = new Map();
GL_SupplierAgeAnalysisSumRpt.set('searchItems',[
												{
													"ColumnName": "expiryDate",
													"BeginDefaultText": null,
													"BeginDefault": null,
													"EndDefaultText": null,
													"EndDefault": null
												   
													
												},
												{
													"ColumnName": "analysisVoucherType",
													"BeginDefault": "0",
													"BeginDefaultText": "凭证日期"
												},
												
												{
													"ColumnName": "AgingAnalysisContent",
													"BeginDefault": "0"
												},
												{
													"ColumnName": "AgingAnalysisMode",
													"BeginDefault": "0"
												},
												{
													"ColumnName": "AgingAnalysisGreaterZero",
													"BeginDefault": "0",
													"BeginDefaultText": "不等于0"
												},
												
												{
													"ColumnName": "includeNoBookkeeping",
													
													"BeginDefault": "1"
													
												}
											]);
GL_SupplierAgeAnalysisSumRpt.set('reportTableColNames',"");
GL_SupplierAgeAnalysisSumRpt.set('reportTableCols',[]);
GL_SupplierAgeAnalysisSumRpt.set('pageSize',40);
GL_SupplierAgeAnalysisSumRpt.set('period','expiryDate');

//资产负债表的公式
const assetList = [{
				 name:'货币资金',
				 accountCode:['1001','1002','1012'],
				 tag:false,//公式中是否明确列出借贷 如果没有为false
				 value:0.00
			 },{
				 name:'短期投资',
				 accountCode:['1101'],
				 tag:false,
				 value:0.00
			 },{
				 name:'应收票据',
				 accountCode:['1121'],
				 tag:false,
				 value:0.00
			 },{
				 name:'应收账款',
				 accountCode:['1122','2203'],
				 tag:true,//公式中是否明确列出借贷 如果没有为false
				 value:0.00
			 },{
				 name:'预付账款',
				 accountCode:['1123','2202'],
				 tag:true,//公式中是否明确列出借贷 如果没有为false
				 value:0.00
			 },{
				 name:'应收股利',
				 accountCode:['1131'],
				 tag:false,
				 value:0.00
			 },{
				 name:'应收利息',
				 accountCode:['1132'],
				 tag:false,
				 value:0.00
			 },{
				 name:'其他应收款',
				 accountCode:['1221'],
				 tag:false,
				 value:0.00
			 },{
				 name:'存货',
				 accountCode:['1401', '1402', '1403', '1404', '1405','1407','1408','1411','1421','4001'],
				 tag:false,
				 value:0.00
			 },{
				 name:'其中：原材料',
				 accountCode:['1403'],
				 tag:false,
				 value:0.00
			 },{
				 name:'在产品',
				 accountCode:['4001','4101'],
				 tag:false,
				 value:0.00
			 },{
				 name:'库存商品',
				 accountCode:['1405'],
				 tag:false,
				 value:0.00
			 },{
				 name:'周转材料',
				 accountCode:['1411'],
				 tag:false,
				 value:0.00
			 },{
				 name:'其他流动资产',
				 accountCode:[],
				 tag:false,
				 value:0.00
			 },{
				 name:'流动资产合计',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['1','2','3','4','5','6','7','8','9','14']
			 },{
				 name:'长期债券投资',
				 accountCode:['1501'],
				 tag:false,
				 value:0.00
			 },{
				 name:'长期股权投资',
				 accountCode:['1511'],
				 tag:false,
				 value:0.00
			 },{
				 name:'固定资产原价',
				 accountCode:['1601'],
				 tag:false,
				 value:0.00
			 },{
				 name:'减：累计折旧',
				 accountCode:['1602'],
				 tag:false,
				 value:0.00,
				 special: true //表明是资产类中的特殊情况，规则与其他相反
			 },{
				 name:'固定资产账面价值',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['18','-19']
			 },{
				 name:'在建工程',
				 accountCode:['1604'],
				 tag:false,
				 value:0.00
			 },{
				 name:'工程物资',
				 accountCode:['1605'],
				 tag:false,
				 value:0.00
			 },{
				 name:'固定资产清理',
				 accountCode:['1606'],
				 tag:false,
				 value:0.00
			 },{
				 name:'生产性生物资产',
				 accountCode:['1621', '1622'],
				 tag:false,
				 value:0.00
			 },{
				 name:'无形资产',
				 accountCode:['1701','1702'],
				 tag:false,
				 value:0.00
			 },{
				 name:'开发支出',
				 accountCode:['4301'],
				 tag:false,
				 value:0.00
			 },{
				 name:'长期待摊费用',
				 accountCode:['1801'],
				 tag:false,
				 value:0.00
			 },{
				 name:'其他非流动资产',
				 accountCode:[],
				 tag:false,
				 value:0.00
			 },{
				 name:'非流动资产合计',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['16','17','20','21','22','23','24','25','26','27','28']
			 },{
				 name:'资产总计',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['15','29']
			 }];
//资产负债表的公式			 
const budgetList = [{
				 name:'短期借款',
				 accountCode:['2001'],
				 tag:false,//公式中是否明确列出借贷 如果没有为false
				 value:0.00
			 },{
				 name:'应付票据',
				 accountCode:['2201'],
				 tag:false,
				 value:0.00
			 },{
				 name:'应付帐款',
				 accountCode:['2202','1123'],
				 tag:true,
				 value:0.00
			 },{
				 name:'预收账款',
				 accountCode:['1122','2203'],
				 tag:true,//公式中是否明确列出借贷 如果没有为false
				 value:0.00
			 },{
				 name:'应付职工薪酬',
				 accountCode:['2211'],
				 tag:false,//公式中是否明确列出借贷 如果没有为false
				 value:0.00
			 },{
				 name:'应交税费',
				 accountCode:['2221'],
				 tag:false,
				 value:0.00
			 },{
				 name:'应付利息',
				 accountCode:['2231'],
				 tag:false,
				 value:0.00 
			 },{
				 name:'应付利润',
				 accountCode:['2232'],
				 tag:false,
				 value:0.00
			 },{
				 name:'其他应付款',
				 accountCode:['2241'],
				 tag:false,
				 value:0.00
			 },{
				 name:'其他流动负债',
				 accountCode:[],
				 tag:false,
				 value:0.00
			 },{
				 name:'流动负债合计',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['1','2','3','4','5','6','7','8','9','10']
				 
			 },{
				 name:'长期借款',
				 accountCode:['2501'],
				 tag:false,
				 value:0.00
			 },{
				 name:'长期应付款',
				 accountCode:['2701'],
				 tag:false,
				 value:0.00
			 },{
				 name:'递延收益',
				 accountCode:['2401'],
				 tag:false,
				 value:0.00
			 },{
				 name:'其他非流动负债',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				
			 },{
				 name:'非流动负债合计',
				 accountCode:['1501'],
				 tag:false,
				 value:0.00,
				 formula:['12','13','14','15']
			 },{
				 name:'负债合计',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['11','16']
			 },{
				 name:'实收资本(或股本)',
				 accountCode:['3001'],
				 tag:false,
				 value:0.00
			 },{
				 name:'资本公积',
				 accountCode:['3002'],
				 tag:false,
				 value:0.00
			 },{
				 name:'盈余公积',
				 accountCode:['3101'],
				 tag:false,
				 value:0.00,
				 formula:['18','-19']
			 },{
				 name:'未分配利润',
				 accountCode:['3104','3103'],
				 tag:false,
				 value:0.00
			 },{
				 name:'所有者权益（或股东权益）合计',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['18','19','20','21']
			 },{
				 name:'负债和所有者权益（或股东权益）总计',
				 accountCode:[],
				 tag:false,
				 value:0.00,
				 formula:['17','22']
			 }];
//利润表的公式
const profitList = [{
					name:'一、营业收入',
					accountCode:['5001', '5051'],
					direction: 'cr',// cr 是贷  dr 是借
					value:["0.00","0.00"]//第一个值是本期发生 第二个是本年累计
				},{
					name:'减：营业成本',
					accountCode:['5401', '5402'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'  税金及附加',
					accountCode:['5403'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:' 其中：消费税',
					accountCode:['222111'],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'   城市维护建设税',
					accountCode:['222115'],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'   资源税',
					accountCode:['222112'],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'   土地增值税',
					accountCode:['222114'],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'   城镇土地使用税、房产税、车船税、印花税',
					accountCode:["222116","222117","222118","222123"],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'   教育费附加、矿产资源补偿费、排污费',
					accountCode:["222120", "222121","222122"], 
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'销售费用',
					accountCode:['5601'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:' 其中：商品维修费',
					accountCode:['560102'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'    广告费和业务宣传费',
					accountCode:['560107','560108'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'管理费用',
					accountCode:['5602'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:' 其中：开办费',
					accountCode:['560204'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'     业务招待费',
					accountCode:['560203'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'     研究费用',
					accountCode:['560217'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'财务费用',
					accountCode:['5603'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:' 其中：利息费用',
					accountCode:['560301'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'加：投资收益',
					accountCode:['5111'],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'二、营业利润',
					accountCode:[],
					direction:'dr',
					value:['0.00','0.00'],
					formula:['1','-2','-3','-10','-13','-17','19']
					//c5-c6-c7-c14-c17-c21+c23
				},{
					name:'加：营业外收入',
					accountCode:['5301'],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'  其中：政府补助',
					accountCode:['530102'],
					direction:'cr',
					value:['0.00','0.00']
				},{
					name:'减：营业外支出',
					accountCode:['5711'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'其中：坏账损失',
					accountCode:['571105'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'     无法收回的长期债券投资损失',
					accountCode:['571107'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'     无法收回的长期股权投资损失',
					accountCode:['571108'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'     自然灾害等不可抗力因素造成的损失',
					accountCode:['571109'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'     税收滞纳金',
					accountCode:['571110'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'三、利润总额',
					accountCode:['5301'],
					direction:'cr',
					value:['0.00','0.00'],
					formula:['20','21','-23']//c24+c25-c27
				},{
					name:'减：所得税费用',
					accountCode:['5801'],
					direction:'dr',
					value:['0.00','0.00']
				},{
					name:'四、净利润',
					accountCode:['5801'],
					direction:'dr',
					value:['0.00','0.00'],
					formula:['29','-30']//c33-c34
				}];

const taxList = [{
					taxName:'应交增值税',
					accountCode:'22210102',
					currency:0.00
				},{
					taxName:'应交所得税',
					accountCode:'222106',
					currency:0.00
				},{
					taxName:'印花税',
					accountCode:'222118',
					currency:0.00
				},{
					taxName:'地方教育费附加',
					accountCode:'222116',
					currency:0.00
				},{
					taxName:'教育费附加',
					accountCode:'222113',
					currency:0.00
				},{
					taxName:'应交城市维护建设税',
					accountCode:'222108',
					currency:0.00
				}];



export  default {
	GL_BalanceSumRpt,
	GL_CashFlowSumRpt,
	GL_CashFlowDetailRpt,
	GL_CustomerAgeAnalysisSumRpt,
	GL_SupplierAgeAnalysisSumRpt,
	assetList,
	budgetList,
	profitList,
	taxList
}