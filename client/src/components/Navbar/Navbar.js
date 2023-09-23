import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import logo from "../../assets/logo.png"

function Navbar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (
        <navbar className="navbar">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="logo"/>
              </Link>
            </div>
            <div>
              {Auth.loggedIn() ? (
                <>
                  <span id="loggedin-name" >Hey there, {Auth.getProfile().data.username}!</span>
                  <button className="logout-btn" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="login-btn" onClick={logout}>
                    <Link to="/login">
                      Login
                    </Link>
                  </button>
                  <button className="signup-btn" onClick={logout}>
                    <Link to="/signup">
                      Signup
                    </Link>
                  </button>
                </>
              )}
            </div>
        </navbar>
      );
};

export default Navbar;