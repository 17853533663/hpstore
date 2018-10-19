define(["header","jquery","jquery-cookie"],function(header,$){
	function product_details(){
		$(function(){
			header.header();
			// product_left
			var oBtns = $(".product_left_img").find("ol").find("li");
			var oUl = $(".product_left_img").find("ul");
			var aLis = oUl.find("li");
			var iNow = 0;
			var timer = null;
			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})
			$(".left").click(function(){
				iNow=iNow-1;
				if(iNow==-1){
					oUl.css("left",5600);
					iNow=7;
				}

				tab();
			});
			$(".right").click(function(){
				iNow=iNow+1;
				tab()
			});
			$(".product_left_bigimg").find("ul").find("li").mouseenter(function(){
				$(".product_left_bigimg").find(".left").css("display","block");
				$(".product_left_bigimg").find(".right").css("display","block");
			})
			$(".product_left_bigimg").find("ul").find("li:nth-child(1)").mouseenter(function(){
				$(".sear").css("display","block");
				$(".amplification").css("display","block");
			})
			$(".product_left_bigimg").mouseleave(function(){
				$(".product_left_bigimg").find(".left").css("display","none");
				$(".product_left_bigimg").find(".right").css("display","none");
			})
			$(".product_left_bigimg").find("ul").find("li").mouseleave(function(){
				$(".product_left_bigimg").find(".sear").css("display","none");
				$(".amplification").css("display","none");
			})
			function tab(){

				oBtns.attr("class", "").eq(iNow).attr("class", "active");

				if(iNow == aLis.size() - 1){
					oBtns.eq(0).attr('class', "active");
				}

				oUl.stop().animate({
					left:-900 * iNow
				}, 100, function(){
					if(iNow == aLis.size() - 1){
						oUl.css("left", 0);
						iNow = 0;
					}
				});
			}

			//amplification放大镜
        	$("#small").mousemove(function(e){
             	var X=e.clientX-$("#small").offset().left-$(".sear").width()/2;
        		var Y=e.clientY-$("#small").offset().top-$(".sear").height()/2+$(window).scrollTop();
        		$(".sear").css({
        			left:X,
        			top:Y
        		});
        		border(e)
        		$("#big").css({
        			backgroundPosition:(-$(".sear").offset().left+100)*2+"px"+" "+(-$(".sear").offset().top+150)*2+"px"
        		})
        	});
        	function border(e){
        		var X=e.clientX-$("#small").offset().left-$(".sear").width()/2;
        		var Y=e.clientY-$("#small").offset().top-$(".sear").height()/2+$(window).scrollTop();
        		if(Y < 0){
        			$(".sear").css({
        				top:0
        			});
        		}
        		if(Y >= $("#small").height()-$(".sear").height()){
        			$(".sear").css({
        				top:$("#small").height()-$(".sear").height()
        			});
        		}
        		if(X < 0){
        			$(".sear").css({
        				left:0,
        			});
        		}
        		if(X >= $("#small").width()-$(".sear").width()){
        			$(".sear").css({
        				left:$("#small").width()-$(".sear").width()
        			});
        		}

        	}

   			
			
			// product_right
			$(".drop_down_box").click(function(){
				$(".drop_down").css("display","block");
				return false;
			});
			$(".drop_down").find("li").click(function(){
				$(".drop_down").css("display","none");
				return false
			});

			$("html").not(".drop_down_box").click(function(){
				$(".drop_down").css("display","none");
			});

			$(".drop_down").find("li").click(function(){
				$(".drop_down").find("li").attr("class", "");
				$(".configuration2").find("li").css("display", 'none').eq($(this).index()).css("display", 'block');

				$(this).attr("class", 'active');
			})


			$(".drop_down").find("li:nth-child(1)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[0].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})
			$(".drop_down").find("li:nth-child(2)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[1].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})
			$(".drop_down").find("li:nth-child(3)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[2].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})
			$(".drop_down").find("li:nth-child(4)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[3].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})
			$(".drop_down").find("li:nth-child(5)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[4].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})
			$(".drop_down").find("li:nth-child(6)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[5].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})
			$(".drop_down").find("li:nth-child(7)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[6].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})
			$(".drop_down").find("li:nth-child(8)").click(function(){
				$.ajax({
					url:"data/drop_down.json",
					type:"GET",
					success:function(res){
						var html="";
						html+=`<li>${res[7].li}</li>
						<span class="arrow">&#xe50f;</span>`;
						$(".drop_down_box").html(html);
					}
					
				})
			})

			$.ajax({
				url:"data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 75;i<=82;i++){
						html+=`<li>
					<div class="configuration_details">
						<div><span>处理器类型</span><br/>${res[i].span}</div>
						<div><span>硬盘说明</span><br/>256 GB PCIe® NVMe™ </div>
						<div><span>屏幕尺寸</span><br/>13.3</div>
						<div><span>重量（公制）</span><br/>1.31 kg</div>
						<div><span>显卡</span><br/>Intel UHD</div>
					</div>
					<h2>￥ <span>${res[i].price}</span></h2>
					<button class="sc_btn" id="${res[i].id}">添加到购物车</button>
				</li>`;
					}
					$(".configuration2").html(html);
				}
			})
			
		})
	}
	return{
		product_details:product_details
	}
})