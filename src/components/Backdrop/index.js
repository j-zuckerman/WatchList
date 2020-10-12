import React from 'react';
import styles from './Backdrop.module.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/original/';

export const Backdrop = ({ data }) => {
  return (
    <img className={styles.backdrop} src={`${baseImageURLPoster}${data}`} />
  );
};
