import React from 'react';
import styles from './Rating.module.css';

export const Rating = ({ score }) => {
  if (score <= 5.5)
    return <p className={`${styles.rating} ${styles.red}`}>{score}</p>;
  else if (score <= 7.5)
    return <p className={`${styles.rating} ${styles.yellow}`}>{score}</p>;
  else return <p className={`${styles.rating} ${styles.green}`}>{score}</p>;
};
