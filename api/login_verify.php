
 <?php

		
		
		session_start();
		require_once 'config.php';
		//if(isset)
		$Username=$_POST['username'];
		$Password =$_POST['password'];
		
		
		
		$sql = "SELECT * FROM user WHERE UserName='$Username' AND Password='$Password'";
		$result = mysqli_query($conn, $sql);
		if(!$row = mysqli_fetch_assoc($result))
		{
			echo ' Incorrect user name password';
			$_SESSION=array();
			session_destroy();
			//header("refresh:3; url='accountbootstrap.php'");
		}
		else
		{			
			//$_SESSION['UserId'] = $row['UserID'];
			//var_dump ($_SESSION);		
			//header("refresh:2; url='index_postlogin.php'");
			echo ' Login successfull';
			
			//var_dump($_SESSION);

		}
		
		
		

	
?>
	
	
	
	
		
	