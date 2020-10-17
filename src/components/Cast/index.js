import React from 'react';
import styles from './Cast.module.css';

const baseImageURLProfile = 'https://image.tmdb.org/t/p/w45/';

export const Cast = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((castMember) => (
        <div key={data.cast_id} className={styles.cast_member}>
          <img
            className={styles.cast_img}
            src={`${baseImageURLProfile}${castMember.profile_path}`}
          />
          <p>{castMember.character}</p>
        </div>
      ))}
    </div>
  );
};
