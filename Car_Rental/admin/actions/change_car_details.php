<?php
    session_start();
    include("../../dbconnect.php");
    extract($_POST);

    $update = mysqli_query($conn, "UPDATE cars SET name = '$carName' , price = '$carPrice' where id = '$carId' ");
    if($update){
        $return = 1;
        echo json_encode($return);
    }
?>