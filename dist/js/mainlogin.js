console.log('加载成功');

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"header":"header",
		"login":"login",
	},
	shim: {
		"jquery-cookie":["jquery"],
		
	}
})

require(["login"],function(login){
	login.login();
})