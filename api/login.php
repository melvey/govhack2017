<?php
require_once 'config.php';

session_start();

$Username=$_POST['username'];
$Password =$_POST['password'];
if isset($_SESSION['user']){
	print "already logged in"
}
else{
	if (!$row = mysqli_fetch_assoc($result))
		{
			echo ' Incorrect user name password';
			$_SESSION=array();
			session_destroy();
}




?>