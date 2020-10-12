import React, { useEffect, useContext } from 'react';
import { MovieContext } from '../../context/movies';
import { useParams } from 'react-router-dom';
import { Backdrop } from '../../components/Backdrop';

export const Details = () => {
  const { fetchMovieDetails, movieDetails } = useContext(MovieContext);

  //useParams hook to get id from url
  let params = useParams();

  //Fetch details of movie
  useEffect(() => {
    fetchMovieDetails(params.id);
  }, [params.id]);

  return (
    <section>
      <Backdrop data={movieDetails.backdrop_path} />
    </section>
  );
};
