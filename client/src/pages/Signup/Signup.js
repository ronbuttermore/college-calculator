import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import './Signup.css';

import Auth from '../../utils/auth';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/signup';

const Signup = () => {
  // const userRef = useRef();
  // const emailRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  // const [email, setEmail] = useState('');
  // const [validEmail, setValidEmail] = useState(false);
  // const [emailFocus, setEmailFocus] = useState(false);

  // const [pwd, setPwd] = useState('');
  // const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  // const [matchPwd, setMatchPwd] = useState('');
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  // const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //     // userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //     setValidName(USER_REGEX.test(user));
  // }, [user])

  // useEffect(() => {
  //     setValidEmail(EMAIL_REGEX.test(email));
  // }, [email])

  // useEffect(() => {
  //     setValidPwd(PWD_REGEX.test(pwd));
  //     setValidMatch(pwd === matchPwd);
  // }, [pwd, matchPwd])

  // useEffect(() => {
  //     setErrMsg('');
  // }, [user, pwd, matchPwd])

  // useEffect(() => {
  //     setErrMsg('');
  // }, [user, pwd, matchPwd])

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
    } catch(err) {
      // if (!err?.response) {
      //     setErrMsg ('No Server Response');
      // } else if (err.response.status === 409) {
      //     setErrMsg('Username Taken')
      // } else {
      //     setErrMsg('Registration Failed')
      // }
      // errRef.current.focus();
      console.error(err)
    }
  };

  return (
    <>
      {success ? (
        <section>
          <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
          </p>
        </section>
        ) : (
        <section id='signup-form-section'>
            <h1 className='signup-form-title'>Welcome!</h1>
            <form className='signup-form' onSubmit={handleFormSubmit}>
              <label htmlFor="username">
                Username:
                {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
              </label>
              <input
                className="form-input"
                type="text"
                name="username"
                id="username"
                // ref={userRef}
                // autoComplete="off"
                // onChange={(e) => setUser(e.target.value)}
                onChange={handleChange}
                value={formState.name}
                required
                // aria-invalid={validName ? "false" : "true"}
                // aria-describedby="uidnote"
                // onFocus={() => setUserFocus(true)}
                // onBlur={() => setUserFocus(false)}
              />
              {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p> */}

              <label htmlFor="email">
                Email:
                {/* <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} /> */}
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                id="email"
                // ref={emailRef}
                // autoComplete="off"
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleChange}
                value={formState.email}
                required
                // aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                // onFocus={() => setEmailFocus(true)}
                // onBlur={() => setEmailFocus(false)}
              />
              {/* <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must be a valid email address.
              </p> */}

              <label htmlFor="password">
                Password:
                {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                id="password"
                // onChange={(e) => setPwd(e.target.value)}
                onChange={handleChange}
                value={formState.password}
                required
                // aria-invalid={validPwd ? "false" : "true"}
                // aria-describedby="pwdnote"
                // onFocus={() => setPwdFocus(true)}
                // onBlur={() => setPwdFocus(false)}
              />
              {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
              </p> */}

              <label htmlFor="confirm_pwd">
                Confirm Password:
                {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
              </label>
              <input
                className="form-input"
                type="password"
                id="confirm_pwd"
                // onChange={(e) => setMatchPwd(e.target.value)}
                // onChange={handleChange}
                // value={matchPwd}
                // required
                // aria-invalid={validMatch ? "false" : "true"}
                // aria-describedby="confirmnote"
                // onFocus={() => setMatchFocus(true)}
                // onBlur={() => setMatchFocus(false)}
              />
              {/* <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p> */}

              <button 
              // disabled={!validName || !validPwd || !validMatch || !validEmail ? true : false} 
              type="submit">Sign Up</button>
            </form>
              <p className='already-in'>
                Already have an account?<br />
                <Link id='already-login-text' to="/login" className="line">
                Log In
                </Link>
              </p>

              {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
        </section>
      )}
      {error && (
        <div>
        {error.message}
        </div>
      )}
    </>
  );
};

export default Signup;
