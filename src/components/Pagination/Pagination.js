import React from 'react'
import { LeftArrowIcon, RightArrowIcon } from '../../assets/svg';

import styles from './Pagination.scss';

const Pagination = ({ ordersList, togglePage, page, className, toPreviousPage, toNextPage }) =>
  <div className={className}>
    <LeftArrowIcon className={styles.navArrow} toPreviousPage={toPreviousPage} />
    {
      ordersList.map((item, index) =>
        <div
          key={index}
          onClick={() => togglePage(index)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            padding: '10px',
            paddingTop: '8px',
            margin: '5px',
            fontSize: '20px',
            borderRadius: '50%',
            color: page === index ? 'white' : 'black',
            background: page === index ? '#E74A4A' : 'transparent',
            cursor: 'pointer',
          }}>
          {index + 1}
        </div>)
    }
    <RightArrowIcon className={styles.navArrow} toNextPage={toNextPage} />
  </div>

export default Pagination;
