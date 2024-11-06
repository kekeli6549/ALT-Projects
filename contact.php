<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawsome.com/a076do5399.js"></script>
    <link rel="stylesheet" type="text/css" href="styles/contact.css">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap" rel="stylesheet">

    <title>Contact Page</title>
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

<br>
<div class="card-settings">
<h1>Contact Us</h1>

<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Biotech, we value communication and strive to provide easy access for our patients and visitors to reach out to us. Whether you have inquiries about our services, need to schedule an appointment, or simply want to provide feedback, this page is designed to connect you with our dedicated team.</p>
<br>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feel free to explore the various ways you can contact us, including our contact form, hospital address, phone and email contacts, social media links, emergency contacts, and an embedded map for easy navigation to our facility.
<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We look forward to hearing from you and assisting you in any way we can.

Thank you for choosing Biotech Medical Center for your healthcare needs.
</p>

<img src="img/services/hospitality2.jpeg" alt="Cardiology Image">
</div>

<div class="card-sett">
<div class="hospital-address">
    <h2>Hospital Address</h2>

    <p class="center">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BioTech Medical Services</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;123 Ado 900101,</p>
    <p  class="center">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Federal Capital Territory, Abuja, Nigeria</p>
</div>
</div>

<div class="card-sett">
    <div class="phone-email">
    <h2>Phone and Email</h2>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone 1: +234 902 852 1716</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone 2:  +234 915 100 3073</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: info@biotechmedicalcenter.com</p>
</div>
</div>

<div class="card-sett">
<div class="emergency-contacts">
    <h2>Emergency Contacts</h2>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emergency Hotline: 767</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emergency Hotline: 112</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Emergency 1: +234 809 752 0012</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Emergency 2: +234 809 751 9764</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Emergency 3: +234 915 100 3073</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Emergency 4: +234 802 525 8179</p>
    <p  class="center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Emergency 5: +234 703 820 0819</p>
</div>
</div>

<div class="card-sett">
<div class="map">
    <h2>Map</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.840801550489!2d7.5596834108842215!3d8.98679289103561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0efb8f44ab49%3A0xf6c04c0d9924ab92!2sSisters%20of%20Nativity%20Hospital!5e0!3m2!1sen!2sng!4v1707518579967!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>

<!--Contact Form Section-->

<section class="contact-section">
    <br>
    <h1>Contact Form</h1>
    <p>For general inquiries or feedback</p>
</section>

<section class="content-section">
    <div class="contact-form">
        <form>
            <div class="form-group">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div class="form-group">
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required>
            </div>

            <div class="form-group">
                <label for="message">Your Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit" class="button">Submit</button>
        </form>
    </div>
</section>

<!--Contact Form Section End-->

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