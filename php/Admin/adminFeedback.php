<?php 
   session_start();

   if (isset($_SESSION['role'])) {
      if ($_SESSION['role'] == '2') {

       }else{
      
         header("Location:adminFeedback.php");
     }
   }else{
    
       header("Location: index.php");
      exit();
   }

?>
<!DOCTYPE html>
<html dir=rtl>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="managefeedback" content="width=device-width, initial-scale=1">
    <title>الملاحظات</title>
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
                    <h1 style="text-align:center;">قائمة الملاحظات</h1>
                    </div>
                    <div class="card-body">
<div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead style="text-align:center;font-size:20px;">
                                <tr>
                                    <th>العنوان</th>
                                    <th>الملاحظات</th>
                                    <th>الايميل</th>
                                    <th>عرض الملاحظة</th>
                                </tr>
                            </thead>
                            <tbody style="text-align:center;">
                                <?php
        include "../connection.php";
        $sql = "select * from feedback";
        $result = $conn->query($sql);
        if(!$result){
          die("Invalid query!");
        }
        while($row=$result->fetch_assoc()){
          if ($row['FeedbackType'] == 'classrooms') {
                           $FeedbackType = "الفصول الدراسية";
                       }elseif($row['FeedbackType'] == 'facilities') {
                         $FeedbackType = "المرافق";
                    }elseif($row['FeedbackType'] == 'buildings') {
                        $FeedbackType = "المباني";
                     }  
          echo "
                <tr>

        <th> $FeedbackType
        
        </th>
        <td>$row[FeedbackMessage]</td>
        <td>$row[Email]</td>
        <td>
                  <a class='btn btn-info btn-md' href='view.php?ID=$row[ID]'>عرض</a>
                  
                </td>
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>


