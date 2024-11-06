<?php
require_once  'config.php';
$message ="";
if (isset($_POST['reg'])) {
    if (!empty($_POST['firstname']) &&  !empty($_POST['lastname']) && !empty($_POST['users'])  && !empty($_POST['email']) && !empty($_POST['password']) ) {
        $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
        $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
        $username = mysqli_real_escape_string($conn, $_POST['users']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = sha1(md5($_POST['password']));
        
        // Check if username or email already exists
        $check_query = "SELECT * FROM signup WHERE user = '$username' OR email = '$email'";
        $check_result = mysqli_query($conn, $check_query);
        
        if (mysqli_num_rows($check_result) > 0) {
            echo 'Username or email already exists.';
        } else {
            // Insert new user
            $sql = "INSERT INTO signup (firstname, lastname, user, email, password) VALUES ('$firstname', '$lastname', '$username', '$email', '$password')";
            $query = mysqli_query($conn, $sql);
            
            if ($query) {
                echo 'Sign Up Successful';
            } else {
                echo 'Unable to register';
            }
        }
    } else {
        $message = 'All fields are required';
    }
}



if (isset($_POST['login'])) {
    if (!empty($_POST['user']) && !empty($_POST['password'])) {
        $user = mysqli_real_escape_string($conn, $_POST['user']);
        $password = sha1(md5($_POST['password'])); 
        
        $sql = "SELECT * FROM `signup` WHERE user = '$user' AND password = '$password'";
        $result = mysqli_query($conn, $sql);
        
        if (mysqli_num_rows($result) == 1) {
            header("Location: home1.php");
            exit(); // Always exit after a header redirect
        } else {
            $message = 'Invalid username or password';
        }
    } else {
        $message = 'Username and Password are required';
    }
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/signup.css">

            <title>BioTech Login & Registration</title>
</head>

<body>
    <div class="wrapper">
        <nav class="nav">
            <div class="nav-logo">
                <p>BioTech</p>
            </div>
            <div class="nav-menu" id="navMenu">
                <ul>
                    <li><a href="signup.html" class="link active">Register</a></li>
                    <li><a href="home.php" class="link">Home</a></li>
                    <li><a href="contact.php" class="link">Contact</a></li>
                    <li><a href="emergency.php" class="link">Emergency</a></li>
                </ul>
            </div>
            <div class="nav-button">
                <button class="btn white-btn" id="loginBtn" onclick="login()">Sign In</button>
                <button class="btn" id="registerBtn" onclick="register()">Sign Up</button>
            </div>
            <div class="nav-menu-btn">
                <i class="bx bx-menu" onclick="myMenuFunction()"></i>
            </div>
        </nav>
    <!----------------------------- Form box ----------------------------------->    
        <div class="form-box">
            




            <!------------------- login form -------------------------->
            <div class="login-container" id="login">
                <h2><?php    echo $message ?></h2>
                <form action="" method="POST">
                <div class="top">
                    <span>Don't have an account? <a href="#" onclick="register()">Sign Up</a></span>
                    <header>Login</header>
                </div>
                <div class="input-box">
                    <input type="text" class="input-field" name= "user" placeholder="Username">
                    <i class="bx bx-user"></i>
                </div>
                <div class="input-box">
                    <input type="password" class="input-field" name="password" placeholder="Password">
                    <i class="bx bx-lock-alt"></i>
                </div>
                <div class="input-box">
                    <input type="submit" class="submit"  name="login" value="Sign In">
                </div>

                </form>

                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="login-check">
                        <label for="login-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label><a href="#">Forgot password?</a></label>
                    </div>
                </div>
            </div>






            <!------------------- registration form -------------------------->
            <div class="register-container" id="register">
                <div class="top">
                    <span>Have an account? <a href="#" onclick="login()">Login</a></span>
                    <header>Sign Up</header>
                </div>

                <div class="">
<?php    echo $message  ?>

                </div>
                <form action="" method="POST">
                <div class="two-forms">
                    <div class="input-box">
                        <input type="text" class="input-field" name="firstname" placeholder="Firstname">
                        <i class="bx bx-user"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" class="input-field"  name="lastname" placeholder="Lastname">
                        <i class="bx bx-user"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" class="input-field" name="users" placeholder="Username">
                        <i class="bx bx-user"></i>
                    </div>
                </div>
                <div class="input-box">
                    <input type="text" class="input-field"  name="email" placeholder="Email">
                    <i class="bx bx-envelope"></i>
                </div>
                <div class="input-box">
                    <input type="password" class="input-field" name="password" placeholder="Password">
                    <i class="bx bx-lock-alt"></i>
                </div>
                <div class="input-box">
                    <input type="submit" class="submit" name="reg" value="Register">
                </div>
                            </form>

                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="register-check">
                        <label for="register-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label><a href="contact.html">Terms & conditions</a></label>
                    </div>
                </div>
            </div>
        </div>
    </div>   



    
    <script>
       
       function myMenuFunction() {
        var i = document.getElementById("navMenu");
        if(i.className === "nav-menu") {
            i.className += " responsive";
        } else {
            i.className = "nav-menu";
        }
       }
     
    </script>
    <script>
        var a = document.getElementById("loginBtn");
        var b = document.getElementById("registerBtn");
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        function login() {
            x.style.left = "4px";
            y.style.right = "-520px";
            a.className += " white-btn";
            b.className = "btn";
            x.style.opacity = 1;
            y.style.opacity = 0;
        }
        function register() {
            x.style.left = "-510px";
            y.style.right = "5px";
            a.className = "btn";
            b.className += " white-btn";
            x.style.opacity = 0;
            y.style.opacity = 1;
        }
    </script>
</body>
</html>