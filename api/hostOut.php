<?php 
	session_start();
	
	function getHost($userID){
	require_once 'config.php';
	$getQuery="SELECT * FROM host WHERE userID='$userID'";
	
	$result = mysqli_query($conn, $getQuery);
		if(!$row = mysqli_fetch_assoc($result)){
			echo "User not found";
		}
		else{
			$host=array();
			$host['aboutMe']=$row['aboutMe'];
			$host['price']=$row['price'];
			$host['addr']=$row['addr'];
			$host['X']=$row['X'];
			$host['Y']=$row['Y'];
			$host['aboutNest']=$row['aboutNest'];
			$host['minStay']=$row['minStay'];
		}
		return $host;
	}
	
	var_dump(getHost(1));
?>
