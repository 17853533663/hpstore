console.log('加载成功');

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola":"parabola",
		"index":"index",
		"shoppingCar":"shoppingCar",
		"header":"header",
	},
	shim: {
		"jquery-cookie":["jquery"],
		"parabola": {
			exports: "_"
		}
	}
})

require(["index","shoppingCar"],function(index,shoppingCar){
	index.index();
	shoppingCar.shoppingCar();
})