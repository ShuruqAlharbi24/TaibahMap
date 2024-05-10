<?php
 include "../connection.php";
?>
<!doctype html>

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title>عرض الملاحظات</title>
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

.row{

    margin: 0px 50px;
}

body{
    background-image: url(https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?w=1060&t=st=1684432925~exp=1684433525~hmac=58e625acc1ba7fbd5aa20655adb8298a28a700710b24d7094e44b6c49fbbc3a3) ;
    font-family:'Tajawal', sans-seri;
    background-repeat:no-repeat;
    height: 100%;
    background-size: cover;
}

 </style>

</head>
<body>

    <div class="container mt-5">

        <div class="row" style="justify-content:center;">
            <div class="col-7">
                <div class="card">
                    <div class="card-header">
 <a href="adminFeedback.php" class="btn btn-danger float-right">رجوع</a>

<h2 style="text-align:center;">الملاحظة</h2>
    
 
                    </div>
                    <div class="card-body">

                        <?php
                        if(isset($_GET['ID']))
                        {
                            $ID = mysqli_real_escape_string($conn, $_GET['ID']);
                            $sql  = "SELECT FeedbackMessage FROM feedback WHERE ID='$ID' ";
                            $result  = mysqli_query($conn, $sql);

                            if(mysqli_num_rows($result ) > 0)
                            {
                                $row = mysqli_fetch_array($result );
                                ?>
                                    <div class="mb-5">
                                        <p class="col-md-14"style="text-align:center;font-size:23px;">
                                            <?=$row['FeedbackMessage'];?>
                                        </p>
                                    </div>
                                 <?php
                                        }
                                    }
                                    else
                                    {
                                        ?>
                                        <tr>
                                            <td colspan="3" ملاحظة لايوجد>   </td>
                                            
                                        </tr>
                                     <?php  
                                    }
                                  ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>