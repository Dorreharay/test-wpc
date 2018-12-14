import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import styles from './Nav.scss';

class Home extends Component {
  state = {
    firstSwipe: false,
    secondSwipe: false,
    list: [
      {
        title: 'catword'
      },
      {
        title: 'sfdgsdfg'
      },
      {
        title: 'catsdfgsdfgword'
      },
      {
        title: 'sfgsdfgsdf'
      },
      {
        title: 'catword'
      },
      {
        title: 'dfgfdgfd'
      },
      {
        title: 'catword'
      },
      {
        title: 'catword'
      },
      {
        title: 'dfgdfgsdffdsgsdf'
      },
      {
        title: 'sdfgsdfgsdfgasdf'
      },
      {
        title: 'catword'
      },
      {
        title: 'catword'
      },
      {
        title: 'sdfgsdfgsdfg'
      },
      {
        title: 'catword'
      },
      {
        title: 'sdgsdfgsdfgsdfg'
      },
      {
        title: 'catword'
      },
      {
        title: 'anime'
      },
      {
        title: 'catworddfsdfs'
      },
      {
        title: 'catword'
      },
      {
        title: 'catword'
      },
      {
        title: 'catword'
      },
      {
        title: 'catword'
      },
      {
        title: 'catword'
      },
      {
        title: 'catword'
      },
    ]
  }
  
  handleSwipe = () => {
    const { firstSwipe } = this.state;
    this.setState({ 
      firstSwipe: !firstSwipe
    })
  }

  render() {
    const { list } = this.state;
    const { firstSwipe, secondSwipe } = this.state;
    return (
      <Hammer 
        onSwipe={this.handleSwipe}
        direction={firstSwipe ? 'DIRECTION_DOWN' : 'DIRECTION_UP'}
      >
        <div>
          <div className={styles.navhat}></div>
          {
            firstSwipe ? (
              <div className={styles.hiddenNavOpen}>
                <div className={styles.navContent}>
                  <div className={styles.categories}>
                    <div className={styles.title}>Categories</div>
                    <div className={styles.list}>
                      {list.map((item) => <button className={styles.item}>{item.title}</button>)}
                    </div>
                  </div>
                  <div className={styles.filterBy}>
                    <div className={styles.title}>Filter by</div>
                    <div className={styles.filterItems}>
                      <button className={styles.item}>relevance</button>
                      <button className={styles.item}>popularity</button>
                      <button className={styles.item}>by date</button>
                      <button className={styles.item}>by rate</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.hiddenNav}/>
            )
          }
          
        </div>
      </Hammer>
    )
  }
}

export default Home;
