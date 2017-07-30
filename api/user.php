<?php 
	session_start();
	
	function getUser(){
	require_once 'config.php';
	$getQuery="SELECT * FROM user";
	$userL=array();
	$result = mysqli_query($conn, $getQuery);
		while($row = mysqli_fetch_assoc($result)){
			$user=array();
			$user['ID']=$row['userID'];
			$user['userName']=$row['userName'];
			$user['name']=$row['fullname'];
			$user['password']=$row['password'];
			$user['type']=$row['type'];
			array_push($userL, $user);
		}
		return $userL;
	}
	
	var_dump(getUser());
?>