console.log('加载成功');

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola":"parabola",
		"shoppingCar":"shoppingCar",
		"header":"header",
		"product_details":"product_details",
	},
	shim: {
		"jquery-cookie":["jquery"],
		"parabola": {
			exports: "_"
		}
	}
})

require(["shoppingCar","product_details"],function(shoppingCar,product_details){
	shoppingCar.shoppingCar();
	product_details.product_details();
})