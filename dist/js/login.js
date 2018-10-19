define(["header","jquery","jquery-cookie"],function(header,$){
	function login(){
		$(function(){
			header.header()
			$(".login_left").find(".login").click(function(){
				var str = `username=${$("name=username")[0].value}&password=${$("name=password")[0].value}`;
				ajax({
					method: "post",
					url: "test.php?type=login",
					data: str, 
					success: function(data){
						alert(data);
					},
					error: function(msg){
						alert(msg);
					}
				})
			})
			function ajax({method = "get", url, data, success, error}){
				var xhr = null;
				try{
					xhr = new XMLHttpRequest();
				}catch(error){
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}

				//判断请求方式
				if(method == "get" && data){
					url += "?" + data + "&" + new Date().getTime();
				}

				xhr.open(method, url, true);

				if(method == "get"){
					xhr.send();
				}else{
					xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
					xhr.send(data);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							// alert(xhr.responseText);
							/*
								下载到数据以后，具体如何处理数据，不确定，
								那么我们需要将处理数据的具体操作，交给程序员编写。
								回调函数
							*/
							if(success){
								success(xhr.responseText);
							}
						}else{
							// alert("error：" + xhr.status);
							if(error){
								error("error：" + xhr.status);
							}
						}
					}
				}
			}
		})
	}
	return{
		login:login
	}
})