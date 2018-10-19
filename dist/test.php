<?php 
		//设置编码格式
	header("Content-type:text/html;charset=utf-8");
	/*
		$_POST 接受通过post请求所有的数据
	*/
	error_reporting(E_ALL);

	//链接数据库
	//1、链接数据库
	$link = mysql_connect("localhost", 'root', '123456');
	// var_dump($link)
	//2、判断链接是否成功
	if(!$link){
		echo "链接数据库失败";
		exit; //退出当前程序。
	}

	//3、设置字符集
	mysql_set_charset("utf8");

	//4、选择数据库
	mysql_select_db("hpstore");


	//判断是登陆还是注册
	$type = $_GET["type"];
	if($type == "login"){
		//登陆	
		$username = $_POST['username'];
		$password = $_POST['password'];


		//5、准备sql语句
		$sql = "select * from information where username='{$username}' AND password='{$password}'";
		//6、发送sql语句
		$res = mysql_query($sql);

		//7、处理结果集
		$row = mysql_fetch_assoc($res);
		if($row){
			echo "登陆成功";
			exit;
		}else{
			echo "登陆失败";
			exit;
		}

	}else{
		//注册
		$username = $_POST['username'];
		$phone = $_POST['phone'];
		$password = $_POST['password'];
		$passwordAgain = $_POST["passwordAgain"];

		if($password != $passwordAgain){
			echo "两次输入的密码不一致";
			exit;
		}


		//判断是否之前注册过
		$sql = "SELECT * FROM information WHERE username='{$username}'";
		$res = mysql_query($sql);
		$row = mysql_fetch_assoc($res);
		if($row){
			echo "该邮箱已被注册";
			exit;
		}

		$sql2 = "SELECT * FROM information WHERE phone='{$phone}'";
		$res2 = mysql_query($sql2);
		$row2 = mysql_fetch_assoc($res2);
		if($row2){
			echo "该手机号已被注册";
			exit;
		}

		//5、准备sql语句
		$sql = "INSERT INTO information(username,phone,password) VALUES('{$username}','{$phone}','{$password}')";

		//6、发送sql语句
		$res = mysql_query($sql);
		if($res){
			echo "注册成功";
			exit;
		}else{
			echo "注册失败";
			exit;
		}
	}

	//8、关闭数据库
	mysql_close($link);
		
 ?>