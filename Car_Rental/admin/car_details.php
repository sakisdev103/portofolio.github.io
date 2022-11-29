<?php
    session_start();
    include("../dbconnect.php");
    $car_id = $_GET['id'];
    $qry = mysqli_query($conn, "SELECT * FROM cars where id = '$car_id'");
    $row = $qry->fetch_assoc();
    $car_name = $row['name'];
    $car_price = $row['price'];
    $car_img = $row['img'];
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
    <title>Car List</title>
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
      <div class="admin-car">
        <form action="./actions/change_car_details.php" method="POST" class="admin-car-change">
          <input type="hidden" name="carId" value="<?php echo $car_id ?>">
          <p>Car</p> <input type="text" name="carName"  value="<?php echo $car_name?>">
          <p>Price</p> <input type="text" name="carPrice"  value="<?php echo $car_price?>">
          <!-- <p>Import new image?</p> <input type="file" name="img"> -->         
          <div class="admin-car-change-submit">
            <button type="submit">Submit Changes</button>
          </div>
        </form>
      </div>
    </section>

    <script src="../js/app.js"></script>
</body>
</html>