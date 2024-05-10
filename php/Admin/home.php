<?php 

 session_start();

 if (isset($_SESSION['role'])) {
    if ($_SESSION['role'] == '2') {

     }else{
    
       header("Location:home.php");
     }
 }else{
  
    header("Location:../../index.php");
     exit();
 }


//LOGOUT BUTTON
if(isset($_POST['logout'])) {
session_unset();
header('location:../../index.php');
}

 ?>
<!DOCTYPE html>
<html dir=rtl>
<head> 
     <!-- Required meta tags -->
     <meta charset="utf-8">
    <meta name="home" content="width=device-width, initial-scale=1">
    <title>  لوحة التحكم</title>
     <!-- Bootstrap CSS -->
    <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Arabic font links-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet">

    
<style>
body{
    background-image: url(https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?w=1060&t=st=1684432925~exp=1684433525~hmac=58e625acc1ba7fbd5aa20655adb8298a28a700710b24d7094e44b6c49fbbc3a3) ;
    font-family:'Tajawal', sans-seri;
    background-repeat:no-repeat;
    height: 100%;
    background-size: cover;
}
/*LOGOUT BUTTON*/
#logout{
              background: none;
              border: none;
              background-image: url("https://cdn-icons-png.flaticon.com/512/4400/4400828.png");
              background-size: 20px;
              background-position: center;
              background-repeat: no-repeat;
              width:25px;
              height:25px; 
              position: absolute;
              top: 0;
              right: 0;         
}

</style>	
	
</head>
<body>
  <!--LOGOUT BUTTON-->
<a href="../../index.php"><input id="logout" type="submit" name="logout" value="" title="تسجيل الخروج"></a>

<div class="container mt-5">
  <div class="row">
    <div class="col-1"></div>
    <div class="col-2">
  
  

</div>
<div class="col-6">
<div class="title h1 text-center font-weight-bold">  <?php echo $_SESSION['FirstName']; ?>   مرحبا بك في لوحة التحكم   </div>
</div>
<div class="col2"></div>
</div>


<div class="row mt-5" >
  <div class="col-sm-1"></div>
  <div class="col-sm-5">
    <div  class="card  rounded mt-4">
    <div  class="card-header  d-flex justify-content-center" >
    <img class="d-block w-50"  src="https://img.icons8.com/?size=512&id=78bBPw1vDeKu&format=png" alt="staff">
    </div>
      <div class="card-body" style="text-align:center;">
        <h5 class="card-title font-weight-bold mb-4">ادارةالموظفين</h5>
        <a href="ManageStaff.php" class="btn btn-primary btn-sm mb-2 float-center">اضغط هنا</a>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card mt-4">
    <div class="card-header d-flex justify-content-center" style="text-align:center; vertical-align: middle;"> 
   
    <img class="d-block w-50" src="https://img.icons8.com/?size=512&id=weik8C5SC8Mm&format=png"  alt="feedback">
    </div>
      <div class="card-body"style="text-align:center;">
        <h5 class="card-title font-weight-bold mb-4"> عرض الملاحظات</h5>
        <a href="adminFeedback.php" class="btn btn-primary btn-sm mb-2 float-center">اضغط هنا</a>
      </div>
    </div>
  </div>
</div>
<div class="col-sm-1"></div>
</div>
<br>
<br>


</body>
</html>

