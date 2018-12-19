import React, { Component } from 'react';
import { NavBar, NewsLine, Describer } from '../';

import styles from './Home.scss';

function Home() {
  return (
    <div className={styles.main}>
      <NavBar />
      <Describer />
      <NewsLine />
    </div>
  )
}

export default Home;
