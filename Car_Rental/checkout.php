<?php
    session_start();
    include("./dbconnect.php");
    //Setting Cart qty to zero
    $items_qty = 0;
    
    //User id
    if(isset($_SESSION['user_id'])){
      $user_id = $_SESSION['user_id'];
      $qry = mysqli_query($conn, "SELECT email FROM users where id = '$user_id'");
      $row = $qry->fetch_assoc();
      $userEmail = $row['email'];

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
    <link rel="stylesheet" type="text/css" href="css/checkout.css">
    <title>Checkout</title>
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
    <section class="display-messages">

    </section>
    <section class="checkout-container">
        <h2>Checkout Form</h2>
        <form action="./send_order.php" method="POST" class="checkout-form">
            <input type="hidden" name="user_id" value="<?php echo $user_id;?>">
            <input type="text" name="fullname" id="" placeholder="Your name">
            <input type="email" name="email" id="" value="<?php echo $userEmail ?>" readonly="">
            <div>
                <h3>Please select a payment option</h3>
                <div class="payment">
                    <p>Cash</p>
                    <input type="radio" name="payment" id="cash" value="0">
                </div>
                <div class="payment">
                    <p>Card</p>
                    <input type="radio" name="payment" id="card" value="1">
                </div>
                <div class="card-container">
                    <p>If card is selected then a container will appear</p>
                    <p>Here we connect something like stripe, paypal via api to use their application to accept payments in our website</p>
                </div>
            </div>
            <button type="submit" class="checkout-submit">Rent it!</button>
        </form>
    </section>
    <script src="./js/app.js"></script>
</body>
</html>