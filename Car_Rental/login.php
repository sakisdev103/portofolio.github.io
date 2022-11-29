<?php
    session_start();
    include ("./dbconnect.php");
    extract($_POST);
    $qry = mysqli_query($conn,"SELECT * FROM users where email = '$email' ");
    if($qry->num_rows > 0){
        $qry = mysqli_query($conn , "SELECT * FROM users where email = '$email'");
        $row = $qry->fetch_assoc();
        $user_id = $row['id'];
        $_SESSION["user_id"] = $user_id;
        $ip = isset($_SERVER['HTTP_CLIENT_IP']) ? $_SERVER['HTTP_CLIENT_IP'] : (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);
        $updateCart = mysqli_query($conn, "UPDATE cart set user_id = '$user_id' where client_ip ='$ip' ");
        $return = 1;
        echo json_encode(array("response" => $return,  "user_id" => $user_id));
    }else{
        $return = 0;
        echo json_encode(array("response" => $return, "user_id" => null));
    }

?>