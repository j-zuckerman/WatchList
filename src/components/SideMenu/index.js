import React, { useContext, useState } from 'react';
import { MovieContext } from '../../context/movies';
import styles from './SideMenu.module.css';
import { Link } from 'react-router-dom';

export const SideMenu = () => {
  const { fetchNowPlaying, fetchMostPopular, fetchTopRated } = useContext(
    MovieContext
  );

  //used to keep track of what link is active
  const [activeKey, setActiveKey] = useState('top_rated');

  const switchToTopRated = () => {
    fetchTopRated();
    setActiveKey('top_rated');
  };

  const switchToMostPopular = () => {
    fetchMostPopular();
    setActiveKey('most_popular');
  };

  const switchToNowPlaying = () => {
    fetchNowPlaying();
    setActiveKey('now_playing');
  };

  return (
    <nav>
      <ul className={styles.sideMenu}>
        <li
          className={`${styles.sideMenu__item} ${
            activeKey === 'top_rated' ? styles.active : ''
          }`}
          onClick={switchToTopRated}
        >
          <Link className="link" to="/">
            Top Rated
          </Link>
        </li>
        <li
          className={`${styles.sideMenu__item} ${
            activeKey === 'most_popular' ? styles.active : ''
          }`}
          onClick={switchToMostPopular}
        >
          <Link className="link" to="/">
            Most Popular
          </Link>
        </li>
        <li
          className={`${styles.sideMenu__item} ${
            activeKey === 'now_playing' ? styles.active : ''
          }`}
          onClick={switchToNowPlaying}
        >
          <Link className="link" to="/">
            Now Playing
          </Link>
        </li>
        <li className={styles.sideMenu__item}></li>
        <li className={styles.sideMenu__item}></li>
      </ul>
    </nav>
  );
};
