define(["header","jquery"],function(header,$){
	function index(){
		$(function(){
			header.header()
				//play
				var oBtns = $("#play").find("ol").find("li");
				var oUl = $("#play").find("ul");
				var aLis = oUl.find("li");
				var odivleft=$("#play").find("#div_left");
				var odivright=$("#play").find("#div_right");


				var iNow = 0;
				var timer = null;


				oBtns.click(function(){
					iNow = $(this).index();
					tab();
				})

				timer = setInterval(timerInner, 3000);

				$("#play").hover(function(){
					clearInterval(timer);
				}, function(){
					timer = setInterval(timerInner, 3000);
				})

				odivleft.click(function(){
					iNow=iNow-1;
					if(iNow==-1){
						oUl.css("left",-16896);
						iNow=10;
					}

					tab();
				});

				odivright.click(function(){
					iNow=iNow+1;
					tab()
				});




				
				
				//featured_product
				$("#type").find("li").click(function(){
					$("#type").find("li").attr("class", "");
					$("#featured_product").find("div").css("display", 'none').eq($(this).index()).css("display", 'block');

					$(this).attr("class", 'active2');
				})
						

				function timerInner(){
					iNow++;
					tab();
				}


				function tab(){

					oBtns.attr("class", "").eq(iNow).attr("class", "active");



					if(iNow == aLis.size() - 1){
						oBtns.eq(0).attr('class', "active");
					}


					oUl.stop().animate({
						left:-1536 * iNow
					}, 400, function(){
						if(iNow == aLis.size() - 1){
							oUl.css("left", 0);
							iNow = 0;
						}
					});
				}

				//latest_product
				var oBtns2 = $("#latest_product").find("ol").find("li");
				var oUl2 = $("#latest_product").find("ul");
				var aLis2 = oUl2.find("li");
				var iNow2 = 0;
				var timer2 = null;
				oBtns2.click(function(){
					iNow2 = $(this).index();
					tab2();
				})

				timer2 = setInterval(timerInner2, 2000);

				$("#latest_product").hover(function(){
					clearInterval(timer2);
				}, function(){
					timer2 = setInterval(timerInner2, 2000);
				})


				function timerInner2(){
						iNow2++;
						tab2();
				}

				function tab2(){

					oBtns2.attr("class", "").eq(iNow2).attr("class", "active3");

					if(iNow2 == aLis2.size() - 1){
						oBtns2.eq(0).attr('class', "active3");
					}
					oUl2.stop().animate({
						top:-685 * iNow2,
					}, 400, function(){
						if(iNow2 == aLis2.size() - 1){
							oUl2.css("top", 0);
							iNow2 = 0;
						}
					});
				}


			})
	}
	return{
		index:index
	}
})