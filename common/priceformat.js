export default function(arg,num=0,symbol,spilt=false){
	arg=Number(arg).toFixed(num)
	if(spilt==true){
		if (arg.indexOf('.') == -1) {
			arg=arg.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}else{
			
				var parts = arg.split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				arg=parts.join(".");
		}
	}
	
	if(symbol){
		arg=symbol+arg;
	}
	return arg;
}