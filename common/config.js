const config = new Map();

if(process.env.NODE_ENV === 'development'){
	config.set('url_config' ,'http://122.112.148.80:8081/'); 
}else{
	config.set('url_config' ,'http://122.112.148.80:8081/');
}

export default config; 