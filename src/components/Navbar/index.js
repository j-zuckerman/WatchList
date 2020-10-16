import React from 'react';
import styles from './Navbar.module.css';
import { SearchBar } from '../Searchbar';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <SearchBar />

        <div className={styles.navlinks}>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>

          <li>
            <Link className="link" to="/register">
              Register
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
