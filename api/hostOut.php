<?php 
	
	function getHost($userID){
	include 'config.php';
	if ($userID > 0){
	$getQuery="SELECT * FROM host WHERE userID='$userID'";
	}
	else{
		$getQuery="SELECT * FROM host";
	}
	$hostL=array();
	
	$result = mysqli_query($conn, $getQuery);
		while($row = mysqli_fetch_assoc($result)){
			$host=array();
			$host['id']=$row['userID'];
			$host['aboutMe']=$row['aboutMe'];
			$host['price']=$row['price'];
			$host['addr']=$row['addr'];
			$host['X']=$row['X'];
			$host['Y']=$row['Y'];
			$host['aboutNest']=$row['aboutNest'];
			$host['minStay']=$row['minStay'];
			$host['amenities']=$row['amenities'];
			$host['photo']=$row['photo'];
			array_push($hostL, $host);
		}
		return $hostL;
	}
	
?>
