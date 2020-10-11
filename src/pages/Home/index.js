import React, { useContext } from 'react';
import { MovieContext } from '../../context/movies';
import { Card } from '../../components/Card/Card';
import styles from './Home.module.css';

export const Home = () => {
  const { dataToDisplay } = useContext(MovieContext);

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {dataToDisplay.map((data) => (
            <Card data={data}></Card>
          ))}
        </div>
      </div>
    </section>
  );
};
