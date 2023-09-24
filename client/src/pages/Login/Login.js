import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Login.css';

import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  

  return (
    <div id='login'>
        <div className='loginSection'>
        {data ? (
            <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
            </p>
        ) : (
            <section className='form-section'>
            <h4 className='form-title'>Login:</h4>
            <form className='form' onSubmit={handleFormSubmit}>
            <label htmlFor="email">
                Username:
            </label>
            <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
            />
            <label htmlFor="email">
                Password:
            </label>
            <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
            />
            <button
                type="submit"
            >
                Submit
            </button>
            </form>
            <p className='already-in'>
                Don't have an account yet?<br />
                <Link id='already-login-text' to="/signup" className="line">
                Sign Up
                </Link>
              </p>
            </section>
        )}

        {error && (
            <div>
            {error.message}
            </div>
        )}
        </div>
    </div>
  );
};

export default Login;
