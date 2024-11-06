import React, { useState } from "react";
import HeaderComp from "../Components/Header.Comp";
import FooterComp from "../Components/Footer.Comp";

import cookies from 'js-cookies';

import axios from "axios";
import { Notify } from "../Components/Notify";
import { config } from "../Components/GeneralFunction";
import Swal from "sweetalert2";


const Signin =()=> {
const [user, setUser]=useState({
email_address:'',
password:''
})


const handleChange =(event)=>{
  let {name, value} = event.target
  setUser({...user, [name]:value})
  
  }


  const handleSubmit =(event)=>{
    event.preventDefault();
    

    Swal.fire({
      imageUrl: "/images/logo.png",
      imageHeight: 100,
      showConfirmButton: false,
    });


      const fd = new FormData();
      fd.append('email_address', user.email_address);
      fd.append('password', user.password);
    
      let url = 'http://solidrockschool.com.ng/api/people/applicant/login'
    
    axios.post(url, fd, config)
    .then(response =>{
      if(response.data.status==200){
    
        cookies.setItem('token', response.data.token)
        cookies.setItem('code', response.data.code)

        window.location.href='/profile';

        Notify({
          title:'Saved',
          message:response.data.message,
          type:'success'
        })
      }else{
        Notify({
          title:'error',
          message:response.data.message,
          type:'danger'
        })
      }
    })
  
}

  return (
    <div>
      <HeaderComp page={"signin"} />
      <section className="clearfix job-bg user-page">
        <div className="container text-center">
          <div className="user-account-content">
            <div className="user-account">
              <h2>User Login</h2>

              <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    required
                    value={user.email_address}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                    name="email_address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
              </form>

              <div className="user-option">
                <div className="checkbox pull-left">
                  <label for="logged">
                    <input type="checkbox" name="logged" id="logged" /> Keep me
                    logged in{" "}
                  </label>
                </div>
                <div className="pull-right forgot-password">
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary">
              Create a New Account
            </a>
          </div>
        </div>
      </section>
      <FooterComp />
    </div>
  );
}

export default Signin;
