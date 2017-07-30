<?php 
	session_start();
	
	function getCampus(){
	require_once 'config.php';
	$getQuery="SELECT * FROM campus";
	$campusList=array();
	$result = mysqli_query($conn, $getQuery);
		while($row = mysqli_fetch_assoc($result)){
			$Name=$row['name'];
			$X=$row['X'];
			$Y=$row['Y'];
			$camp=array('Name'=>$Name, 'X'=>$X, 'Y'=>$Y);
			array_push($campList, $camp);
		}
		return $campList;
	}
	//var_dump($campList);
?>
