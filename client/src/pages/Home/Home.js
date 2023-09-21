import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Results from '../Results/Results'
import Navbar from '../../components/Navbar/Navbar';

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
                  <Results />
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
        </div>
    );
};

export default Home;