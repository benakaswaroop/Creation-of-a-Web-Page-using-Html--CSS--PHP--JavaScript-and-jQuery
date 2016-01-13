<?php
	session_start();
	$username = $password = "";
	
	$err = "Enter correct username and password";
	
	$conn = new mysqli('localhost', 'root', '', 'imdb');
	
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$username = test_input($_POST['username']);
		$password = test_input($_POST['password']);
	}
	
	$redirect ="";
	
	$query = 'SELECT * FROM `user` WHERE `username`="'.$username.'" or `email`="'.$username.'"' ;	
	$result = $conn->query($query);
	$row = mysqli_fetch_assoc($result);
	
	if(mysqli_num_rows($result) == 0){
		echo $err;
	} else{
		if($password == $row['password']){
			$_SESSION['username'] = $username;
			$_SESSION['name'] = $row['name'];
			
			if(strcmp($row['privileges'],"a")){
				echo 'admin"';
			} else{
				echo 'user';
			}
		}
		else {
			echo $err;
		}
	}
	
	function test_input($data)
	{
 		$data = trim($data);
  		$data = stripslashes($data);
  		$data = htmlspecialchars($data);
  		return $data;
	}
?>