import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"

function Navbar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      const [showMenu, setShowMenu] = useState(false)
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
                  <div className="desktopMenu">
                    <button className="nav-btn" onClick={() => {
                      document.getElementById('saved-searches').scrollIntoView({behavior: 'smooth'});
                      }}>
                      Saved Searches
                    </button>
                    <button className="logout-btn" onClick={logout}>
                      Logout
                    </button>
                  </div>
                  <img src={menu} alt="menu" className="mobMenu" onClick={() =>setShowMenu(!showMenu)}/>
                  <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                    <Link activeClass='active' className="listItem" onClick={() => {
                      document.getElementById('saved-searches').scrollIntoView({behavior: 'smooth'});
                      }}>Saved Searches</Link>
                    <Link activeClass='active' className="listItem" onClick={logout} >Logout</Link>
                  </div>
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