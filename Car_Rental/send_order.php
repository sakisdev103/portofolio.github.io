<?php
    session_start();
    include("./dbconnect.php");
    extract($_POST);

    $order = mysqli_query($conn , "INSERT INTO orders (fullname , email , payment_method) VALUES ('$fullname' , '$email' , '$payment')");
    if($order){
        $delete = mysqli_query($conn , "DELETE FROM cart where user_id = '$user_id'");
        if($delete){
            $return = 1;
            echo json_encode($return);
        }
    }
?>