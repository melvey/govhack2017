

 <?php
 function getName($userID){
	require_once 'config.php';
	$getQuery="SELECT * FROM user WHERE userID=$userID";
	$result = mysqli_query($conn, $getQuery);
		if($row = mysqli_fetch_assoc($result)){
			return $row['fullname'];
		} 
 }
 
 function getSub($subID){
	 require_once 'config.php';
	 $getQuery="SELECT * FROM suburb WHERE suburbID=$subID";
	$result = mysqli_query($conn, $getQuery);
		if($row = mysqli_fetch_assoc($result)){
			return $row['suburbName'];
		} 
 }
 
 function getCam($userID){
	 require_once 'config.php';
	 $getQuery="SELECT * FROM renter WHERE userID=$userID";
	$result = mysqli_query($conn, $getQuery);
		if($row = mysqli_fetch_assoc($result)){
			return $row['campus'];
		} 
 }
 
function listHost($campus){ 
   include 'campusOut.php';
   include  'hostOut.php';
   include 'distanceCheck.php';
	
   $hostList=getHost(0);
   $processed=array();
   foreach ($hostList as $host){
	   
	   
	   $nhost['hostID']=$host['id'];
	   $nhost['hostName']=getName($host['id']);
	   
	   $subID=end(explode(',', $host['addr']));
	   $nhost['suburb']=getSub($subID);
	   
	   $nhost['camID']=getCam($userID);
	   $nhost['campusDist']=distanceCheck($camID, $host['id']);
	   
	   $nhost['price']=$host['price'];
	   $nhost['minStay']=$host['minStay'];
	   $nhost['photo']=$host['photo'];
	   array_push($processed, $nhost);
   } 
  return json_encode($processed);
  }
  
   ?>