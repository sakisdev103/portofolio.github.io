<?php
  session_start();
  include("../dbconnect.php");

  if(isset($_SESSION['admin_id'])){
    $admin_id = $_SESSION['admin_id'];
    $qry = mysqli_query($conn, "SELECT * FROM admin where id = '$admin_id' ");
    $row = $qry->fetch_assoc();
    $username = $row['username'];
  }else{
    header('location: ./login.php');
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="../css/styles.css">
    <title>Car Rental / Admin</title>
</head>
<body>
    <header class="header">
      <div class="nav-center">
      <div class="nav-header">
        <img src="../images/logo.svg" class="logo" alt="logo" />
        <button class="nav-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <ul class="links">
        <li>
          <a href="./home.php">Home</a>
        </li>
        <li>
          <a href="./car_list.php">Car Listing</a>
        </li>
        <li>
          <a href="./contact_list.php">Contact list</a>
        </li>
      </ul>
        <div class="nav-login"> 
        <?php if(!isset($admin_id)): ?>
          <a href="javascript:void(0)" id="admin-login">Login</a>
        <?php else:?>
          <a href="javascript:void(0)" id="admin-logOut"><?php echo $username;?></a>  
        <?php endif;?>  
      </div>
    </header>
    <section class="display-messages">

    </section>
    <section class="admin-panel">
      <h2>Simple Admin Panel</h2>
      <p>Here will be displayed many graphs and informations about sales, customers, orders, employees etc.</p>
      
    </section>

    <script src="../js/app.js"></script>
</body>
</html>
