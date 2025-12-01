import React from "react";
import "../styles/Page.css";

function Signup({ close, switchToLogin }) {
  return (
    <>
      {/* Overlay */}
      <div className="account-overlay" onClick={close}></div>

      {/* Signup Modal */}
      <div className="signup-container">
        {/* <button className="close-btn" onClick={close}>×</button> */}
        <h2>Create Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account? <span onClick={switchToLogin}>Login</span>
        </p>
      </div>
    </>
  );
}

export default Signup;
