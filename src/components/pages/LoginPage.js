import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
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

        <div className="sign-in-box">
          <div className="form-container">
            <h2>Sign In</h2>
            <form>
              <label for="login-input">
                <span className="label-sign">
                  <strong>Email or mobile phone number</strong>
                </span>
              </label>
              <br></br>
              <input name="login-input" className="login-input" autoFocus />
              <br></br>
              <button className="sign-button" type="submit">
                Continue
              </button>
            </form>
            <span>
              By continuing, you agree to Amazon's{" "}
              <a href="#">Conditions of Use </a> and
              <a href="#"> Privacy Notice.</a>
            </span>
          </div>
        </div>
        <div className="create-account">
          <span>New to Amazon?</span>
          <Link to="/register">
            <button className="create-button" type="submit">
              Create your Amazon account
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
