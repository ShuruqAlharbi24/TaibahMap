<?php
include '../connection.php';


      if ($_GET['id']) {
          $id = $_GET['id'];


          $sql="select * from staff where id='$id'";

          $res=mysqli_query($conn,$sql);
    
          if (mysqli_num_rows($res) > 0) {
           
              while($row = mysqli_fetch_array($res)){
                $staffID=$row['staffID'];
                  $FirstName = $row['FirstName'];
                  $LastName = $row['LastName'];
                  $Role =   $row['role'];
                  $Email =  $row['Email'];
                  $pass = $row['password'];
              }
            
           
          }else{
      
              echo "user not found";
          }




      }else{
          $ID = null;
      }
      


?>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

    <title>تعديل بيانات الموظف</title>


    <!-- Arabic font links-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet">
  </head>

<style>

    body{
      background-image: url(https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?w=1060&t=st=1684432925~exp=1684433525~hmac=58e625acc1ba7fbd5aa20655adb8298a28a700710b24d7094e44b6c49fbbc3a3) ;
    font-family:'Tajawal', sans-seri;
    background-repeat:no-repeat;
    height: 100%;
    background-size: cover;
    }

.container{
  display: flex;
  flex-direction: column;
  width: 510px;
  justify-content:center;
  margin-left: 30.5%;
  border: 2px solid rgba(9, 24, 5, 0.316);
  border-radius: 18px;
  padding: 20px;
  background-color: white ;
  box-shadow:
0 2.8px 2.2px rgba(0, 0, 0, 0.034),
0 6.7px 5.3px rgba(0, 0, 0, 0.048),
0 12.5px 10px rgba(0, 0, 0, 0.06),
0 22.3px 17.9px rgba(0, 0, 0, 0.072),
0 41.8px 33.4px rgba(0, 0, 0, 0.086),
0 100px 80px rgba(0, 0, 0, 0.12)
;
}

label{
  font-size: 14px ;
}
.btn{
  color:black;
}

.btn:hover{
  height: 40px;
  width: 130px;

}

</style>

<body>
<h2 style="text-align:center;">إدارة الموظفين</h2> 

                                

  <div class="container" style="text-align:right;" dir="rtl">
     <h4 style="text-align:center;">تعديل بيانات الموظف</h4>


            <table> 
                          
              
                  <form action="update.php" method="POST" class="form-inline" autocomplete="on" id="submit">

                   <div class=" mt-1">
                    <label class="form-label" for="FirstName">الإسم الأول</label>
                    </div>

                    <div class=" mt-1">
                        <input class="form-control"  type="text" id="FirstName" value="<?php echo $FirstName; ?>" name="FirstName"  >
                    </div>

                    <div class=" mt-1">
                       <input class="form-control" type="hidden" name="id" value="<?php echo $id?>">
                    </div>


                    <div class="mt-1">
                              <label class="form-label" for="LastName">الإسم الأخير</label>
                         </div>
                         <div class="mt-1">
                              <input value="<?php echo $LastName; ?>" class=" form-control" type="text" id="LastName" name="LastName" required >
                         </div>



                    <div class=" mt-1">
                              <label class="form-label" for="ID">الرقم الوظيفي</label>
                         </div> 

                         <div class=" mt-1">
                              <input value="<?php echo $staffID; ?>" class="col-3 form-control" type="text" id="staffID" name="staffID"  required>
                         </div> 

                    <div class=" mt-1">
                              <label class="form-label" class="col-3">الوظيفة</label>
                    </div> 

                    <div class="row">
                    <div class="col-4 mt-1">
                                  <label class="form-label">عضو هيئة تدريس</label>
                                      <input  class="form-check-input" type="radio" id="role0" name="role"  value="0" <?php echo ($Role == '0') ?  "checked" : "" ;  ?>>
                                </div>

                                <div class="col-4 mt-1">
                                  <label class="form-label">مدير قاعات</label>
                                      <input class="form-check-input" type="radio" id="role1" name="role"  value="1" <?php echo ($Role == '1') ?  "checked" : "" ;  ?>>
                                  
                                  </div>
                                  <div class="col-4 mt-1">
                                  <label class="form-label">مسوؤل</label>
                                      <input class="form-check-input" type="radio" id="role2" name="role"  value="2" <?php echo ($Role == '2') ?  "checked" : "" ;  ?>>
                              
                                  </div>

                    </div>
                   



                    <div class="mt-1">
                               <label class="form-label" for="Password">الرقم السري</label>
                    </div>
                    <div class="mt-1">
                               <input value="<?php echo $pass; ?>" class="col-3 form-control" type="text" id="Password" name="Password" required >
                    </div>
              



                    <div class="mt-1">
                               <label class="form-label" for="Email">الإيميل</label>
                    </div>
                    <div class="mt-1">
                               <input class="col-3 form-control" type="text" id="Email" name="Email" value="<?php echo $Email; ?>" required >
                    </div>



                    <div class="row m-1">
                         <div class="col-2"></div>
                         <div class="col-4">
                            <input class="btn-info btn form-control"  type="submit" name="submit" value="إضافة">
                         </div>
                         <div class="col-4">
                            <input style="background-color:#c6c7c8;" class="col-4 btn-light btn  form-control"  type="Reset" value="إعادة ضبط"> 
                         </div>       
                         <div class="col-2"></div>
                    </div>
        </form>
              
  

 </table>
</div>

</body>
</html>