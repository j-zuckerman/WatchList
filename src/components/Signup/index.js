import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle, generateUserDocument } from '../../firebase';
import styles from './Signup.module.css';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      console.log(error);
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };

  return (
    <div className={styles.container}>
      <form className="form">
        <label htmlFor="displayName">Display Name:</label>
        <input
          type="text"
          className=" "
          name="displayName"
          value={displayName}
          placeholder="Enter name"
          id="displayName"
          onChange={(event) => onChangeHandler(event)}
        />
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          className=""
          name="userEmail"
          value={email}
          placeholder="Enter email"
          id="userEmail"
          onChange={(event) => onChangeHandler(event)}
        />
        <label htmlFor="userPassword">Password:</label>
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
          className="btn"
          onClick={(event) => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Sign up
        </button>
      </form>
      <p>OR</p>
      <button
        className="btn_google"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign In with Google
      </button>
      <p className="">
        Already have an account?
        <Link to="/login">Sign in here</Link>
      </p>
    </div>
  );
};
