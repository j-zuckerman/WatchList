import React, { useEffect, useContext } from 'react';
import { MovieContext } from '../../context/movies';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import { Cast } from '../../components/Cast';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w500/';

export const Details = () => {
  const {
    fetchMovieDetails,
    movieDetails,
    fetchMovieCast,
    movieCast,
  } = useContext(MovieContext);

  //useParams hook to get id from url
  let params = useParams();

  //Fetch details of movie
  useEffect(() => {
    fetchMovieDetails(params.id);
    fetchMovieCast(params.id);
  }, [params.id]);

  return (
    <section className={styles.details}>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={`${baseImageURLPoster}${movieDetails.poster_path}`}
        />

        <div className={styles.description}>
          <h3>{movieDetails.title}</h3>
          <p>{movieDetails.tagline}</p>
          <p>{movieDetails.vote_average}</p>

          <p>{movieDetails.runtime} minutes &nbsp;/ &nbsp;</p>
          <p>{movieDetails.release_date} </p>

          <h3>Overview</h3>
          <p>{movieDetails.overview} </p>

          <Cast data={movieCast} />
        </div>
      </div>
    </section>
  );
};
