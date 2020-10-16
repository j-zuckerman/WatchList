import React from 'react';
import { Navbar } from '../Navbar';
import { SideMenu } from '../SideMenu';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className={styles.container}>
        <SideMenu />

        <div className={styles.main}>{children}</div>
      </div>
    </main>
  );
};
