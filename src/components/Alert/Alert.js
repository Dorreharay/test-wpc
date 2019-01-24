import React from 'react';
import { CopyIcon, SuccessIcon } from '../../assets/svg';

import styles from './Alert.scss';

const Alert = ({ message }) => (
  <div className={styles.alert}>
    {message === 'Скопійовано' ? <CopyIcon /> : null}
    {message === 'Зміни збережено' ? <SuccessIcon /> : null}
    <div className={styles.alertMessage}>{message}</div>
  </div>
);

export default Alert;
