console.log('加载成功');

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola":"parabola",
		"shoppingCar":"shoppingCar",
		"header":"header",
		"product_list":"product_list"
	},
	shim: {
		"jquery-cookie":["jquery"],
		"parabola": {
			exports: "_"
		}
	}
})

require(["product_list","shoppingCar"],function(product_list,shoppingCar){
	product_list.product_list();
	shoppingCar.shoppingCar();
})