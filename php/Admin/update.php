<?php

include "../connection.php";


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {    

        if( !empty($_POST['FirstName']) && !empty($_POST['LastName']) && !empty($_POST['ID']) && !empty($_POST['password']) || !empty($_POST['Email'])){
           echo $id = $_POST['id'];
            // Select 
            $sql="select * from staff WHERE id='$id'";

            $res=mysqli_query($conn,$sql);
      
            if (mysqli_num_rows($res) > 0) {
             
                while($row = mysqli_fetch_array($res)){
             
                     $staffID=$row['staffID']; 
                  $FirstName = $row['FirstName'];
                   $LastName = $row['LastName'];
                    // $ID=$row['ID'];
                    $Role =   $row['role'];
                   $Email =  $row['Email'];
                     $pass = $row['password'];
            
                        if ($_POST['FirstName'] != $FirstName) {
                           $FirstNameUpdate = $_POST['FirstName'];
                        }else{
                            $FirstNameUpdate = $FirstName;
                        }

                        if ($_POST['LastName'] != $LastName) {
                           $LastNameUpdate = $_POST['LastName'];
                        }else{
                           $LastNameUpdate = $LastName;
                        }

                        if ($_POST['staffID'] != $staffID) {
                           $IDUpdate = $_POST['staffID'];
                        }else{
                            $IDUpdate = $staffID;
                        }

                        if ($_POST['Password'] != $pass) {
                           $passUpdate = $_POST['Password'];
                        }else{
                            $passUpdate = $pass;
                        }

                        if ($_POST['Email'] != $Email) {
                           $EmailUpdate = $_POST['Email'];
                        }else{
                           $EmailUpdate = $Email;
                        }
                        if ($_POST['role'] == '0') {

                            $RoleUpdate = '0';
                            
                        }elseif($_POST['role'] == '1') {

                            $RoleUpdate = '1';

                         }elseif($_POST['role'] == '2') {

                            $RoleUpdate = '2';

                         }else{

                           $RoleUpdate = $Role;
                         }

                       
                     $sql = "UPDATE staff SET FirstName='$FirstNameUpdate' , LastName='$LastNameUpdate' , password='$passUpdate' , 
                     Email='$EmailUpdate' , role = '$RoleUpdate', staffID='$IDUpdate'  WHERE id='$id' ";
                        if(mysqli_query($conn, $sql)){
                             echo '<script>alert(" تم تعديل الموظف بنجاح !")</script>';
                             echo '<script>window.location.href="ManageStaff.php";</script>';
                        } else {
                           echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
                         }

                }
              
             
            }else{
        
                echo "الموظف غير موجود";
            }
  

        }else{
            echo "لم يتم التعديل";
        }
    }

    