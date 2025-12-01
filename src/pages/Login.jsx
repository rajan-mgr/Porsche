import React from "react";
import "../styles/Page.css";

function Login({ close, switchToSignup }) {
  return (
    <>
      {/* Overlay */}
      <div className="account-overlay" onClick={close}></div>

      {/* Login Modal */}
      <div className="login-container">
        {/* <button className="close-btn" onClick={close}>×</button> */}
        <h2>Login</h2>
        <form className="form-container">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have an account? <span onClick={switchToSignup}>Sign Up</span>
        </p>
      </div>
    </>
  );
}

export default Login;
