console.log('加载成功');

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"header":"header",
		"register":"register"
	},
	shim: {
		"jquery-cookie":["jquery"],

	}
})

require(["register"],function(register){
	register.register();
})