// app全局的状态
export default{ 
	namespaced:true,
	state:{
		day:'',
		month:0,
		year:2019
	},
	getters:{
		periodGetter(state){
			return state.year.toString() + '.' + (state.month < 10 ? '0' + state.month.toString() : state.month.toString())
		}
	},
	mutations:{
		setYear(state,year){
			state.year = year
		},
		setMonth(state,month){
			state.month = month
		},
		setDay(state,day){
			state.day = day
		},
	},
	actions:{
		update({state,commit},dateInfo){
			commit('setYear',dateInfo.year)
			commit('setMonth',dateInfo.month)
			commit('setDay',dateInfo.date)
			
		}
	}
}