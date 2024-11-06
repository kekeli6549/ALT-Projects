<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawsome.com/a076do5399.js"></script>
    <link rel="stylesheet" type="text/css" href="styles/emergency.css">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap" rel="stylesheet">

    <title>Emergency Services</title>
</head>
<body>
   
<!--Header-->

<header >
    <a href="#" class="logo"><i class="ri-hospital-fill"></i><span>BioTech</span></a>
<ul class="navbar">
<li><a href="home.php" class="active">Home</a></li>
<li><a href="about.php">About</a></li>
<li><a href="services.php">Services</a></li>

<div class="dropdown">
    <li><a href="department.php">Departments</a></li>
    <div class="dropdown-content">
       <a href="patient.php">Patient</a>
    </div>
   </div>
   
<li><a href="contact.php">Contact</a></li>
<li><a href="emergency.php">Emergency </a></li> 
</ul>

<div class="search-container">
    <input type="text" class="search-bar" placeholder="Search...">
</div>

<div class="main">
<a href="signup.php" class="user"  ><i class="ri-login-box-fill"></i>Sign In</a>
    <a href="signup.php" class="reg" ><i class="ri-user-fill"></i>Sign Up</a>

<div class="bx bx-menu" id="menu-icon"></div>


</div>

</header>

<div class="container">
    <h1>Emergency Response</h1>

    <p>In case of emergencies, follow the steps below:</p>

    <div class="emergency-steps">
        <div class="emergency-step">
            <h2>Step 1: Assess the Situation</h2>
            <p>Stay calm and assess the situation. Determine the type and severity of the emergency.</p>
        </div>
        <div class="emergency-step">
            <h2>Step 2: Call Emergency Services</h2>
            <p>Dial the emergency hotline immediately and provide details about the situation.</p>
        </div>
        <div class="emergency-step">
            <h2>Step 3: Provide First Aid</h2>
            <p>If you have first aid training, administer necessary first aid treatments while waiting for help.</p>
        </div>
        <div class="emergency-step">
            <h2>Step 4: Follow Instructions</h2>
            <p>Follow any instructions provided by emergency responders or hospital staff.</p>
        </div>
    </div>

    <div class="emergency-hotline">
        <p>Emergency Hotline: 767</p>
    </div>
</div>

<footer>
    <div class="footer-area">
          <div class="fmain">
        <div class="footer">
            <div class="single-footer">
                <h4>  About Us  </h4>
                <p>Biotech is a leading provider of cutting-edge healthcare solutions committed to enhancing lives through innovation and excellence. With a dedicated team of experts, state-of-the-art facilities, and a patient-centric approach, we redefine healthcare standards.</p>
                <div class="footer-social">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        <div class="single-footer">
            <h4>Main Menu</h4>
            <ul>
                <li ><a href="home.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Home</a></li>
                <li ><a href="about.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; About Us</a></li>
                <li ><a href="services.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Services</a></li>
                <li ><a href="department.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Departments</a></li>
                <li ><a href="patient.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Patient</a></li>
                <li ><a href="contact.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Contact</a></li>
                <li ><a href="emergency.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Emergency</a></li>
            </ul>
        </div>
             <div class="single-footer">
            <h4>Quick Links</h4>
            <ul>
                <li ><a href="contact.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Privacy Policy</a></li>
                <li ><a href="contact.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Terms & Conditions</a></li>
                <li ><a href="contact.php"><i class="fa-solid fa-chevron-right"></i>&nbsp; Disclaimer</a></li>
            </ul>
          </div>   
            <div class="single-footer">
            <h4>Contact Us</h4>
            <ul>
                <li ><a href=""><i class="fa-solid fa-location-dot"></i>&nbsp; &nbsp;18 Archbishop L. B Kawas St, Ado 900101, Federal Capital Territory</a></li>
               
                <li ><a href=""><i class="fa-solid fa-phone"></i>&nbsp; +234 9028521716</a></li>
                <li ><a href=""><i class="fa-regular fa-envelope"></i> ahiavekekeli13@gmail.com</a></li>
            </ul>
         </div>   
            </div>
             <div class="copy">
                <p>&copy;  2024 BioTech Medical Serivces All rights reserved</p>
            </div>
    </div>
</div>
</footer>
    <!--javaScript link -->
    <script  type ="text/javascript" src="scripts/home.js"></script>
</body>
</html>