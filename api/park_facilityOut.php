<?php 	
	function getPark(){
	require_once 'config.php';
	$getQuery="SELECT * FROM park_facility";
	$parkList=array();
	$result = mysqli_query($conn, $getQuery);
		while($row = mysqli_fetch_assoc($result)){
			$Name=$row['Name'];
			$Type=$row['Type'];
			$X=$row['X'];
			$Y=$row['Y'];
			$Park=array('Name'=>$Name, 'Type'=>$Type, 'X'=>$X, 'Y'=>$Y);
			array_push($parkList, $Park);
		}
		return $parkList;
	}
	//var_dump($parkList);
	//var_dump(getPark());
?>
