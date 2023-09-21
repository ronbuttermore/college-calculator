import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Navbar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (
        <navbar>
            <div>
              <Link to="/">
                <h1>Homepage</h1>
              </Link>
            </div>
            <div>
              {Auth.loggedIn() ? (
                <>
                  <span>Hey there, {Auth.getProfile().data.username}!</span>
                  <button onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    Login
                  </Link>
                  <br />
                  <Link to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
        </navbar>
      );
};

export default Navbar;