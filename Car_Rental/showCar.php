<?php
    //User id
    session_start();
    include("./dbconnect.php");
    //Setting Cart qty to zero
    $items_qty = 0;

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

    //Selected Car
    $id  = $_GET['id'];
    $qry = $conn->query("SELECT * FROM cars where id = $id");
    $row = $qry->fetch_assoc();
    $carId = $row['id'];

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
    <link rel="stylesheet" type="text/css" href="css/car.css">
    <title>Car Rental / <?php echo $row['name']?></title>
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
    <section class="car-preview">
        <div class="car-img">
            <img src="<?php echo $row['img'] ?>" alt="Car image">
        </div>
        <div class="car-details">
            <div class="car-specs align-left">
                <h1><?php echo $row['name']?></h1>
                <p><span><?php echo $row['price'] ?>$</span> per day</p>

            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis optio consequuntur est doloremque culpa eveniet repudiandae magnam aut libero neque porro perferendis voluptas fugiat facilis molestias at facere, id perspiciatis.
            </div>
            <div class="reserve-container">
              <button class="reserve-btn">Book It</button>
              <div class="book-container">
                <form action="add_to_cart.php" method="POST" class="book-form">
                    <input type="hidden" name="userId" value="<?php echo $user_id?>">
                    <input type="hidden" name="carId" value="<?php echo $carId?>">
                    <p>Days for rent </p><input type="number" class="book-input" name="days" id="form-days" value="1" > 
                    <p>Price / Day</p><input type="text" class="book-input" name="price" id="form-price" value="<?php echo $row['price']?>" readonly="">
                    <p>Final Price</p>
                    <p id="display-price"><?php echo $row['price']?></p>
                    <button type="submit" class="book-submit">Submit</button>
                </form>
              </div>
            </div>
        </div>
    </section>
    <script src="./js/app.js"></script>
</body>
</html>