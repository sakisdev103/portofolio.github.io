<?php
    session_start();
    include("./dbconnect.php");

    //Setting Cart qty to zero
    $items_qty = 0;

    if(isset($_SESSION['user_id'])){
        $user_id = $_SESSION['user_id'];
        $qry = mysqli_query($conn, "SELECT email FROM users where id = '$user_id'");
        $row = $qry->fetch_assoc();
        $userEmail = $row['email'];

        $qry = mysqli_query($conn, "SELECT * FROM cart where user_id = '$user_id'");
        $row = $qry->fetch_assoc();
        $days = $row['days'];
        $carId = $row['car_id'];

        $qry = mysqli_query($conn, "SELECT * FROM cars where id = '$carId'");
        $row = $qry->fetch_assoc();
        $carName = $row['name'];
        $carPrice = $row['price'];
        $carImg = $row['img'];
        
        $finalPrice = $days * $carPrice;

        //Cart Items
        $items_qty = 0;
        $qry = mysqli_query($conn, "SELECT * FROM cart where user_id = '$user_id' ");
        while($row = $qry->fetch_assoc()):
          $items_qty += $row['days'];
        endwhile; 
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
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/cart.css">
    <title></title>
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
          <a href="./index.php">Home</a>
        </li>
        <li>
          <a href="./index.php#about">About Us</a>
        </li>
        <li>
          <a href="./index.php#car-section">Car Listing</a>
        </li>
        <li>
          <a href="./index.php#contact">Contact</a>
        </li>
      </ul>
        <div class="nav-login">
        <?php if($items_qty < 1): ?>
          <a href="javascript:void(0)" id="cart">Cart</a>
        <?php else: ?>  
          <div class="cart-flex">
            <a href="./cart.php">Cart</a>
            <p><?php echo $items_qty?></p>
          </div>
        <?php endif;?>  
        <?php if(!isset($user_id)): ?>
          <a href="javascript:void(0)" id="login">Login</a>
        <?php else:?>
          <a href="javascript:void(0)" id="logOut"><?php echo $userEmail;?></a>  
        <?php endif;?>  
      </div>
    </header>
    <section class="cart-container">
        <div class="item-container">
            <div class="item-img">
                <img src="<?php echo $carImg?>" alt="">
            </div>
            <div>
                <div class="item-desc">
                    <h3><?php echo $carName?></h3>
                    <p><span><?php echo $finalPrice?>$</span></p>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptate veniam optio excepturi deleniti illum maxime quia temporibus alias dolor quo repudiandae eum quam voluptatem, ducimus enim veritatis molestias est.</p>
            </div>
        </div>
        <div class="checkout-btn-container">
          <button class="checkout-btn">Checkout</button>
        </div>
    </section>
    <script src="./js/app.js"></script>
</body>
</html>