
<?php
include '../connection.php';
include_once "Common.php";
if (isset($_GET['id'])){
    $id = $_GET['id'];
    $common = new Common();
    $delete = $common->deleteRecordById($conn,$id);
    if ($delete){
        echo '<script>alert(" تم حذف الموظف بنجاح !")</script>';
        echo '<script>window.location.href="ManageStaff.php";</script>';
    }
}