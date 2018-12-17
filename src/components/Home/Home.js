import React, { Component } from 'react';
import { Header, NavBar, NewsLine, Describer, Slider } from '../';

import styles from './Home.scss';

function Home() {
  return (
    <div className={styles.main}>
      <NavBar />
      <Describer />
      <Slider />
      <NewsLine />
    </div>
  )
}

export default Home;
