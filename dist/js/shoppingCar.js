define(["parabola","jquery","jquery-cookie"],function(parabola,$){
	function shoppingCar(){
		$(function(){
// 笔记本
			$.ajax({
				url:"data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0 ;i<8;i++){
						html+=`
						<li>
					<a href="https://www.hpstore.cn/15-dc0124tx.html">
						<img src="${res[i].images}" alt="">
						<h3>${res[i].name}</h3>
						<ul class="grade">
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
						</ul>
						<p class="iconfont">&#xe61f;</p>
					</a>
					<span class="new">新品</span>
					<ul class="configuration">
						<li>${res[i].li1}</li>
						<li>${res[i].li2}</li>
						<li>${res[i].li3}</li>
						<li>${res[i].li4}</li>
					</ul>
					<h2>￥ ${res[i].price}</h2>
					<button class="sc_btn" id="${res[i].id}">添加到购物车</button>
				</li>`;
					}
					
					$(".product_introduce1").html(html);
				}
			})
// 台式
			$.ajax({
				url:"data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 8 ;i<16;i++){
						html+=`
						<li>
					<a href="https://www.hpstore.cn/15-dc0124tx.html">
						<img src="${res[i].images}" alt="">
						<h3>${res[i].name}</h3>
						<ul class="grade">
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
						</ul>
						<p class="iconfont">&#xe61f;</p>
					</a>
					<span class="new">新品</span>
					<ul class="configuration">
						<li>${res[i].li1}</li>
						<li>${res[i].li2}</li>
						<li>${res[i].li3}</li>
						<li>${res[i].li4}</li>
					</ul>
					<h2>￥ ${res[i].price}</h2>
					<button class="sc_btn" id="${res[i].id}">添加到购物车</button>
				</li>`;
					}
					
					$(".product_introduce2").html(html);
				}
			})
// 打印机
			$.ajax({
				url:"data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 16 ;i<24;i++){
						html+=`
						<li>
					<a href="https://www.hpstore.cn/15-dc0124tx.html">
						<img src="${res[i].images}" alt="">
						<h3>${res[i].name}</h3>
						<ul class="grade">
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
						</ul>
						<p class="iconfont">&#xe61f;</p>
					</a>
					<span class="new">新品</span>
					<ul class="configuration">
						<li>${res[i].li1}</li>
						<li>${res[i].li2}</li>
						<li>${res[i].li3}</li>
						<li>${res[i].li4}</li>
					</ul>
					<h2>￥ ${res[i].price}</h2>
					<button class="sc_btn" id="${res[i].id}">添加到购物车</button>
				</li>`;
					}
					
					$(".product_introduce3").html(html);
				}
			})
// 硒鼓墨盒
			$.ajax({
				url:"data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 24 ;i<32;i++){
						html+=`
						<li>
					<a href="https://www.hpstore.cn/15-dc0124tx.html">
						<img src="${res[i].images}" alt="">
						<h3>${res[i].name}</h3>
						<ul class="grade">
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
						</ul>
						<p class="iconfont">&#xe61f;</p>
					</a>
					<span class="new">新品</span>
					<ul class="configuration">
						<li>${res[i].li1}</li>
						<li>${res[i].li2}</li>
						<li>${res[i].li3}</li>
						<li>${res[i].li4}</li>
					</ul>
					<h2>￥ ${res[i].price}</h2>
					<button class="sc_btn" id="${res[i].id}">添加到购物车</button>
				</li>`;
					}
					
					$(".product_introduce4").html(html);
				}
			})
// 显示屏
			$.ajax({
				url:"data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 32 ;i<40;i++){
						html+=`
						<li>
					<a href="https://www.hpstore.cn/15-dc0124tx.html">
						<img src="${res[i].images}" alt="">
						<h3>${res[i].name}</h3>
						<ul class="grade">
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
						</ul>
						<p class="iconfont">&#xe61f;</p>
					</a>
					<span class="new">新品</span>
					<ul class="configuration">
						<li>${res[i].li1}</li>
						<li>${res[i].li2}</li>
						<li>${res[i].li3}</li>
						<li>${res[i].li4}</li>
					</ul>
					<h2>￥ ${res[i].price}</h2>
					<button class="sc_btn" id="${res[i].id}">添加到购物车</button>
				</li>`;
					}
					
					$(".product_introduce5").html(html);
				}
			})
// 配件
			$.ajax({
				url:"data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 40 ;i<48;i++){
						html+=`
						<li>
					<a href="https://www.hpstore.cn/15-dc0124tx.html">
						<img src="${res[i].images}" alt="">
						<h3>${res[i].name}</h3>
						<ul class="grade">
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
							<li class="iconfont">&#xe60e;</li>
						</ul>
						<p class="iconfont">&#xe61f;</p>
					</a>
					<span class="new">新品</span>
					<ul class="configuration">
						<li>${res[i].li1}</li>
						<li>${res[i].li2}</li>
						<li>${res[i].li3}</li>
						<li>${res[i].li4}</li>
					</ul>
					<h2>￥ ${res[i].price}</h2>
					<button class="sc_btn" id="${res[i].id}">添加到购物车</button>
				</li>`;
					}
					
					$(".product_introduce6").html(html);
				}
			})

		})
		
	}
	return{
		shoppingCar:shoppingCar
	}
})