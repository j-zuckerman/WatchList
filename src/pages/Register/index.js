import React from 'react';
import { SignUp } from '../../components/Signup';
import styles from './Register.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Register an account</h3>
      <SignUp />
    </div>
  );
};
