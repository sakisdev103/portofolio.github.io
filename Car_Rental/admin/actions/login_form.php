<?php
    session_start();
    include("../../dbconnect.php");
    extract($_POST);

    $qry = mysqli_query($conn , "SELECT * from admin where username = '$username' and password = '$password' ");
    if($qry->num_rows > 0){
        $row = $qry->fetch_assoc();
        $admin_id = $row['id'];
        $_SESSION["admin_id"] = $admin_id;
        $return = 1;
        echo json_encode(array("response" => $return,  "admin_id" => $admin_id));
    }else{
        $return = 0;
        echo json_encode(array("response" => $return,  "admin_id" => null));
    }
?>