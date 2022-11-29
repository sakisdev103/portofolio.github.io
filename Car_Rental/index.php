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

    //Cart Items
    $items_qty = 0;
    $qry = mysqli_query($conn, "SELECT * FROM cart where user_id = '$user_id' ");
    while($row = $qry->fetch_assoc()):
      $items_qty += $row['days'];
    endwhile; 
  }
?>  
<!DOCTYPE html>
<html lang="en"login>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <title>Car Rental</title>
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
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#car-section">Car Listing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
    <section class="modal">
      <div class="login">
        <h2>Login</h2>
        <form action="./login.php" method="POST" class="form" id="loginForm">
          <input id="login-form-email" type="email" name="email" placeholder="Email" required="">
          <input id="login-form-password" type="password" name="password" placeholder="Password" required="">
          <br>
          <button type="submit" name="submit" class="submit-form" id="login-form">Login Now</button>
        </form>
        <p class="form-message"></p>
        <p>Don't have an account? <a href="javascript:void(0)" id="sign-btn">Sign Up</a></p>
      </div>
      <div class="sign-up">
        <h2>Create Account</h2>
        <form action="./createAccount.php" method="POST" class="form" id="signUp">
          <input id="form-email" type="email" name="email" placeholder="Email" required="">
          <input id="form-password" type="password" name="password" placeholder="Password" required="">
          <br>
          <button type="submit" name="submit" class="submit-form">Sign Up</button>
        </form>
        <p class="form-message"></p>
        <p>You have an account? <a href="javascript:void(0)" id="login-btn">Login Now!</a></p>
      </div>
    </section>
    <main class="main">
        <div class="main-paragraph">
            <h2>FIND THE RIGHT CAR FOR YOU</h2>
            <p>We have a big variety of cars to choose from.</p>
            <button class="read-more">Read More </button>
        </div>
    </main>
    <section class="about-us" id="about">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laborum, at exercitationem veritatis, dolore quibusdam hic voluptates culpa officiis magnam tenetur soluta aperiam, iusto temporibus laudantium earum maiores cumque fugit1</p>
    </section>
    <section class="car-section" id="car-section">
        <h2>Find the best car for you</h2>
        <div class="cars-container">
            <?php 
                include("./dbconnect.php"); 
                $qry = $conn->query("SELECT * FROM cars");
                while($row = $qry->fetch_assoc()):
            ?>
            <div class="car-card">
                <img src="<?php echo $row['img'] ?>" alt="Car Image">
                <div class="car-specs">
                    <h3><?php echo $row['name'] ?></h3>
                    <p><span><?php echo $row['price'] ?>$</span> per day</p>
                </div>
                <a href="showCar.php?id=<?php echo $row['id'] ?>" class="add">Reserve</a>               
            </div>
            <?php endwhile;?>
        </div>
    </section>
    <section class="contact" id="contact">
        <h1>Contact Form</h1>
        <form action="contact-form.php" method="POST" class="contact-form">
          <div class="contact-inputs">
            <input type="text" name="fullname" placeholder="Fullname">
            <input type="email" name="email" placeholder="Email">
          </div>
          <textarea name="message" cols="25" rows="3" placeholder="Message"></textarea>
          <button type="submit" class="contact-form-btn">Submit</button>
        </form>
    </section>

    <script src="./js/app.js"></script>

</body>
</html>