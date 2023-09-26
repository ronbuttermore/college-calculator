import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'

function Welcome() {
    return (
        <section className="welcome-section">
            <p className='intro-text'>Your one stop to compare your tuition to your loan</p>
            <p className='desc-text'>Factor your college, degree, tuition, projected loan, and more for visual data that can help you decide between your eduation options. <br/> All for free.</p>
            <button className="login-btn">
                <Link id='login-text' to="/login">
                    Log In
                </Link>
            </button>
            <p className='sign-up'>
                Or &nbsp;
                <Link to="/signup" className="line" id='signup-link'>
                  Sign Up
                  </Link>
                  &nbsp; to continue
            </p>
        </section>
    );
};

export default Welcome;