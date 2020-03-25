
const {log} = console;
class Report{
	//报表属性
	_reportName;
	_period;
	//让报表的参数指向一个参数的实例
	_param ;
	_reportData;
	_key;
	//所有报表共有的属性
	static urls = 'reportQuery/GetReportData';
	static cache = new MinCache();
	//报表方法
	set reportName(value){
		this._param = new ReportParam({
			'ReportName':value,
		});
		this._reportName = value;
	}
	get reportName(){
		return this._reportName;
	}
	set period(value){
		this._param.changeSearchItems(['period',value,value]);
		this._period = value;
	}
	get period(){
		return this._period;
	}
	
	get param(){
		
		return this._param;
	}
	set reportData(value){
		this._reportData = value;
	}
	get reportData(){
		return this._reportData; 
	}
	get key(){
		return this._reportName+ this._period;
	}
	async getReportData(){
		
		let key = this.key;//缓存名称
		if(Report.cache.has(key)){//缓存中是否有这个,如果有
			log('从缓存中取...'+'key=' + key);
			return new Map(Report.cache.get(key));//返回map对象的数据
		}else{
			log('请求接口中...')
			//console.log(againRequest(param));
			let result=[];
			while(true){
				//调用request 这个私有方法
				let [err,res] = await request.call(this);
				if(!err){//如果没有错误
					result.push(...res.data.data.DataSource.Rows);
					let totalPage;
					({
						SolutionID:this.param.solutionID,
						TaskSessionID:this.param.taskSessionID,
						PageIndex:this.param.pageIndex,
						Pages:totalPage,
					}=res.data.data);
					if(this.param.pageIndex==totalPage){
						break;
					}else{
						this.param.addPageIndex();
					}
				}else{//如果有一次请求出错就抛给外边
					log(err)
					throw Error(err);
				}
			}
			try{
				let mapResult = this.toMap(result);
				//先将map转为数组 存入缓存 取出时再变为数组 为了兼容手机
				Report.cache.set(key,[...mapResult]);
				return mapResult;
			}catch(e){
				throw e;
			}
		}
		
	}
	//将原始数据变成map结构
	toMap(data){}	
}
const request = function(){
	let token = Report.cache.get('userInfo').token;
	let url_config = config.get('url_config');
	return uni.request({
		url: url_config + '/chanjet/report',
		method:'POST',
		data:{
			access_token:token,
			urls:'reportQuery/GetReportData',
			params: JSON.stringify({"request":this.param}),	//请求报表参数 		
		},
		header: {
			'content-type': 'application/x-www-form-urlencoded' 
		},
	})
}
//科目余额表类
class BalanceRpt extends Report{
	toMap(data){
			let promap = new Map()
			for(let i = 0;i<data.length;i++){//利用解构之后代码精简了许多
				let [key,v]=[{}];
				({
					accountCode:v,
					//纳税表用
					accountName:key.name,
					"[CurrencyPeriod-本期发生][origAmountDr-借方]":key.currency,
					//资产负债表用
					"[PeriodEndBalance-期末余额][EndorigAmountABSBalance-余额]":key.balance,
					"[PeriodEndBalance-期末余额][EnddCDirection-方向]":key.direction,
					//利润表用
					"[CurrencyPeriod-本期发生][origAmountCr-贷方]":key.CurrencyPeriodCr,
					"[CurrencyPeriod-本期发生][origAmountDr-借方]":key.CurrencyPeriodDr,
					"[CurrencyYear-本年累计][cumOrigAmountCr-贷方]":key.CurrencyYearCr,
					"[CurrencyYear-本年累计][cumOrigAmountDr-借方]":key.CurrencyYearDr
				} = data[i]);
				//v要去除两头的空格,否则会导致计算的时候匹配不到
				Object.keys(key).map((x)=>key[x]=setZero(key[x].trim()));
				promap.set(v.trim(), key)
			}
			return promap
		};
	}

class CashFlowRpt extends Report{
	
	toMap(items){
		log(items)
		//主要的修改对象，将数据结构与原来的数据结构进行对应
		let result = [];
		//如果是现金流量表
		if(this._reportName == 'GL_CashFlowSumRpt'){
			for(let item of items){
				let {direction,amount,cashFlowItemName} = item;
				let temp = {
					'direction':direction,
					'amount':amount,
					'name':cashFlowItemName,
				}
				result.push(temp);
			}			
		}else{
			//如果非现金流量表，即现金流水表
			//对结果进行两次遍历，第一次把流入dr的放入
			for(let item of items){
				let {summary,amountDr} = item;
				if(amountDr.trim().length!==0){
					//如果有发生就放入
					let temp = {
						'direction':'流入',
						'amount':amountDr,
						'name':summary,
					}
					result.push(temp);
				}
			}
			//第二次把流出cr 放入	
			for(let item of items){
				let {summary,amountCr} = item;
				if(amountCr.trim().length!==0){
					//如果有发生就放入
					let temp = {
						'direction':'流出',
						'amount':amountCr,
						'name':summary,
					}
					result.push(temp);
				}
			}
		}
		
		return result;
	}
	async getReportData(){//不强制more就从缓存中获取
		return await this.getOnceData().next()
			.value.then(([err,onceResult])=> {
			if(err){
				throw(err);
			}
			
			let [key,totalPage,resultValue]=[this.reportName + this.period,,[]];
			({
				SolutionID:this.param.solutionID,
				TaskSessionID:this.param.taskSessionID,
				PageIndex:this.param.pageIndex,
				Pages:totalPage, 
			}=onceResult.data.data);
			
			//如果总页数等于当前页数,说明所有的都请求了
			//将请求结果按页存入对应缓存,请求的时候如果当前页的缓存有就直接返回,否则执行查询
			let currentIndex = this.param.pageIndex;
			if(Report.cache.has(key)){
				log('从缓存。。。')
				let pages = new Map(Report.cache.get(key));
				if(!pages.has(currentIndex)){//如果没有当前页
					pages.set(currentIndex,onceResult);
					Report.cache.set(key,[...pages]);
				}
			}else{//如果没有该键的缓存说明之前没有存过,就直接放
				Report.cache.set(key,[...new Map().set(currentIndex,onceResult)]);
			}
			
			//新获取的数据
			let newResult = this.toMap([...onceResult.data.data.DataSource.Rows]);
			//把新获取的数据返回
			let result = new Map().set('done',false)
								  .set('value',newResult);
			if(this.param.pageIndex == totalPage){//如果请求到最后一页就是true
				result.set('done',true);
			}else{
				//如果没有请求到最后一页就在原来的基础上加1
				this.param.addPageIndex();
				log('页数加1了',this.param.pageIndex)
			}
			//Report.cache.set(key,resultValue);
			return result;
		}).catch((e)=>console.log('请求出错:',e));
		
	}
	//单步请求的方法
	*getOnceData (){
		while(true){
			let key = this.key;
			let currentIndex = this.param.pageIndex;
			log(currentIndex)
			//如果有当前报表的当前页面
			let value = new Map(Report.cache.get(key)).get(currentIndex);
			log(new Map(Report.cache.get(key)));
			
			if(Report.cache.has(key) && new Map(Report.cache.get(key)).has(currentIndex)){
				yield new Promise((resolve,reject)=>{
							return resolve([null,value]);
						  })
			}else{//如果没有就请求
			
				yield request.call(this);
			}
			 
		}
		
	}
	
	
}

class AgeAnalysisRpt extends Report{
	toMap(data){
		console.log(data);
		//统计账龄区间设置个数
		let num = 0;
		for(let attr of Object.keys(data[0])){
			if(attr.includes('IntervalAmount')){
				num++;
			}
		}
		if(num!==6){
			//如果账龄区间不是6，说明需要设置
			throw Error('请联系账套主管完善账龄区间设置！');
		}
		let direction = this.reportName=='GL_CustomerAgeAnalysisSumRpt'?'dr':'cr';
		//获取所有可能的类型
		let accountSet =[...new Set(data.map((x)=>x.accountCode.trim()))] ;
		//根据可能的类型建立对象
		let results = new Map(accountSet.map((x)=>[x,{
			accountName :"",
			totalAmount :0.00,
			intervalAmount : [
								{
									items:[],
									itemName:'半年',
									totalAmount:0.00
								},
								{
									items:[],
									itemName:'一年',
									totalAmount:0.00
								},
								{
									items:[],
									itemName:'两年',
									totalAmount:0.00
								},
								{
									items:[],
									itemName:'三年',
									totalAmount:0.00
								},
								{
									items:[],
									itemName:'五年',
									totalAmount:0.00
								},
								{
									items:[],
									itemName:'五年以上',
									totalAmount:0.00
								}
							]
		}]));
		
		//将数据按类别放入对象中
		for(let odata of data){
			if(odata[direction+'BalanceAmount'].trim().length!==0){
				let result = results.get(odata.accountCode);
				result.accountName = odata.accountName;
				result.totalAmount+= parseFloat(setZero(odata[direction+'BalanceAmount']))
				for(let i=0;i<6;i++){
					//如果哪一个的值不空,就把这个值先累加,然后再把细节放进去
					let tempAmount = parseFloat(setZero(odata[direction+'IntervalAmount'+(i+1)]));
					if(tempAmount!=0.00){
						result.intervalAmount[i].totalAmount+=tempAmount;
						let tempItem = {
							amount:tempAmount,
							auxAccCustomerName:odata.auxAccCustomerName
						}
						result.intervalAmount[i].items.push(tempItem)
					}
				}
			}
		}
		//将余额为零的科目过滤掉
		for(let [k,v] of results){if(v.totalAmount===0){results.delete(k)}}
		return results;
	}
}



const setZero = function(str){//如果余额为空会对应一个空串,把这个空串设置为0
	return (str.replace(/(^\s*)|(\s*$)/g, "").length == 0)? "0.00":str;
}

import MinCache from '@/common/storage.js'
import config from '@/common/config.js'
import ReportParam from '@/common/reportparam.js'

export {
	BalanceRpt,
	CashFlowRpt,
	AgeAnalysisRpt,
	
}