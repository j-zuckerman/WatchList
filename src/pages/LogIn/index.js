import React from 'react';
import { SignIn } from '../../components/SignIn';
import styles from './LogIn.module.css';

export const LogInPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login to your account</h3>
      <SignIn />
    </div>
  );
};
