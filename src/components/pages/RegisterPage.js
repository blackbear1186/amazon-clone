import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="logo-container">
        <Link to="/">
          <div className="login-bx">
            <img
              className="login-logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
              alt="amazon"
            ></img>
          </div>
        </Link>

        <div className="sign-up-box">
          <div className="form-container">
            <h2>Create account</h2>
            <form>
              <div className="row">
                <label for="name">
                  <strong>Your name</strong>
                </label>
                <input id="name" className="login-input" autoFocus />
              </div>
              <div className="row">
                <label for="name">
                  <strong>Email</strong>
                </label>
                <input id="name" className="login-input" />
              </div>
              <div className="row">
                <label for="name">
                  <strong>Password</strong>
                </label>
                <input
                  id="name"
                  className="login-input"
                  placeholder="At least 6 characters"
                />
                <span>Passwords must be at least 6 characters</span>
              </div>
              <div className="row">
                <label for="name">
                  <strong>Re-enter password</strong>
                </label>
                <input id="name" className="login-input" />
              </div>
              <div className="row">
                <button className="register-button" type="submit">
                  Create your Amazon account
                </button>
              </div>
              <div className="row">
                <span>
                  By continuing, you agree to Amazon's{" "}
                  <a href=" ">Conditions of Use </a> and
                  <a href=" "> Privacy Notice.</a>
                </span>
              </div>
            </form>
            <div className="row">
              <span>
                Already have an account?<Link style={{textDecoration: 'none'}} to="/login"> Sign-In </Link>
              </span>
              <br></br>
              <span>
                Purchase for work? <Link style={{textDecoration: 'none'}} to="/">Create a business account</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
