class ReportParam {
	constructor({
		ReportName = null,
		PageIndex = 1,
		PageSize = null,
	} = {}) {
		
		this.ReportName = ReportName;
		this.PageIndex = PageIndex;
		this.PageSize = PageSize || constants[ReportName].get('pageSize');
		this.SearchItems = constants[ReportName].get('searchItems');
		this.ReportTableCols = constants[ReportName].get('reportTableCols');
		this.ReportTableColNames = constants[ReportName].get('reportTableColNames');
		this.TaskSessionID = null;
		this.SolutionID = null;

	}
	addPageIndex(){
		this.PageIndex++;
	}
	//如果没有该项就添加,如果有就改变成对应值,如果是null就不添加对应项
	changeSearchItems(...newItems){
		let items = this.SearchItems;
		let columnNames = [];
		items.map((x)=>columnNames.push(x.ColumnName));
		for(let newItem of newItems){
			let [columnName,beginValue,endValue] = [...newItem];
			if(columnName == 'period'){
				columnName = constants[this.ReportName].get('period');
			}
			let index = columnNames.indexOf(columnName);
			const tempItem = {
				"ColumnName": columnName,
				"BeginDefaultText": beginValue,
				"BeginDefault": beginValue,
			};
			if(endValue){//如果最后一个不是null
				Object.assign(tempItem,{
					"EndDefaultText": endValue,
					"EndDefault": endValue
				})
			}
			if(index !== -1){//如果要改变的项目已经有了
				items[index] = tempItem;
			}else{//如果没有就添加
				this.SearchItems.push(tempItem);
			}
			
		}
		
		
	}
	
	get pageIndex(){
		return this.PageIndex;
	}
	set pageIndex(value){
		this.PageIndex = value
	}
	set reportName(value){
		this.ReportName = value;
	}
	set pageSize(value){
		this.PageSize = value;
	}
	
	set taskSessionID(value){
		this.TaskSessionID = value;
	}
	set solutionID(value){
		this.SolutionID = value;
	}
	
	set reportTableColNames(value){
		this.ReportTableColNames = value;
	}
	set reportTableCols(value){
		this.ReportTableCols = value;
	}
	init(){
		//初始化报表对象，从第一页开始
		this.PageIndex = 1;
		this.TaskSessionID = null;
		this.SolutionID = null;
	}
}
import constants from '@/common/constants.js'
export default ReportParam;

