<?php

	session_start();
	require_once 'config.php';
	
	
	$ID=$_POST['id'];
	$date=date("Y-m-d");
	$AboutMe =$_POST['aboutme'];
	$Price =$_POST['price'];
	$Address =$_POST['address'];
	$longitude =$_POST['latitude'];
	$Password =$_POST['password'];
	$Email=$_POST['email'];
	$sql ="INSERT INTO register(ID,FName,LName,Age,IC,Email,Password) VALUES ('$ID','$FName','$LName','$Age','$IC','$Email','$Password')";
	$sql2 ="INSERT INTO timetable (title, description, date) values ('compete', '".$FName.' '.$LName."', '".$date."');";
	//$res = mysql_query("SELECT * FROM register");
	if(!mysqli_query($conn,$sql))
	{
		echo ' Not inserting';
	}
	else
	{
	echo 'Inserted';
	}
	mysqli_query($conn,$sql2);
	
	mysqli_close($conn);
	header("refresh:2; url='indexbootstrap.php'");
	
	
?>