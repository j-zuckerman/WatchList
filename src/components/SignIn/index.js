import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase';
import { auth } from '../../firebase';
import styles from './Signin.module.css';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <div className={styles.container}>
      <form className="">
        <label htmlFor="userEmail" className="block">
          Email:
        </label>
        <input
          type="email"
          className=""
          name="userEmail"
          value={email}
          placeholder="Enter email"
          id="userEmail"
          onChange={(event) => onChangeHandler(event)}
        />
        <label htmlFor="userPassword" className="block">
          Password:
        </label>
        <input
          type="password"
          className=""
          name="userPassword"
          value={password}
          placeholder="Your Password"
          id="userPassword"
          onChange={(event) => onChangeHandler(event)}
        />
        <button
          className=""
          onClick={(event) => {
            signInWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Sign in
        </button>
      </form>
      <p className="">or</p>
      <button
        className=""
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};
