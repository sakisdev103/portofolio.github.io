<?php
    session_start();
    
    if(isset($_SESSION['admin_id'])){
        header('location: ./home.php');
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Car Listing</a>
        </li>
        <li>
          <a href="#">Contact list</a>
        </li>
      </ul>
        <div class="nav-login"> 
        <?php if(!isset($admin_id)): ?>
          <a href="javascript:void(0)" id="login">Login</a>
        <?php else:?>
          <a href="javascript:void(0)" id="logOut"><?php echo $username;?></a>  
        <?php endif;?>  
      </div>
    </header>
    <section class="admin-login">
        <h2>Admin login</h2>
        <form action="" class="admin-form">
            <input type="text" name="username" id="" placeholder="username">
            <input type="password" name="password" id="" placeholder="password">
            <button type="submit" name="submit" class="admin-submit">Login</button>
        </form>
    </section>

    <script src="../js/app.js"></script>
</body>
</html>