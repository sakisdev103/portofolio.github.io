<?php
    session_start();
    include("./dbconnect.php");
    extract($_POST);
    // $finalPrice = $days * 80;
    // $qry = mysqli_query($conn, "SELECT * FROM cars where id = '$carid' ");
    // $row = $qry->fetch_assoc();
    // $carName = $row['name'];
    // $carImg = $row['img'];

    $insert = mysqli_query($conn, "INSERT INTO cart (user_id , car_id , days) VALUES('$userId' , '$carId', '$days') ");
    if($insert){
        $return = 1;
        echo json_encode($return);
    }
?>