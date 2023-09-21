import React from 'react';
import LoginForm from '../../components/Forms/LoginForm'
import './Login.css';

function Login() {
    return (
        <div>
            <h2>This will be the login page</h2>
            <LoginForm />
            <p>button here to submit and continue to results page</p>
            <button>Submit</button>
        </div>
    );
};

export default Login;