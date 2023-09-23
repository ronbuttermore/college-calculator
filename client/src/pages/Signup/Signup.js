import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import './Signup.css';

import Auth from '../../utils/auth';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
        <h4>Sign Up</h4>
        <div>
        {data ? (
            <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
            </p>
        ) : (
            <form onSubmit={handleFormSubmit}>
            <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
            />
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

export default Signup;
