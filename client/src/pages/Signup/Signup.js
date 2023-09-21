import React from 'react';
import './Signup.css';
import SignupForm from '../../components/Forms/SignupForm';

function Signup() {
    return (
        <div>
            <h2>This will be the signup page</h2>
            <SignupForm />
            <p>button here to submit and continue to results page</p>
            <button>Submit</button>
        </div>
    );
};

export default Signup;