define(["header","jquery","jquery-cookie"],function(header,$){
    function register(){
        $(function(){
            header.header();
            // 邮箱
            is1=false;
            is2=false;
            is3=false;
            is4=false;
            is5=false;
            is6=false;
            var Nusername = document.getElementById("username");
            var Nusernamep = document.getElementById("username_p");
            $("#username").blur(function(){
                var inusername = Nusername.value.replace(/ /ig,"");
                Nusername.value=inusername;
                if(!inusername){
                    Nusernamep.innerHTML="邮箱不能为空";
                    Nusername.style.borderColor="red";
                    Nusername.style.background = "#ffcccc";
                    Nusernamep.style.color="red";
                }else if(/\W/.test(inusername)){
                    Nusernamep.innerHTML="邮箱地址需由字母、数字或下划线组成";
                    Nusername.style.borderColor="red";
                    Nusername.style.background = "#ffcccc";
                    Nusernamep.style.color="red";
                }else{
                    if(inusername.length>18||inusername.length<6){
                        Nusernamep.innerHTML="长度应为6~18个字符";
                        Nusername.style.borderColor="red";
                        Nusername.style.background = "#ffcccc";
                        Nusernamep.style.color="red";
                    }else{
                        Nusernamep.innerHTML="";
                        Nusername.style.borderColor="black";
                        Nusername.style.background = "#a8e991";
                        is1=true;
                    }
                }
            })
            // 滑动验证
            var dragContainer = document.getElementById("dragContainer");
            var dragBg = document.getElementById("dragBg");
            var dragText = document.getElementById("dragText");
            var dragHandler = document.getElementById("dragHandler");
 
            //滑块最大偏移量
            var maxHandlerOffset = dragContainer.clientWidth - dragHandler.clientWidth;
            //是否验证成功的标记
            var isVertifySucc = false;
            initDrag();
 
            function initDrag() {
                dragText.textContent = "拖动滑块验证";
                dragHandler.addEventListener("mousedown", onDragHandlerMouseDown);
 
                dragHandler.addEventListener("touchstart", onDragHandlerMouseDown);
            }
 
            function onDragHandlerMouseDown(event) {
                document.addEventListener("mousemove", onDragHandlerMouseMove);
                document.addEventListener("mouseup", onDragHandlerMouseUp);
 
                document.addEventListener("touchmove", onDragHandlerMouseMove);
                document.addEventListener("touchend", onDragHandlerMouseUp);
            }
 
            function onDragHandlerMouseMove(event) {
                
            //     html元素不存在width属性,只有clientWidth
            //     offsetX是相对当前元素的,clientX和pageX是相对其父元素的
            //     touches：表示当前跟踪的触摸操作的touch对象的数组。
            //     targetTouches：特定于事件目标的Touch对象的数组。
            // 　　changedTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。
                
                var left = (event.clientX || event.changedTouches[0].clientX) - dragHandler.clientWidth / 2 - 250;
                if(left < 0) {
                    left = 0;
                } else if(left > maxHandlerOffset) {
                    left = maxHandlerOffset;
                    verifySucc();
                }
                dragHandler.style.left = left +"px";
                dragBg.style.width = dragHandler.style.left;
            }
            function onDragHandlerMouseUp(event) {
                document.removeEventListener("mousemove", onDragHandlerMouseMove);
                document.removeEventListener("mouseup", onDragHandlerMouseUp);
 
                document.removeEventListener("touchmove", onDragHandlerMouseMove);
                document.removeEventListener("touchend", onDragHandlerMouseUp);
 
                dragHandler.style.left = 0;
                dragBg.style.width = 0;
            }
 
            //验证成功
            function verifySucc() {
                isVertifySucc = true;
                dragText.textContent = "验证通过";
                dragText.style.color = "white";
                dragHandler.setAttribute("class", "dragHandlerOkBg");
 
                dragHandler.removeEventListener("mousedown", onDragHandlerMouseDown);
                document.removeEventListener("mousemove", onDragHandlerMouseMove);
                document.removeEventListener("mouseup", onDragHandlerMouseUp);
 
                dragHandler.removeEventListener("touchstart", onDragHandlerMouseDown);
                document.removeEventListener("touchmove", onDragHandlerMouseMove);
                document.removeEventListener("touchend", onDragHandlerMouseUp);
            };

            // 电话
            var Nphone = document.getElementById("phone");
            var Nphonep = document.getElementById("phone_p");
            $("#phone").blur(function(){
                var inphone = Nphone.value.replace(/ /ig,"");
                Nphone.value=inphone;
                if(inphone.length==0){
                    Nphonep.innerHTML="手机号码不能为空";
                    Nphone.style.borderColor="red";
                    Nphone.style.background = "#ffcccc";
                    Nphonep.style.color="red";
                }else if(/\D/.test(inphone)){
                    Nphonep.innerHTML="手机号码由数字组成";
                    Nphone.style.borderColor="red";
                    Nphone.style.background = "#ffcccc";
                    Nphonep.style.color="red";
                }else if(/^[^1]/.test(inphone)){
                    Nphonep.innerHTML="首位为数字1"
                    Nphone.style.borderColor="red";
                    Nphone.style.background = "#ffcccc";
                    Nphonep.style.color="red";
                }else{
                    if(inphone.length != 11){
                        Nphonep.innerHTML="长度应为11位";
                        Nphone.style.borderColor="red";
                        Nphone.style.background = "#ffcccc";
                        Nphonep.style.color="red";
                    }else{
                        Nphonep.innerHTML="";
                        Nphone.style.borderColor="black";
                        Nphone.style.background = "#a8e991";
                        is2=true;
                    }
                }
            })

            // 短信验证码
            var Nverification = document.getElementById("verification");
            var Nverificationp = document.getElementById("verification_p");
            $("#verification").blur(function(){
                var inverification = Nverification.value.replace(/ /ig,"")
                Nverification.value=inverification;
                if(!inverification){
                    Nverificationp.innerHTML="请输入短信验证码";
                    Nverification.style.borderColor="red";
                    Nverification.style.background = "#ffcccc";
                    Nverificationp.style.color="red";
                }else if(inverification==arr1){
                    Nverificationp.innerHTML="";
                    Nverification.style.borderColor="black";
                    Nverification.style.background = "#a8e991";
                    is3=true;
                }else{
                    Nverificationp.innerHTML="短信验证码有误，请重新获取";
                    Nverification.style.borderColor="red";
                    Nverification.style.background = "#ffcccc";
                    Nverificationp.style.color="red";
                }
            })
            $("#button").click(function(){
                btnClick();
            })
            function testCode(n){
                var arr = [];
                for(var i = 0; i < n; i++){
                    var num = parseInt(Math.random() * 10);
                    arr.push(num);
                }
                arr1=arr.join("");
                return arr1;
            }
            function btnClick(){
                var oNote=document.getElementById("note");
                oNote.innerHTML = testCode(4);
            }

            // 密码
            var Npassword = document.getElementById("password");
            var Npasswordp = document.getElementById("password_p");
            $("#password").blur(function(){
                inpassword = Npassword.value;
                if(!inpassword){
                    Npasswordp.innerHTML="密码不能为空";
                    Npassword.style.borderColor="red";
                    Npassword.style.background = "#ffcccc";
                    Npasswordp.style.color="red";
                }else if(inpassword.length>16||inpassword.length<8){
                    Npasswordp.innerHTML="长度应为8~16个字符";
                    Npassword.style.borderColor="red";
                    Npassword.style.background = "#ffcccc";
                    Npasswordp.style.color="red";
                }else{
                    Npasswordp.innerHTML="";
                    Npassword.style.borderColor="black";
                    Npassword.style.background = "#a8e991";
                    is4=true;
                }               
            })

            // 再次输入密码
            var NpasswordAgain = document.getElementById("passwordAgain");
            var NpasswordAgainp = document.getElementById("passwordAgain_p");
            $("#passwordAgain").blur(function(){
                inpasswordAgain=NpasswordAgain.value;
                inpassword=Npassword.value;
                if(!inpasswordAgain){
                    NpasswordAgainp.innerHTML="请再次输入密码";
                    NpasswordAgain.style.borderColor="red";
                    NpasswordAgain.style.background = "#ffcccc";
                    NpasswordAgainp.style.color="red";
                }else if(inpasswordAgain==inpassword){
                    NpasswordAgainp.innerHTML="";
                    NpasswordAgain.style.borderColor="black";
                    NpasswordAgain.style.background = "#a8e991";
                    is5=true;
                }else{
                    NpasswordAgainp.innerHTML="两次所填密码不同，请重新填写";
                    NpasswordAgain.style.borderColor="red";
                    NpasswordAgain.style.background = "#ffcccc";
                    NpasswordAgainp.style.color="red";
                }               
            })

            var check = 1;
            $(".message2").find("input").click(function(){
                if(check == 1){
                    check=2;
                    is6=true;
                }else{
                    check=1;
                    is6=false;
                }
            })
            

            // 注册
            var oRegister = document.getElementById("register");
            $("#register").click(function(){
                if(is1==true&&is2==true&&is3==true&&is4==true&&is5==true&&isVertifySucc ==true&&is6==true){
                    console.log('填写正确');
                }else{
                    alert("填写有误");
                    return false;
                }
                var str = `username=${$("[name=username]")[0].value}&phone=${$("[name=phone]")[0].value}&password=${$("[name=password]")[0].value}&passwordAgain=${$("[name=passwordAgain]")[0].value}`;
                alert(str);
                ajax({
                    method: "POST",
                    url: "test.php?type=register",
                    data: str,
                    success: function(data){
                        alert(data);
                        if(data=="注册成功"){
                            location.assign("login.html")
                        }
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
        register:register
    }
})