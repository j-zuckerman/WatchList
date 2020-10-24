import React, { createContext, useState, useEffect, useContext } from 'react';
import { apiKey } from '../util';
const baseUrl = 'https://api.themoviedb.org/3/';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [dataToDisplay, setDataToDisplay] = useState([]);

  const [topRated, setTopRated] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);

  const [castMemberDetails, setCastMemberDetails] = useState([]);
  const [castMemberAppearances, setCastMemberAppearances] = useState([]);

  //   const [favorites, setFavorites] = useState([]);
  //   const [watchList, setWatchList] = useState([]);

  const [isLoaded, setLoaded] = useState(false);

  async function fetchNowPlaying() {
    const response = await fetch(
      baseUrl + `movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = await response.json();

    console.log(data);

    setNowPlaying(data.results);
    setDataToDisplay(data.results);
  }

  async function fetchMostPopular() {
    const response = await fetch(
      baseUrl + `movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    const data = await response.json();
    setMostPopular(data.results);
  }

  async function fetchTopRated() {
    const response = await fetch(
      baseUrl + `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );

    const data = await response.json();
    setTopRated(data.results);
  }

  async function fetchHomePageData() {
    await fetchNowPlaying();
    await fetchTopRated();
    await fetchMostPopular();
  }

  function switchToNowPlaying() {
    setDataToDisplay(nowPlaying);
  }

  function switchToMostPopular() {
    setDataToDisplay(mostPopular);
  }

  function switchToTopRated() {
    setDataToDisplay(topRated);
  }

  async function fetchMovieDetails(id) {
    const response = await fetch(
      baseUrl + `movie/${id}?api_key=${apiKey}&language=en-US&page=1`
    );

    const data = await response.json();
    console.log(data);
    setMovieDetails(data);
  }

  async function fetchMovieCast(id) {
    const response = await fetch(
      baseUrl + `movie/${id}/credits?api_key=${apiKey}`
    );

    const data = await response.json();
    console.log(data);

    setMovieCast(data.cast);
  }

  async function fetchSimilarMovies(id) {
    const response = await fetch(
      baseUrl + `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );

    const data = await response.json();

    console.log(data);
    setSimilarMovies(data.results);
  }

  async function fetchMovieTrailer(id) {
    const response = await fetch(
      baseUrl + `movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    const data = await response.json();
    setMovieTrailer(data);
  }

  async function fetchDetailsPageData(id) {
    fetchSimilarMovies(id);
    fetchMovieDetails(id);
    fetchMovieCast(id);
    fetchMovieTrailer(id);
  }

  async function fetchCastMemberDetails(id) {
    const response = await fetch(baseUrl + `person/${id}?api_key=${apiKey}`);

    const data = await response.json();
    setCastMemberDetails(data);
  }

  async function fetchCastMemberAppearances(id) {
    const response = await fetch(
      baseUrl + `person/${id}/movie_credits?api_key=${apiKey}`
    );

    const data = await response.json();

    setCastMemberAppearances(data);
  }

  async function fetchCastMemberPageData(id) {
    setLoaded(false);

    fetchCastMemberAppearances(id);
    fetchCastMemberDetails(id);

    setLoaded(true);
  }

  async function fetchMoviesByGenre(id) {
    setLoaded(false);
    const response = await fetch(
      baseUrl +
        `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
    );

    const data = await response.json();
    //setMoviesByGenre(data);
    setLoaded(true);
  }

  async function fetchSearchResults(searchValue) {
    if (searchValue.length > 1) {
      const response = await fetch(
        baseUrl + `search/movie?api_key=${apiKey}&query=${searchValue}&page=1`
      );

      const data = await response.json();
      console.log(data);
      setDataToDisplay(data.results);
    }
  }

  async function fetchGenreList() {
    setLoaded(false);
    const response = await fetch(
      baseUrl + `genre/movie/list?api_key=${apiKey}&language=en-US`
    );

    const data = await response.json();
    setGenreList(data);
    setLoaded(true);
  }

  //   async function fetchFavorites(listOfIds) {
  //     setLoaded(false);

  //     let responses = [];
  //     Promise.all(
  //       listOfIds.map((id) =>
  //         movieApi.get(`movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
  //       )
  //     ).then((resolvedValues) => {
  //       resolvedValues.forEach((value) => {
  //         responses.push(value.data);
  //       });
  //     });
  //     setFavorites(responses);

  //     setLoaded(true);
  //   }

  //   async function fetchWatchList(listOfIds) {
  //     setLoaded(false);

  //     let responses = [];
  //     Promise.all(
  //       listOfIds.map((id) =>
  //         movieApi.get(`movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
  //       )
  //     ).then((resolvedValues) => {
  //       resolvedValues.forEach((value) => {
  //         responses.push(value.data);
  //       });
  //     });

  //     console.log(responses);
  //     setWatchList(responses);

  //     setLoaded(true);
  //   }

  useEffect(() => {
    fetchHomePageData();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        setDataToDisplay,
        dataToDisplay,
        switchToMostPopular,
        switchToNowPlaying,
        switchToTopRated,
        movieDetails,
        movieCast,
        similarMovies,
        fetchDetailsPageData,
        fetchSearchResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
