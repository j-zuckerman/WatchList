import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { SearchBar } from '../Searchbar';
import { UserContext } from '../../providers';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

export const Navbar = () => {
  const user = useContext(UserContext);
  return (
    <nav>
      <ul className={styles.navbar}>
        <SearchBar />

        <div className={styles.navlinks}>
          {user ? (
            <>
              <li>
                <p>{user.email}</p>
              </li>

              <li>
                <button
                  onClick={() => {
                    auth.signOut();
                  }}
                  className={styles.button}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};
