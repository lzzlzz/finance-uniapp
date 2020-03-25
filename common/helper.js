/* 一些工具方法*/

//将接口写成公用的函数 token 是从缓存中读取的 period 是根据月份选择器返回的时间 
//获取报表数据
const {log} = console;
const cache = new MinCache();




const asset_calculate = function(data, list, flag){//根据列表中的公式生成资产负债表的值
console.log(data)
				let len = list.length
				for(let i = 0;i<len;i++){
					let formula = list[i]['formula']
					//console.log(formula)
					if(typeof(formula) == 'undefined'){//如果没有formula 这个选项说明时按accountcode计算的，如果是有 说明是按formula 算的
						let accountCode = list[i]['accountCode']
							let tag = list[i]['tag']
							let value = 0.00
							for(let j = 0;j<accountCode.length;j++){
								
								let v = data.get(accountCode[j])//找该科目在科目余额表中的余额  
								if(typeof(v) !== 'undefined'){//跳过没有的科目
									//如果公式中明确列出借贷就直接从数据中选出 借时找借 贷时找贷
									if(tag){//明确列出
										if(flag && v.direction == '借' || !flag && v.direction == '贷'){//且为借 就只找借
												value +=  parseFloat(v.balance)
												//console.log(typeof(value))
										}
									}else{//如果没有明确列出  但是对于资产类的 累计折旧 这个科目与其他的正好相反 在资产类中是贷记增加，借记减少
										//解决思路 判断如果是特殊情况就将flag反转，将资产按负债规则记
										let signal = false 
										let special = list[i]['special']
										if(typeof(special) !== 'undefined' && special == true){//判断如果是特殊情况
											flag = !flag //将flag取反
											signal = true//说明发生了改变
										}
										//对v.balance 进行处理 防止出现 balance ：'' 时导致NaN 将其处理为0.00
										if(v.balance.toString().replace(/(^\s*)|(\s*$)/g, "").length ==0){
											v.balance = 0.00
										}
										if(flag && v.direction == '借' || !flag && v.direction == '贷'){
											value += parseFloat(v.balance)
										}else{
											value -= parseFloat(v.balance)
										}
											
										if(signal){//如果之前改变了规则 在一次结束之后 返回原规则
											flag = !flag
										}
									}
								}
							}
							list[i]['value'] = value.toFixed(2)
						}else{// 有formula
						   // console.log(formula)
							let value = 0.00
							//对formula中的项进行处理，如果开头不是符号就是相加，如果是符号就表明是负值 这个负值指的是 对应项中的负
							//公式中的序号从1 开始 所以从列表中找的时候要减1
							for(let j=0;j<formula.length;j++){
								let order = parseInt(formula[j])
								let v
								if(order < 0){//如果是负的序号 先把序号变正找到对应数值然后对数值取反
									v = (-1) * parseFloat(list[(-1)*order -1]['value'])
								}else{
									v = parseFloat(list[order -1]['value'])
								}
								value += v
							}
							list[i]['value'] = value.toFixed(2)
						}
					}
					
				return list
			};


//data 是科目余额表的数据  list 是待计算的利润表
const profit_calculate = function(data, list){//考虑到对利润的处理与资产不同,就分成两个方法实现
	
	let len = list.length
	for(let i = 0;i<len;i++){
		let formula = list[i]['formula']
		//console.log(formula)
		if(typeof(formula) == 'undefined'){//如果没有formula 这个选项说明时按accountcode计算的，如果是有 说明是按formula 算的
			let accountCode = list[i]['accountCode']
				let direction = list[i]['direction']
				let value = [0.00, 0.00]
				for(let j = 0;j<accountCode.length;j++){
					
					let v = data.get(accountCode[j])//找该科目在科目余额表中的余额  
					if(accountCode[j]=='5301'){
						console.log(v)
					}
					if(typeof(v) !== 'undefined'){//跳过没有的科目
						//如果公式中明确列出借贷就直接从数据中选出 借时找借 贷时找贷
						if(direction == 'cr'){//如果方向为贷 就找 cr 
							value[0] +=  parseFloat(v.CurrencyPeriodCr) // 第一个存本月
							value[1] +=  parseFloat(v.CurrencyYearCr)  // 第二个存本年
						}else{//如果是 借 就找dr
							value[0] +=  parseFloat(v.CurrencyPeriodDr) // 第一个存本月
							value[1] +=  parseFloat(v.CurrencyYearDr)  // 第二个存本年
						}
					}
				}
				value[0] = value[0].toFixed(2)
				value[1] = value[1].toFixed(2)
				list[i]['value'] = value
			}else{// 有formula
			  //  console.log(formula)
				let value = [0.00, 0.00]
				//对formula中的项进行处理，如果开头不是符号就是相加，如果是符号就表明是负值 这个负值指的是 对应项中的负
				//公式中的序号从1 开始 所以从列表中找的时候要减1
				for(let j=0;j<formula.length;j++){
					let order = parseInt(formula[j])
					if(order < 0){//如果是负的序号 先把序号变正找到对应数值然后对数值取反
						value[0] += (-1) * parseFloat(list[(-1)*order -1]['value'][0])
						value[1] += (-1) * parseFloat(list[(-1)*order -1]['value'][1])
					//	console.log(j,(-1) * parseFloat(list[(-1)*order -1]['value'][1]))
					}else{
						value[0] += parseFloat(list[order -1]['value'][0])
						value[1] += parseFloat(list[order -1]['value'][1])
					//	console.log(j,parseFloat(list[order -1]['value'][1]))
					}
					
				}
				value[0] = value[0].toFixed(2)
				value[1] = value[1].toFixed(2)
				list[i]['value'] = value
			}
		}
		console.log(list);
	return list
	
	
};

const tax_calculate = function(data, list){
	list.map((item)=>{
		if(data.has(item.accountCode)){
			item.currency = data.get(item.accountCode).currency
		}
	})
	return list
}

//  cr 是收入需要计算的code dr 是支出需要的code 同时计算并返回收入支出和利润
const money = function(data, crCode, drCode, timetag){ //根据编码数组找里面对应的money 并加总
				
				let sum = 0.0; 
				let tips = 0; 
				let item = '';
				if(timetag.trim() == 'month'){//如果是月
					item = 'CurrencyPeriod';
				}else{
					item = 'CurrencyYear';
				}
				let income = codeTovalue(data, crCode, item+'Dr')
				let expense = codeTovalue(data, drCode, item+'Cr')
				return {
					'income': income,
					'expense': expense
				}	
			};
//根据列表中的code 从data(map 对象)中找key对应的值相加 
function codeTovalue(data, codes, key){
	let sum = 0.00	
	for(let code of codes){
		if(data.has(code)){ 		
			sum +=  parseFloat(data.get(code)[key]);
		}
	}
	return sum
}
//根据金额判断是否要用万元为单位显示,并返回对应的金额和单位
const getAmountUnit = function (data){
	let origAmount = parseFloat(data)
	if(origAmount>=100000000.00){
		let theAmount = (origAmount/10000)
		let flag = false
		if(theAmount.length > 12){
			flag = true
		}
		return {amount: theAmount, unit:'万元', isScale:flag}
	}else{
		let theAmount = origAmount; 
		let flag = false
		if(theAmount.length > 12){  
			flag = true
		}
		return {amount: theAmount,unit:'元', isScale:flag}
	}
}
 


const getdate = function(){
	var myDate = new Date()
	var y = myDate.getFullYear()
	var m = myDate.getMonth() + 1
	var d = myDate.getDate()
	return y + '-' + m + '-' + d
};
const showLoading = function(){
	uni.showLoading({
		title: '加载中',
		mask: false
	});
};
// 对于js之间这个类得输入输出 输出加大括号 输入就加大括号 要不就都不加 
import config from '@/common/config.js'
import ReportParam from '@/common/reportparam.js'
import MinCache from '@/common/storage.js';
export default { 
   money,
   asset_calculate,
   profit_calculate,
   tax_calculate,
   getdate,
   getAmountUnit,
   showLoading,
  
}