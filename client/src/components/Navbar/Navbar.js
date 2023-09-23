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
            {Auth.loggedIn() ? (
              <>
                <p>Logo will go here</p>
                <p>SavedSearches button?</p>
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