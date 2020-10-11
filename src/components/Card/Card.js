import React from 'react';
import styles from './Card.module.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

export const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        key={data.id}
        src={`${baseImageURLPoster}${data.poster_path}`}
      />
      <div>
        <p className={styles.card__title}>{data.title}</p>
        <p className={styles.card__rating}>{data.vote_average}</p>
      </div>
    </div>
  );
};
