<?php


session_start();
require_once 'config.php';

$FullName=$_POST['fullname'];
$Username=$_POST['username'];
$Password =$_POST['password'];
$Type =$_POST['type'];

$StorePassword = password_hash($Password, PASSWORD_BCRYPT,array('cost'=>10));

$sql ="INSERT INTO user(UserName,password,fullname,type) VALUES ('$Username',
	  '$StorePassword','$FullName','$Type')";
		echo $sql;
		

		$result = mysqli_query($conn, $sql);
		if(!$row = mysqli_fetch_assoc($result))
		{
			echo ' Not inserting';
			$_SESSION=array();
			session_destroy();
			//header("refresh:3; url='accountbootstrap.php'");
		}
		else
		{
			
			$_SESSION['UserID'] =$row['UserID'];
			//var_dump ($_SESSION);		
			//var_dump($_SESSION);

		}
	
	






?>