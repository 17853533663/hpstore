console.log('加载成功');

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"cart":"cart",
		"shoppingCar":"shoppingCar",
		"header":"header",
	},
	shim: {
		"jquery-cookie":["jquery"],
	}
})

require(["cart","shoppingCar"],function(cart,shoppingCar){
	cart.cart();
	shoppingCar.shoppingCar();
})