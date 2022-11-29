<?php
    session_start();
    include("../../dbconnect.php");
    extract($_POST);

    if($carAvailability == 1){
        $update = 0;
    }else{
        $update = 1;
    }
    $available = mysqli_query($conn, "UPDATE cars SET available = '$update' where id = '$carId'");
    if($available){
        $return = 1;
        echo json_encode(array("response" => $return,  "available" => $available, "carId" => $carId,));
    }

?>