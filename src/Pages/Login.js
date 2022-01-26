import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div class="wrapper">
          <div class="title-text">
            <div class="title login">Login Form</div>
            <div class="title signup">Signup Form</div>
          </div>
          <div class="form-container">
            <div class="slide-controls">
              <input type="radio" name="slide" id="login" checked />
              <input type="radio" name="slide" id="signup" />
              <label for="login" class="slide login">Login</label>
              <label for="signup" class="slide signup">Signup</label>
    
              <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
              <form action="#" class="login">
                <div class="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
    
                <div class="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div class="pass-link">
                </div>
                <div class="field button">
                  <div class="btn-layer"></div>
                  <Link to='/'>
                  <input type="submit" value="Login" />
                  </Link>
                </div>
 
              </form>
              <form action="#" class="signup">
                <div class="field">
                  <input type="text" placeholder="First Name" required />
                </div>
    
                <div class="field">
                  <input type="text" placeholder="Second Name" required />
                </div>
                <div class="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div class="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div class="field">
                  <input type="password" placeholder="Confirm password" required />
                </div>
    
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
    
                <div class="pass-link">
                  <a href="#">.</a>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Login
