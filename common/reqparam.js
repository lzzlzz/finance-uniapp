const GL_BalanceSumRpt = {
							"request": {
								"ReportName": "GL_BalanceSumRpt",
								"PageIndex": 1,
								"PageSize": 999,
								"SearchItems": [
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
								],
								"ReportTableCols": [],
								"ReportTableColNames": "accountCode,accountName,dCDirection,origAmountABSBalance,origAmountDr,origAmountCr,cumOrigAmountDr,cumOrigAmountCr,EnddCDirection,EndorigAmountABSBalance",
								"TaskSessionID": null,
								"SolutionID": null
							}
						};
//对应现金流量 cash flow statement 
const GL_CashFlowSumRpt = {
							"request": {
								"ReportName": "GL_CashFlowSumRpt",
								"PageIndex": 1,
								"PageSize": 20,
						   
								"isIncludeUnPost": true,
							 
								"SearchItems": [
									{
										"ColumnName": "currentPeriod",
										"BeginDefaultText": null,
										"BeginDefault": null,
										"EndDefaultText": null,
										"EndDefault": null
									}
								],
								"ReportTableCols": [],
								"ReportTableColNames": "",
								"TaskSessionID": null,
								"SolutionID": null
							}
						};
				
//对应现金流水 detail cash flow
const GL_CashFlowDetailRpt = {
								"request": {
									"ReportName": "GL_CashFlowDetailRpt",
									"PageIndex": 1,
									"PageSize": 20,
									"isNohappenDisplayAccu": true,
									"isIncludeUnPost": true,
									"isContraAccountUnwap": true,
									"SearchItems": [
										{
											"ColumnName": "currentPeriod",
											"BeginDefaultText": null,
											"BeginDefault": null,
											"EndDefaultText": null,
											"EndDefault": null
										}
									],
									"ReportTableCols": [],
									"ReportTableColNames": "",
									"TaskSessionID": null,
									"SolutionID": null
								}
							};
const GL_CustomerAgeAnalysisSumRpt = {
										"request": {
											"ReportName": "GL_CustomerAgeAnalysisSumRpt",
											"PageIndex": 1,
										  
											"PageSize": 9999,
											"SearchItems": [
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
											],
											"ReportTableCols": [
											   
											],
											"ReportTableColNames": "",
											"TaskSessionID": null,
											"SolutionID": null
										}
									};
const GL_SupplierAgeAnalysisSumRpt = {
										"request": {
											"ReportName": "GL_SupplierAgeAnalysisSumRpt",
											"PageIndex": 1,
										  
											"PageSize": 9999,
											"SearchItems": [
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
											],
											"ReportTableCols": [
											   
											],
											"ReportTableColNames": "",
											"TaskSessionID": null,
											"SolutionID": null
										}
									};
							
export default {
	GL_BalanceSumRpt,
	GL_CashFlowSumRpt,
	GL_CashFlowDetailRpt,
	GL_CustomerAgeAnalysisSumRpt,
	GL_SupplierAgeAnalysisSumRpt
}