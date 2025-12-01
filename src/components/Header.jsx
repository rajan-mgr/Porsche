import React, { useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const openSignup = () => {
    setAccountOpen(true);
    setShowLogin(false);
  };
  const openLogin = () => {
    setAccountOpen(true);
    setShowLogin(true);
  };

  return (
    <>
      {/* HEADER */}
      <header className="header-container">
        <div className="header-content">
          <button onClick={toggleSidebar} className="ham-btn">
            <FontAwesomeIcon icon={faBars} size="lg" />
            <span className="menu-txt">Menu</span>
          </button>

          <div className="header-title">
            <h1>PORSCHE</h1>
          </div>

          <button className="user-btn" onClick={openSignup}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
        </div>
      </header>

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#cars-section">Models</a>
          </li>
        </ul>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          ×
        </button>
      </div>

      {/* ACCOUNT MODAL */}
      {accountOpen && (
        showLogin ? (
          <Login
            close={() => setAccountOpen(false)}
            switchToSignup={() => setShowLogin(false)}
          />
        ) : (
          <Signup
            close={() => setAccountOpen(false)}
            switchToLogin={() => setShowLogin(true)}
          />
        )
      )}
    </>
  );
}

export default Header;
