<?php 
   session_start();

   if (isset($_SESSION['role'])) {
      if ($_SESSION['role'] == '2') {

       }else{
      
         header("Location:ManageStaff.php");
     }
   }else{
    
       header("Location: index.php");
      exit();
   }

?>
<!DOCTYPE html>
<html dir=rtl>

<head>
       <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet">

    <title>إدارة الموظفين</title>
  </head>
  <style>
    body{
      background-image: url(https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?w=1060&t=st=1684432925~exp=1684433525~hmac=58e625acc1ba7fbd5aa20655adb8298a28a700710b24d7094e44b6c49fbbc3a3) ;
    font-family:'Tajawal', sans-seri;
    background-repeat:no-repeat;
    height: 100%;
    background-size: cover;
    }
  </style>
  <body>

   
  
   <div class="container mt-4">

        

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                   
 <a href="home.php" class="btn btn-danger float-right">رجوع</a>
                    <h1 class="text-secondry" style="text-align:center;">إدارة الموظفين</h1>
                   <a href="addStaff.php" class="btn btn-info btn-md pull-right"><i class="fa fa-plus"></i> إضافة موظف جديد</a>
                    </div>
                    <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">

                             <thead class="text-secondry;">
                                <tr>
                                <th style="text-align:center;"> # </th>
                       <th style="text-align:center;">الإسم الأول  </th>
                       <th style="text-align:center;"> الإسم الأخير</th> 
                      <th style="text-align:center;"> الرقم الوظيفي </th> 
                        <th style="text-align:center;"> الوظيفة </th> 
                        <th style="text-align:center;">كلمةالمرور</th>
                        <th style="text-align:center;">الإيميل</th>
                        <th style="text-align:center;">تعديل البيانات</th>
                        <th style="text-align:center;">حذف الموظف</th>
                            </tr>
                              </thead>
 <tbody style="text-align:center;">

   <?php
        include '../connection.php';
        $sql = "select * from staff";
        $result = $conn->query($sql);
        if(!$result){
          die("Invalid query!");
        }
        while($row=$result->fetch_assoc()){

            if ($row['role'] == '0') {
                $Role = "عضو هيئة التدريس";
            }elseif($row['role'] == '1') {
                $Role = "مدير قاعات";
            }elseif($row['role'] == '2') {
                $Role = "مسوؤل";
            }

          echo "
          
                <tr>
                <th>$row[id]</th>
        <td>$row[FirstName]</td>
        <td>$row[LastName]</td>
        <td>$row[staffID]</td>
        <td>$Role</td>
        <td>$row[password]</td>
        <td>$row[Email]</td>
        <td>
        <div class='btn-group'>

           <a class='btn btn-secondary' href='EditStaff.php?id=$row[id]'>تعديل</a> </td>
              <td>
       
      
       <a class='btn btn-danger' href='DeleteStaff.php?id=$row[id]'>حذف</a> </td>
                    
              </div>
      </tr>
   
      ";
        }
      ?>

                            
                            </tbody>
                        </table>
</div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</body>
</html>
