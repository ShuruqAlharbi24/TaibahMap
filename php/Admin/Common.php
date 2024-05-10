<?php
class Common
{
    public function getAllRecords($conn) {
        $query = "SELECT * FROM staff";
        $result = $conn->query($query) or die("Error in query1".$conn->error);
        return $result;
    }

    public function deleteRecordById($conn,$id) {
        $query = "DELETE FROM staff WHERE id='$id'";
        $result = $conn->query($query) or die("Error in query2".$conn->error);
        return $result;
    }
}