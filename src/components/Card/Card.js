import React, { useContext } from 'react';
import { UserContext } from '../../providers';
import { addToUserWatchList } from '.././../firebase';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { apiKey } from '../../util';
import { Rating } from '../Rating';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

export const Card = ({ data }) => {
  const user = useContext(UserContext);

  const addToWatchList = async (id) => {
    const { uid } = user;
    //fetch movie details based on id
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`
    );

    const data = await response.json();
    addToUserWatchList(uid, data);
    console.log(data);
  };

  return (
    <div className={styles.card}>
      <Link className="link" to={`/movie/${data.id}`}>
        <img
          className={styles.card__img}
          key={data.id}
          src={`${baseImageURLPoster}${data.poster_path}`}
        />
      </Link>
      <div>
        <p className={styles.card__title}>{data.title}</p>
        <Rating score={data.vote_average}></Rating>

        {user && (
          <button
            className={styles.button}
            onClick={() => addToWatchList(data.id)}
          >
            Add to watch list
          </button>
        )}
      </div>
    </div>
  );
};
