<?php 
session_start(); 

include "connection.php";

if (isset($_POST['id']) && isset($_POST['password'])) {

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$id = validate($_POST['id']);
	$pass = validate($_POST['password']);

	if (empty($id)) {
		function_alert("الرجاء ادخال جميع المدخلات");
	}else if(empty($pass)){
        function_alert("الرجاء ادخال جميع المدخلات");
	}else{
		$sql = "SELECT * FROM staff WHERE staffID='$id' AND password='$pass'";

		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) === 1) {
			$row = mysqli_fetch_assoc($result);
            if ($row['staffID'] === $id && $row['password'] === $pass) {
            	$_SESSION['role'] = $row['role'];
            	$_SESSION['FirstName'] = $row['FirstName'];
            	$_SESSION['LastName'] = $row['LastName'];
            	$_SESSION['Email'] = $row['Email'];

				 
				 }elseif($row['role'] == '2') {

            	 header("Location: Admin/home.php");
		        exit();
            }else{
				function_alert("خطأ في الرقم الوظيفي او كلمة المرور");
			}
		}else{
			function_alert("خطأ في الرقم الوظيفي او كلمة المرور");
		}
	}
	if ($row['role'] == '0') {
				
		header("Location: ../Lecturer.php");
		exit();
	   }
	   
	   if ($row['role'] == '1') {
				
		header("Location: ../MCO.php");
		exit();
	   }   

	   if ($row['role'] == '2') {
				
		header("Location: Admin/home.php");
		exit();
	   }   
}else{
	header("Location: ../index.php");
	exit();
}


function function_alert($msg) {
    echo "<script type='text/javascript'>
    window.location.href='../index.php';
    alert('$msg');</script>";
}


?>
