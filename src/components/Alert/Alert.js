import React from 'react'
import { CopyIcon } from '../../assets/svg';

import styles from './Alert.scss';

const Alert = ({ message }) => (
  <div className={styles.alert} >
    <CopyIcon />
    <div className={styles.alertMessage}>{message}</div>
  </div>
)

export default Alert;
