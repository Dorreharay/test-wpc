import React, { Component } from 'react';
import { NavBar, Describer } from 'components';
import { NewsLine, Test } from 'containers';

import styles from './Category.scss';

function Category() {
  return (
    <div className={styles.main}>
      {/* <NavBar /> */}
      <Describer />
      <NewsLine />
    </div>
  )
}

export default Category;
