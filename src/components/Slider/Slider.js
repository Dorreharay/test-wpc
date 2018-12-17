import React, { Component } from 'react';

import styles from './Slider.scss';

function Slider(){
  return (
    <div className={styles.slider}>
      <div className={styles.button}>Categories</div>
      <div className={styles.button}>Filter</div>
    </div>
  )
}


export default Slider;
