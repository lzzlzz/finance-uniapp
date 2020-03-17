//报表对应的状态
import helper from '@/common/helper.js'
import constants from '@/common/constants.js'
import { BalanceRpt, AgeAnalysisRpt} from '@/common/report.js'
//科目余额表对象
const balanceRpt = new BalanceRpt()
balanceRpt.reportName = 'GL_BalanceSumRpt'
//应收账龄对象
const  csAgeAnalysisRpt = new AgeAnalysisRpt();
csAgeAnalysisRpt.reportName = 'GL_CustomerAgeAnalysisSumRpt';
//应付账龄对象
const  spAgeAnalysisRpt = new AgeAnalysisRpt();
spAgeAnalysisRpt.reportName = 'GL_SupplierAgeAnalysisSumRpt';


export default{
	namespaced:true,
	state:{
		balanceRpt:null,
		//是否在加载
		loading:false,
		detail:{
			
			//面板显示
			panel:[{
					name:'收入',
					amount:0.00
				},{
					name:'支出',
					amount:0.00
				},{
					name:'利润',
					amount:0.00
				}],
			//按年或月显示
			method:'month'
		},
		budget:{
			//资产类的结构及对应科目
			asset: constants.assetList,
			//负债类对应科目
			budget:constants.budgetList,
		},
		profit:{
			profitList: constants.profitList,
		},
		tax:{
			taxList:constants.taxList,
		},
		//sp应付账龄
		payable:{
			list:[],
			loading:false,
			detail:{}
		},
		receviable:{
			list:[],
			loading:false,
			detail:{}
		}
		
		
		
	},
	getters:{
		detailPanelNamePrefixGetter(state){
			return state.detail.method==='month'?'本月':'本年'
		}
	},
	mutations:{
		changeDetailLoading(state){
			state.loading = !state.loading
		},
		setBalanceRpt(state,data){
			state.balanceRpt = data
		},
		setDetailPanel(state,data){ 
			;({ income: state.detail.panel[0].amount,
			   expense:state.detail.panel[1].amount,
			   profit: state.detail.panel[2].amount
			 } = helper.money(state.balanceRpt, ['5001'],['5401', '5403', '5602', '5603'], state.detail.method))
		},
		setDetailMethod(state,method){
			state.detail.method = method
		},
		setBudgetList(state,data){
			state.budget.asset = helper.asset_calculate(data, state.budget.asset, true)
			state.budget.budget = helper.asset_calculate(data, state.budget.budget, false)
		},
		setProfitList(state,data){
			state.profit.profitList = helper.profit_calculate(data, state.profit.profitList)
			
		},
		setTaxList(state,data){
			state.tax.taxList = helper.tax_calculate(data,state.tax.taxList)
			
		},
		setPayableList(state,data){
			state.payable.list = [...data]
		},
		setReceviableList(state,data){
			state.receviable.list = [...data]
		},
		setPayableDetail(state,data){
			state.payable.detail = data
		},
		setReceviableDetail(state,data){
			state.receviable.detail = data
		},
		
		
	},
	actions:{
		//获取科目余额表数据
		getBalanceRpt({state,commit,rootState,rootGetters}){
			commit('changeDetailLoading')
			helper.showLoading()
			balanceRpt.period = rootGetters["global/periodGetter"]
			balanceRpt.param.pageIndex = 1
			balanceRpt.getReportData().then((res)=>{
				console.log(res)
				commit('setBalanceRpt',res)
				commit('setDetailPanel',res)
				commit('setBudgetList',res)
				commit('setProfitList',res)
				commit('setTaxList',res)
				commit('changeDetailLoading')
				uni.hideLoading()
			})	
		},
		changeDetailMethod({state,commit},method){
			commit('setDetailMethod',method)
			if(!state.loading&&state.balanceRpt!==null){
				//说明已经加载完毕
				commit('setDetailPanel',state.balanceRpt)
			}
			
		},
		//获取账龄数据，根据type类型的不同获取不同报表的数据
		getAgeAnalysisRpt({state,commit,rootState,rootGetters},type){
			helper.showLoading()
			let mutationType = (type==='cs')?'setReceviableList':'setPayableList'
			let reportObj = (type==='cs')?csAgeAnalysisRpt:spAgeAnalysisRpt;
			reportObj.period = helper.getdate()//应收应付是用当前时间
			reportObj.param.pageIndex = 1
			reportObj.getReportData().then(res=>{
				console.log(res)
				commit(mutationType,res)
				uni.hideLoading();
				
			}).catch((err)=>{//如果请求失败就让用户手动请求
					uni.showModal({
					    title: '提示',
					    content: err.message,
						showCancel:false,
					    success:  (res)=> {
					        if (res.confirm) {
					            console.log('用户点击确定');
								uni.navigateBack({
								    delta: 1
								});
								uni.hideLoading(); 
					        }
					    }
					});
					
				})
			
			
			
		}
		
		
	}
}