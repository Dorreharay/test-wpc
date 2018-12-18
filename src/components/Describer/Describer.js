import React, { Component } from 'react';
import img from '../../assets/background.jpg';
import styles from './Describer.scss';

function Describer(){
  return (
    <img className={styles.describer} src={img}></img>
  )
}


export default Describer;
