<?php

include_once 'campusOut.php';
include_once  'hostOut.php';
include_once 'distanceCheck.php';


 function getName($userID){
	include 'config.php';
	$getQuery="SELECT * FROM user WHERE userID=$userID";
	$result = mysqli_query($conn, $getQuery);
		if($row = mysqli_fetch_assoc($result)){
			return $row['fullname'];
		} 
 }
 
 function getSub($subID){
	include 'config.php';
	$getQuery="SELECT * FROM suburb WHERE suburbID=$subID";
	$result = mysqli_query($conn, $getQuery);
		if($row = mysqli_fetch_assoc($result)){
			return $row['suburbName'];
		} 
 }
 
 function getCam($userID){
	 include 'config.php';
	$getQuery="SELECT * FROM renter WHERE userID=$userID";
	$result = mysqli_query($conn, $getQuery);
		if($row = mysqli_fetch_assoc($result)){
			return $row['campus'];
		} 
 }
 
function listHost(){ 
	
	$userID=$_Session['UserID'];
   $hostList=getHost(0);
   $processed=array();
   foreach ($hostList as $host){
	   
	   
	   $nhost['hostID']=$host['id'];
	   $nhost['hostName']=getName($host['id']);
	   $chA=explode(',', $host['addr']);
	   $subID=end($chA);
	   $nhost['suburb']=getSub($subID);
	   
	   $camID=getCam($userID);
	   $nhost['campusDist']=distanceCheck($camID, $host['id']);
	   
	   $nhost['price']=$host['price'];
	   $nhost['minStay']=$host['minStay'];
	   $nhost['photo']=$host['photo'];
	   array_push($processed, $nhost);

   } 
  return json_encode($processed);
  }
 
   ?>