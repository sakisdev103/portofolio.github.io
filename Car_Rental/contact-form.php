<?php
    session_start();
    include("./dbconnect.php");
    extract($_POST);

    $contact = mysqli_query($conn , "INSERT INTO contact (name , email , message) VALUES ('$fullname' , '$email' , '$message')");
    if($contact){
        $return = 1;
        echo json_encode($return);
    }
?>