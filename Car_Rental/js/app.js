$(document).ready(function(){
    //Navbar
    $(".nav-toggle").click(function(){
        $(".links").toggle("");
        $(".nav-login").toggle("");
    });

    //Cart

    $("#cart").click(function(){
        $(".display-messages").show().text('Your cart is empty').addClass("form-error");
        setTimeout(function(){ $(".display-messages").fadeOut(); },1000);
    });

    //Contact Form

    $(".contact-form").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: './contact-form.php',
            method: 'POST',
            data: $(this).serialize(),
            error:err=>{
                console.log(err)
            },    
            dataType: 'json',
            cache: false,
            success: function(data){
                resp = data;
                if(resp == 1 ){
                    $(".display-messages").show().text('Contact form submitted successfully').addClass("form-success"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },1000);
                    setTimeout(function(){window.location.reload()},2000);
                }else{
                    $(".display-messages").show().text('Failed to submit contact form, please try again').addClass("form-error"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },1000);
                    setTimeout(function(){window.location.reload()},2000);
                }
            }
        });
        this.reset();
    });


    //Login

    $("#login").click(function(){
        $(".modal").toggle("modal");
    });

    //Sign Up
    $("#sign-btn").click(function(){
        $(".login").hide();
        $(".sign-up").toggle("");
    });

    $("#login-btn").click(function(){
        $(".sign-up").hide();
        $(".login").toggle("");
    });

    //form validation for signing up

    $("#signUp").submit(function(e){
        e.preventDefault();
        let name = $("#form-name").val();
        let email = $("#form-email").val();
        let password = $("#form-password").val();
        let submit = $(".submit-form").val();
        $.ajax({
            type: 'POST',  
            url: './createAccount.php', 
            method: 'POST',
            data: { 
                name: name,
                email: email,
                password: password,
                submit : submit
            },
            success: function(resp){
                resp = $.parseJSON(resp);
                if(resp === 1){
                    $(".display-messages").show().text('User Created Successfully!').addClass("form-success"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },1000);
                    setTimeout(function(){window.location.reload()},2000);
                }else{
                    $(".display-messages").show().text('Email already exists').addClass("shadow-error"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },1000);
                    setTimeout(function(){window.location.reload()},2000);
                }
            },
            error: function(){
                $(".display-messages").text('Something went wrong.').addClass("form-error");
                setTimeout(function(){ $(".display-messages").hide(); $(".modal").fadeOut },2000);
            }
        });
        this.reset();
    });


    //form validation for logging in


    // $("#loginForm").submit(function(e){
    //     e.preventDefault();
    //     let name = $("#login-form-name").val();
    //     let email = $("#login-form-email").val();
    //     let password = $("#login-form-password").val();
    //     let submit = $("#login-form").val();
    //     $.ajax({
    //         type: 'POST',
    //         url: './login.php',
    //         method: 'POST',
    //         data: {
    //             name: name,
    //             email: email,
    //             password: password,
    //             submit: submit
    //         },
    //         dataType: 'json',
    //         cache: false,
    //         success: function(data){
    //             resp = $.parseJSON(data.response);
    //             if(resp === 1){
    //                 $(".display-messages").text('Successfully logged in!').addClass("form-success"); 
    //                 $("#login").html('<a href="javascript:void(0)" id="logOut"></a>');
    //                 $("#logOut").text(email);
    //                 setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
    //                 setTimeout(function(){ $(".modal").hide(); },4000);
    //             }else{
    //                 $(".display-messages").text('Email does not exist').addClass("form-error"); 
    //                 setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
    //                 setTimeout(function(){ $(".modal").hide(); },4000);
    //                 setTimeout(function(){window.location.reload()},6000);
    //             }
    //         },
    //         error: function(){
    //             $(".display-messages").text('Something went wrong.').addClass("form-error");
    //             setTimeout(function(){ $(".display-messages").hide; $(".modal").fadeOut },2000);
    //         },
    //     });
    //     this.reset();
    // });


    //form validation for loggin in UPDATED


    $('#loginForm').submit(function(e){
        e.preventDefault()
        $('#loginForm button[type="submit"]').attr('disabled',true).html('Logging in...');
        $.ajax({
          url:'./login.php',
          method:'POST',
          data:$(this).serialize(),
          error:err=>{
            console.log(err)
            $('#loginForm button[type="submit"]').removeAttr('disabled').html('Login');
            $(".display-messages").show().text('Something went wrong.').addClass("form-error");
            setTimeout(function(){ $(".display-messages").hide; $(".modal").fadeOut },2000);
          },
          dataType: 'json',
          cache: false,
          success:function(data){
            resp = $.parseJSON(data.response);
            if(resp == 1){
                $(".display-messages").show().text('Successfully logged in!').addClass("form-success"); 
                setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
                setTimeout(function(){window.location.reload()}, 3000);
            }else{
                $(".display-messages").show().text('Email does not exist').addClass("form-error"); 
                setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
                setTimeout(function(){window.location.reload()},3000);
            }
          }
        });
        this.reset();
      });


    //Logging Out

      $("#logOut").click(function(){
        $.ajax({
            url: './logOut.php',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            caches: false,
            error:err=>{
                console.log(err)
            },
            success: function(data){
                resp = $.parseJSON(data);
                if(resp == 1){
                    $(".display-messages").show().text('Successfully logged out!').addClass("form-success");
                    setTimeout(function(){ $(".display-messages").fadeOut(); }, 1000);
                    setTimeout(function(){window.location.reload()}, 2000);
                }else{
                    $(".display-messages").show().text('Something went wrong.').addClass("form-error");
                    setTimeout(function(){ $(".display-messages").fadeOut(); }, 1000);
                    setTimeout(function(){window.location.reload()}, 2000);
                }
            }
        });
      });

    //Add to Cart

    $(".reserve-btn").click(function(){
        $(".book-container").show("");
    });

    $("#form-days").change(function(){
        days = $("#form-days").val();
        price = $("#form-price").val();
        if(days <= 1){
            days = 1;
            $("#form-days").val(days);
        }
        finalPrice = days * price;
        $("#display-price").text(finalPrice);
    });

    
    $(".book-form").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: "./add_to_cart.php",
            method: 'POST',
            data: $(this).serialize(),
            error: err=>{
                console.log(err);
            },
            dataType: 'json',
            cache: false,
            success: function(data){
                resp = $.parseJSON(data);
                if(resp == 1){
                    $(".display-messages").show().text('Successfully added to cart!').addClass("form-success"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
                    setTimeout(function(){window.location.reload()}, 3000);
                }else{
                    $(".display-messages").show().text('Failed to add to cart').addClass("form-error"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
                    setTimeout(function(){window.location.reload()}, 3000);
                }
            },    
        });
        this.reset();
    });


    //Checkout

    $(".checkout-btn").click(function(){
        window.location.replace("./checkout.php");
    });

    $("#card").click(function(){
        $(".card-container").show("");
    });

    $("#cash").click(function(){
        $(".card-container").hide("");
    });

    //Send Order

    $(".checkout-form").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: './send_order.php',
            method: 'POST',
            data: $(this).serialize(),
            error: err=>{
                console.log(err);
            },
            dataType: 'json',
            cache: false,
            success: function(data){
                resp = $.parseJSON(data);
                if(resp == 1){
                    $(".display-messages").show().text('Successfully placed order!').addClass("form-success"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
                    setTimeout(function(){window.location.replace("./index.php")}, 3000);
                }else{
                    $(".display-messages").show().text('Failed to place order').addClass("form-error"); 
                    setTimeout(function(){ $(".display-messages").fadeOut(); },2000);
                    setTimeout(function(){window.location.reload()}, 3000);
                }
            }
        });
        this.reset();
    });

    //Admin Panel

    $(".admin-form").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: './actions/login_form.php',
            method: 'POST',
            data: $(this).serialize(),
            error: err=>{
                console.log(err);
            },
            dataType: 'json',
            cache: false,
            success: function(data){
                resp = $.parseJSON(data.response);
                adminId = $.parseJSON(data.admin_id);
                if(resp == 1){
                    alert("Successfully logged in");
                    setTimeout(function(){window.location.replace("./home.php")}, 2000);
                }else{
                    alert("Failed to log in");
                    setTimeout(function(){window.location.reload()}, 2000);
                }
            }
        });
        this.reset();
    });

    //Admin log out

    $("#admin-logOut").click(function(){
        $.ajax({
            url: './actions/admin_logout.php',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            caches: false,
            error:err=>{
                console.log(err)
            },
            success: function(data){
                resp = data;
                if(resp == 1){
                    $(".display-messages").show().text('Successfully logged out!').addClass("form-success");
                    setTimeout(function(){ $(".display-messages").fadeOut(); }, 1000);
                    setTimeout(function(){location.reload()}, 2000);
                }else{
                    $(".display-messages").show().text('Failed to log out.').addClass("form-error");
                    setTimeout(function(){ $(".display-messages").fadeOut(); }, 1000);
                }
            }
        });

    });

    //Car List

    $(".changeAvailability").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: './actions/available_car.php',
            method: 'POST',
            data: $(this).serialize(),
            error: err=>{
                console.log(err);
            },
            dataType: 'json',
            cache: false,
            success: function(data){
                resp = data.response;
                available = data.available;
                carId = data.carId;
                if(resp == 1){
                    if(available == 1){
                        location.reload()
                    }else{
                        location.reload()
                    }
                }else{
                    $(".display-messages").show().text("Failed to change availability").addClass("form-error");                 
                }
            }
        });
        this.reset();
    });

    //Change Car Details

    $(".admin-car-change").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: './actions/change_car_details.php',
            method: 'POST',
            data: $(this).serialize(),
            error: err=>{
                console.log(err);
            },
            dataType: 'json',
            cache: false,
            success: function(data){
                resp = data;
                if(resp == 1){
                    $(".display-messages").show().text("Changed car details successfully").addClass("form-success");
                    setTimeout(function(){location.reload()}, 2000);
                }else{
                    alert("Failed to change car details");
                }
            }
        });

    });


});





