import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import { Link } from 'react-router-dom';
import { Img } from 'react-progressive-loader';
import img from '../../assets/background.jpg';

import styles from './CategoriesGridList.scss';

class CategoriesGridList extends Component {
  state = {
    firstSwipe: false,
    secondSwipe: false,
    list: [
      [
        {
          hat: img,
          description: '1'
        },
        {
          hat: img,
          description: '2'
        },
        {
          hat: img,
          description: '3'
        },
        {
          hat: img,
          description: '4'
        },
        {
          hat: img,
          description: '5'
        },
        {
          hat: img,
          description: '6'
        },
        {
          hat: img,
          description: '7'
        },
        {
          hat: img,
          description: '8'
        },
        {
          hat: img,
          description: '9'
        },
        {
          hat: img,
          description: '10'
        },
        {
          hat: img,
          description: '11'
        },
        {
          hat: img,
          description: '12',
        }
      ]
    ]
  };


  render() {
    const { list, firstSwipe } = this.state;
    return (
    <div className={styles.categoriesGridList}>
    <div className={styles.header}>
      <div className={styles.text}>Найчастіше обрані</div>
      <div className={styles.text}>Прийміть участь у складанні рейтингу місяця</div>
    </div>
      {list[0].map((item, index) => 
        <Hammer 
          onPress={this.handleSwipe}
          onSwipe={this.handleSwipe}
          key={index}
          direction={firstSwipe ? 'DIRECTION_ALL' : 'DIRECTION_NONE'}
        >
          <div>
            <Link to='/category'>
              <div className={styles.categoriesGridListComponentHat}>
                <div className={styles.wrapper}></div>
                <img
                  key={index}
                  className={styles.categoriesGridListComponent}
                  src={item.hat}
                  alt='category link image '
                />
              </div>
            </Link>
          </div>
        </Hammer>
      )}
    </div>
    )
  }
}

export default CategoriesGridList;