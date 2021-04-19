import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

/*
  1. Add login and register event handlers
  2. Add email and password state variables
  3. Add useHistory to redirect to home page
  4. Add auth for sign and create user method to event handlers
  5. Pass event handlers to login and register button
  6. Pass eventer handlers and state variables to input box
  7. Add useEffect hook to pass user data to AppContext

  8. Command line -> firebase login -> firebase projects:list -> firebase init
  9. Select hosting -> use existing project -> type build for directory
  10. yes for single page, no for overwrite
  11. Type firebase deploy click hosting url
*/
const LoginPage = () => {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      }).catch(e => alert(e.message))
  }

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
              <div className="row">
                <label for="login-input">
                  <span className="label-sign">
                    <strong>Email or mobile phone number</strong>
                  </span>
                </label>
                <input name="login-input" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" autoFocus />
              </div>
              <div className='row'>
                <label for='password'><strong>Password</strong></label>
                <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='login-input'/>
              </div>
              <div className="row">
                <button onClick={handleLogin} className="sign-button" type="submit">
                  Continue
                </button>
              </div>
            </form>
            <span>
              By continuing, you agree to Amazon's{" "}
              <Link to='/'>Conditions of Use </Link> and
              <Link to='/'> Privacy Notice.</Link>
            </span>
          </div>
        </div>
        <div className="create-account">
          <span>New to Amazon?</span>
          <Link style={{ textDecoration: "none" }} to="/register">
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
