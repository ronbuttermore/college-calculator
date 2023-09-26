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
        <div className="navbar">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="logo"/>
              </Link>
            </div>
            <div>
              {Auth.loggedIn() ? (
                <>
                  <button className="logout-btn" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>

                </>
              )}
            </div>
        </div>
      );
};

export default Navbar;