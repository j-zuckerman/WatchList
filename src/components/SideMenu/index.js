import React, { useContext } from 'react';
import { MovieContext } from '../../context/movies';
import styles from './SideMenu.module.css';

export const SideMenu = () => {
  const { fetchNowPlaying, fetchMostPopular, fetchTopRated } = useContext(
    MovieContext
  );

  const switchToTopRated = () => {
    fetchTopRated();
  };

  const switchToMostPopular = () => {
    fetchMostPopular();
  };

  const switchToNowPlaying = () => {
    fetchNowPlaying();
  };
  return (
    <nav>
      <ul className={styles.sideMenu}>
        <li className={styles.sideMenu__item} onClick={switchToTopRated}>
          Top Rated
        </li>
        <li className={styles.sideMenu__item} onClick={switchToMostPopular}>
          Most Popular
        </li>
        <li className={styles.sideMenu__item} onClick={switchToNowPlaying}>
          Now Playing
        </li>
        <li className={styles.sideMenu__item}></li>
        <li className={styles.sideMenu__item}></li>
      </ul>
    </nav>
  );
};
