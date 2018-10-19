define(["jquery","jquery-cookie"],function($){
	function header(){
		$(function(){
			//header
		$(
			`<div id="header" class="header">
		<a href="index.html" class="iconfont" id="logo">&#xe628;</a>
		<div class="search" id="search">
			<input type="text" placeholder="你在找什么？" id="txt">
			<input type="submit" class="iconfont" id="sub" value="&#xe6a3;">
			<div id="tab" class="tab">
				<ul id="navigation">
					<li id="active1"><a href="">企业解决方案</a></li>
					<li><a href="product_list.html">笔记本及平板</a></li>
					<li><a href="product_list.html">台式及一体机</a></li>
					<li><a href="product_list.html">打印机</a></li>
					<li><a href="product_list.html">硒鼓和墨盒</a></li>
					<li><a href="product_list.html">显示屏</a></li>
					<li><a href="product_list.html">配件</a></li>
					<li><a href="">产品支援</a></li>
					
				</ul>
				<div id="down">
						<ul id="uldown" class="uldown">
							
						</ul>
				</div>
			</div>
		</div>
		
		<div class="way">
			<p>400-820-1015</p>
			<ul>
				<li><a href="" class="iconfont">&#xe60d;</a></li>
				<li class="shopping">
					<div class="iconfont" id="car">&#xe653;
						<div class="sc_num" id="sc_num">0</div>
					</div>
					<div class="storage" id="storage">
						<div class="storage1">
							<span class="close">X</span>
							<div class="product_num"><span class="sc_num">0</span>件商品</div>
							<div class="all_price">购物车小计：￥<span class="sum">0</span></div>
							<button class="watch_compile">查看和编辑购物车</button>
						</div>
						<ul class="ul_storage">
							
						</ul>
					</div>
				</li>
				<li><a href="" class="iconfont">&#xe659;</a></li>
				<li class="person_center">
					<div class="iconfont" id="person">&#xe687;</div>
					<div class="login_register">
						<div>
							<p>我的帐户</p>
							<a href="login.html"><button>登录</button></a>
						</div>
						<div>
							<p>新客户</p>
							<a href="register.html"><button>创建帐户</button></a>
						</div>
					</div>
				</li>
			</ul>

		</div>
	</div>
	

	<div class="right_fixed">
		<dl class="consult">
			<dd class="iconfont" id="purchase">&#xe612;<p>购买咨询</p>
				<div class="purchase">
					<ul class="purchase1">
						<li><p>购买咨询<br/>（9:00-18:00）</p></li>
						<li>家用产品订购热线<a>400-820-1015-3</a></li>
						<li>商用产品订购热线<br/>仅工作日提供支持<a>400-820-0702</a></li>
						<li>打印机及耗材热线<br/>仅工作日提供支持<a>400-820-1701</a></li>
						<li>订单相关咨询热线<a>400-820-1015-1</a></li>
					</ul>
				</div>
			</dd>
			<dd class="iconfont" id="on_line">&#xe96b;<p>在线咨询</p>
				<div class="on_line">
					<ul class="on_line">
						<li><p>官方售前在线咨询<br/>(9:00-20:00)</p><button>立即咨询</button></li>
						<li><p>官方售前QQ咨询<br/>(9:00-20:00)</p><button>立即咨询</button></li>
					</ul>
				</div>
			</dd>
			<dd class="iconfont" id="after_sale">&#xe635;<p>售后咨询</p>
				<div class="after_sale">
					<ul class="after_sale1">
						<li>家用产品售后热线<a>400-885-6616</a></li>
						<li>商用产品售后热线<a>400-820-0702</a></li>
						<li>打印机售后热线<a>400-885-6616-2<br/>400-610-3888-4</a></li>
					</ul>
					<span class="after_sale2">
						<button>服务中心查询</button>
						<img src="images/weixin.png" alt="">
						<p>惠普服务微信</p>
					</span>
				</div>
			</dd>
		</dl>
		<button class="iconfont" id="Up_Arrow">&#xe64e;</button>
	</div>
	`).prependTo($("body"));

		$.ajax({
				url:"data/down.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0;i<res.length;i++){
						html+=`<li id="lidown" class="lidown">
								<dl id="uldown1" class="uldown1">
									<dt>${res[i].dt1}</dt>
									<dd><a href="">${res[i].dd1_1}</a></dd>
									<dd><a href="">${res[i].dd1_2}</a></dd>
									<dd><a href="">${res[i].dd1_3}</a></dd>
									<dd><a href="">${res[i].dd1_4}</a></dd>
									<dd><a href="">${res[i].dd1_5}</a></dd>
									<dd><a href="">${res[i].dd1_6}</a></dd>
									<dd><a href="">${res[i].dd1_7}</a></dd>
									<dd><a href="">${res[i].dd1_8}</a></dd>
								</dl>
								<dl id="uldown2" class="uldown2">
									<dt>${res[i].dt2}</dt>
									<dl id="uldown2-1" class="uldown2-1">
										<dd><a href="">${res[i].dd2_1_1}</a></dd>
										<dd><a href="">${res[i].dd2_1_2}</a></dd>
										<dd><a href="">${res[i].dd2_1_3}</a></dd>
										<dd><a href="">${res[i].dd2_1_4}</a></dd>
										<dd><a href="">${res[i].dd2_1_5}</a></dd>
										<dd><a href="">${res[i].dd2_1_6}</a></dd>
										<dd><a href="">${res[i].dd2_1_7}</a></dd>
									</dl>
									<dl id="uldown2-2" class="uldown2-2">
										<dd><a href="">${res[i].dd2_2_1}</a></dd>
										<dd><a href="">${res[i].dd2_2_2}</a></dd>
										<dd><a href="">${res[i].dd2_2_3}</a></dd>
										<dd><a href="">${res[i].dd2_2_4}</a></dd>
										<dd><a href="">${res[i].dd2_2_5}</a></dd>
										<dd><a href="">${res[i].dd2_2_6}</a></dd>
									</dl>
								</dl>
								<dl id="uldown3" class="uldown3">
									<dd><a href="" class="iconfont">${res[i].dd3_1}</a></dd>
									<dd><a href="" class="iconfont">${res[i].dd3_2}</a></dd>
									<dd><a href="" class="iconfont">${res[i].dd3_3}</a></dd>
								</dl>
								<dl id="uldown4" class="uldown4">
									<dd><a href=""><img src="${res[i].img1}" alt=""></a></dd>
									<dd><a href=""><img src="${res[i].img2}" alt=""></a></dd>
								</dl>
								
							</li>`
					}
					$(".uldown").html(html);
				}
			})
			var onavigation = $("#header").find("#search").find("#tab");
				var ouldown = $("#down").find("ul")
				//header
				onavigation.mouseenter(function(){
					
					$("#down").stop().animate({
						height:330
					},40,function(){
						$("#down").css("display","block");
					})
				})

				onavigation.mouseleave(function(){
					$("#down").css("display","none");
				})

				
				
				$("#navigation").find("li").mouseenter(function(){
					$("#navigation").find("li").attr("class", "");
					$("#uldown").find("li").css("display", 'none').eq($(this).index()).css("display", 'block');

					$(this).attr("class", 'active1');
				})
				
				$("#person").click(function(){
					$(".login_register").css("display","block");
					$(".storage").css("display","none");
					return false;
				})
				
				$("html").not(".login_register").click(function(){
					$(".login_register").css("display","none");
				})


			$(".product_list_content_img").on("click",".sc_btn",function(){
				ballMove(this);
				var id = this.id;
				var first = $.cookie("goods") == null ? true :false;
				if(first){
					$.cookie("goods",`[{id:${id},num:1}]`,{
						expires:7,
						raw:true
					});
				}else{
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var same = false;
					for(var i = 0;i<arr.length;i++){
						if(arr[i].id==id){
							arr[i].num++;
							same=true;
							break;
						}
					}
					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
					}
					$.cookie("goods",JSON.stringify(arr),{
						expires:7,
						raw:true
					});
				}
				sc_car();
			})

			$(".watch_compile").click(function(){
				location.assign("cart.html")
			})

			$(".product_img").on("click",".sc_btn",function(){
				ballMove(this);
				var id = this.id;
				var first = $.cookie("goods") == null ? true :false;
				if(first){
					$.cookie("goods",`[{id:${id},num:1}]`,{
						expires:7,
						raw:true
					});
				}else{
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var same = false;
					for(var i = 0;i<arr.length;i++){
						if(arr[i].id==id){
							arr[i].num++;
							same=true;
							break;
						}
					}
					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
					}
					$.cookie("goods",JSON.stringify(arr),{
						expires:7,
						raw:true
					});
				}
				sc_car();
			})

			$(".configuration2").on("click",".sc_btn",function(){
				ballMove(this);
				var id = this.id;
				var first = $.cookie("goods") == null ? true :false;
				if(first){
					$.cookie("goods",`[{id:${id},num:1}]`,{
						expires:7,
						raw:true
					});
				}else{
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var same = false;
					for(var i = 0;i<arr.length;i++){
						if(arr[i].id==id){
							arr[i].num++;
							same=true;
							break;
						}
					}
					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
					}
					$.cookie("goods",JSON.stringify(arr),{
						expires:7,
						raw:true
					});
				}
				sc_car();
			})
			
			
			sc_msg();
			function sc_msg(){
				sc_car();
				$.ajax({
					url: "data/shoppingCar.json",
					type: "get",
					success: function(res){
						var sc_arr = eval($.cookie("goods"));
						var html = '';
						if(sc_arr){
							for(var i = 0; i < sc_arr.length; i++){
								var all_price=parseInt(res[sc_arr[i].id].price)*parseInt(sc_arr[i].num);
								html += `<li class="li_storage">
										<a href="https://www.hpstore.cn/15-dc0124tx.html">
											<img src="${res[sc_arr[i].id].images}" alt="">
										</a>
										<div class="sc">
											<a href="https://www.hpstore.cn/15-dc0124tx.html">
												<p>${res[sc_arr[i].id].name}</p>
											</a>
											<span>￥ <span class="all_price">${all_price}</span></span>
											<span class="sc_goods">商品数量:<span class = 'sc_goodsNum'>${sc_arr[i].num}</span></span>
											<span class = 'iconfont' id="sc_compile"><a>&#xe62a;</a></span>
											<span class = 'iconfont sc_delete' id="sc_delete" >&#xe601;</span>
										</div>
										</li>`;
							}
							$(".storage ul").html(html);
						}
						//删除
						$(".sc_delete").click(function(){
							var cookieStr = $.cookie("goods");
							var arr = eval(cookieStr);
							var clear = arr.splice($(this).parent().parent().index(),1);
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


			

			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_arr = eval(sc_str);
					var sum = 0;
					for(var i = 0; i < sc_arr.length; i++){
						sum += sc_arr[i].num;
					}
					$(".sc_num").html(sum);

				}
			}

			$(".storage1").find(".close").click(function(){
				$(".storage").css("display","none");
				return false;
			});
			$("html").not("#storage").click(function(){
				$(".storage").css("display","none");
				
			})

			$(".shopping").click(function(){
				$(".storage").css("display" ,"block");
				$(".login_register").css("display","none");
				sc_msg();
				return false
				
				//录脫脭脴脪脩戮颅录脫脠毛鹿潞脦茂鲁碌碌脛脢媒戮脻
				
			});

			function ballMove(sc_Btn){
				//1隆垄脧脭脢戮脨隆脟貌拢卢脪脝露炉碌陆掳麓脜楼脦禄脰脙
				$("#ball").css({
					display: "block",
					left: $(sc_Btn).offset().left+90,
					top: $(sc_Btn).offset().top
				})

				var offX = $(".shopping").offset().left - $("#ball").offset().left;
				var offY = $(".shopping").offset().top - $("#ball").offset().top;

				//脳枚脜脳脦茂脧脽脭脣露炉
				//1隆垄脜脳脦茂脧脽露脭脧贸 脡猫脰脙虏脦脢媒
				var bool = new Parabola({
					el: "#ball",
					targetEl: null,
					offset: [offX, offY],
					curvature: 0.0005,
					duration: 400,
					callback: function(){
						$("#ball").hide();
					}
				})

				//2隆垄驴陋脢录脭脣露炉
				bool.start();
			}

			// right_fixed
				$(".consult").find("#purchase").mouseenter(function(){
					$(".purchase").css("display","block");
				})
				$(".consult").find("#purchase").mouseleave(function(){
					$(".purchase").css("display","none");
				})

				$(".consult").find("#on_line").mouseenter(function(){
					$(".on_line").css("display","block");
				})
				$(".consult").find("#on_line").mouseleave(function(){
					$(".on_line").css("display","none");
				})

				$(".consult").find("#after_sale").mouseenter(function(){
					$(".after_sale").css("display","block");
				})
				$(".consult").find("#after_sale").mouseleave(function(){
					$(".after_sale").css("display","none");
				})
				
			$("#Up_Arrow").click(function(){
					$("html,body").stop().animate({scrollTop:0},1000);
				})
				$(window).scroll(function(){
					var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
					if(scrollTop==0){
						
						$("#Up_Arrow").stop().animate({opacity:0},600,function(){
							$("#Up_Arrow").css("display","none");
						});
					}else{
						$("#Up_Arrow").css("display","block");
						$("#Up_Arrow").stop().animate({opacity:1},500)
					}
				})
					

		})
	}
	return{
		header:header
	}
})