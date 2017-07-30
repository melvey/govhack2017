
 <?php

		//session_id("Login");
		
		session_start();
		require_once 'config.php';
		
		$Username=$_POST['username'];
		$Password =$_POST['password'];
		
		$sql = "SELECT * FROM login WHERE UserName='$Username' ";
		echo $sql;
		$result = mysqli_query($conn, $sql);
		
		if(password_verify($Password, $result['Password'])
		{
			session_start();
			$_SESSION['UserID'] =$row['userID'];
			
		}
		else
		{
			echo ' Incorrect user name password';
			session_destroy();
			
		}
		
	
	
	/*if(!$row = mysqli_fetch_assoc($result))
		{
			echo ' Incorrect user name password';
			$_SESSION=array();
			session_destroy();
			header("refresh:3; url='accountbootstrap.php'");
		}
		else
		{
			
			$_SESSION['id'] =$row['ID'];
			var_dump ($_SESSION);		
			header("refresh:2; url='index_postlogin.php'");
			
			var_dump($_SESSION);

		}*/
		


	
?>
	
	
	
	
		
	