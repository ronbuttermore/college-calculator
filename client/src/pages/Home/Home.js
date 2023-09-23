import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Results from '../Results/Results'
import Navbar from '../../components/Navbar/Navbar';
import Welcome from '../../components/Welcome/Welcome';
import SavedSearch from '../../components/SavedSearch/SavedSearch';

function Home() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <div>
            <div>
              {Auth.loggedIn() ? (
                <>
                  <Navbar />
                  <Welcome />
                  <Results />
                  <SavedSearch />
                </>
              ) : (
                <>
                <p>Logo here</p>
                <p>Banner with buttons to login and signup</p>
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
        </div>
    );
};

export default Home;