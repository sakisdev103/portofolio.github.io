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
      <table class="admin-table">
        <tr>
            <th>Car</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
        </tr>
        <?php
            session_start();
            include ("../dbconnect.php");
            $qry = mysqli_query($conn , "SELECT * FROM cars");
            while($row = $qry->fetch_assoc()):
                $carId = $row['id'];
                $carAvailable = $row['available'];
                if($row['available'] == 1){
                    $available = "available";
                }else{
                    $available = "not available";
                }
        ?>
        <tr>
          <th><?php echo $row['name']?></th>
          <th><?php echo $row['price']?></th>
          <th>
            <form action="" method="" class="changeAvailability">
                <input type="hidden" name="carId" value="<?php echo $carId?>">
                <input type="hidden" name="carAvailability" value="<?php echo $carAvailable?>">
                <?php if($carAvailable == 1):?>
                    <button type="submit" class="btn-available available"><?php echo $available?></button>
                <?php else:?>
                    <button type="submit" class="btn-available not-available"><?php echo $available?></button>
                <?php endif;?>    
            </form>
          </th>
          <th>
            <a href="./car_details.php?id=<?php echo $carId?>" class="settings"><i class="fa-solid fa-gear"></i></a>
          </th>
        </tr>
        <?php endwhile;?>
      </table>
    </section>

    <script src="../js/app.js"></script>
</body>
</html>