import React, { useContext, useState } from 'react';
import { MovieContext } from '../../context/movies';
import styles from './SideMenu.module.css';
import { Link } from 'react-router-dom';

export const SideMenu = () => {
  const {
    switchToMostPopular,
    switchToNowPlaying,
    switchToTopRated,
  } = useContext(MovieContext);

  //used to keep track of what link is active
  const [activeKey, setActiveKey] = useState('now_playing');

  const navigateToTopRated = () => {
    switchToTopRated();
    setActiveKey('top_rated');
  };

  const navigateToMostPopular = () => {
    switchToMostPopular();
    setActiveKey('most_popular');
  };

  const navigateToNowPlaying = () => {
    switchToNowPlaying();
    setActiveKey('now_playing');
  };

  return (
    <nav>
      <ul className={styles.sideMenu}>
        <li
          className={`${styles.sideMenu__item} ${
            activeKey === 'now_playing' ? styles.active : ''
          }`}
          onClick={navigateToNowPlaying}
        >
          <Link className="link" to="/">
            Now Playing
          </Link>
        </li>
        <li
          className={`${styles.sideMenu__item} ${
            activeKey === 'top_rated' ? styles.active : ''
          }`}
          onClick={navigateToTopRated}
        >
          <Link className="link" to="/">
            Top Rated
          </Link>
        </li>
        <li
          className={`${styles.sideMenu__item} ${
            activeKey === 'most_popular' ? styles.active : ''
          }`}
          onClick={navigateToMostPopular}
        >
          <Link className="link" to="/">
            Most Popular
          </Link>
        </li>
      </ul>
    </nav>
  );
};
