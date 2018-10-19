define(["header","jquery","jquery-cookie"],function(header,$){
	function cart(){
		$(function(){
			header.header();
			sc_msg();
			function sc_msg(){
				$.ajax({
					url: "data/shoppingCar.json",
					type: "get",
					success: function(res){
						var sc_arr = eval($.cookie("goods"));
						var html = '';
						if(sc_arr){
							for(var i = 0; i < sc_arr.length; i++){
								var all_price=parseInt(res[sc_arr[i].id].price)*parseInt(sc_arr[i].num);
								// price=parseInt(res[sc_arr[i].id].price)
								// num=parseInt(sc_arr[i].num)
								// alert(price)
								html += `<li>
								<img src="${res[sc_arr[i].id].images}" alt="">
								<p>${res[sc_arr[i].id].name}</p>
								<input type="text" class = 'sc_goodsNum' value="${sc_arr[i].num}">
								<div class="number_change">
									<div class="add">+</div>
									<div class="subtract">-</div>
								</div>
								<div class="subtotal">小计<br/>￥<span class="all_price">${all_price}</span></div>
								<div class="clear">x</div>
								</li>`;
							
							}
							$(".cart_left ul").html(html);

						}
						
						// 增加数量
						$(".add").click(function(){
							var cookieStr = $.cookie("goods");
							var arr = eval(cookieStr);

							var id = arr[$(this).parent().parent().index()].id;
							var same = false;
							for(var i = 0;i<arr.length;i++){
								if(arr[i].id==id){
									arr[i].num++;
									same=true;
									break;
								}
							}
							$.cookie("goods",JSON.stringify(arr),{
								expires:7,
								raw:true
							});	
							location.reload();

						})
						// 减少数量

						$(".subtract").click(function(){
							var cookieStr = $.cookie("goods");
							var arr = eval(cookieStr);
							var id = arr[$(this).parent().parent().index()].id;
							var cookieStr = $.cookie("goods");
							var arr = eval(cookieStr);
							var same = false;
							for(var i = 0;i<arr.length;i++){
								if(arr[i].id==id){
									arr[i].num--;
									if(arr[i].num<1){
										arr[i].num=1;
									}else{
										location.reload();
									}
									same=true;
									break;		
								}
							}
							
							$.cookie("goods",JSON.stringify(arr),{
								expires:7,
								raw:true
							});	
							
						})
						
						
						// 删除
						$(".clear").click(function(){
							var cookieStr = $.cookie("goods");
							var arr = eval(cookieStr);
							var clear = arr.splice($(this).parent().index(),1);
							$.cookie("goods",JSON.stringify(arr),{
								expires:7,
								raw:true
							});	
							location.reload();
						})

						var sum=0;
						$(".ul_storage").find("li").each(function(){
							
							var price=parseInt($(this).find(".all_price").html())
							sum += price
						})
						$(".sum").html(sum)
						
					}
				})
			}

			

		})
	}
	return{
		cart:cart
	}
})