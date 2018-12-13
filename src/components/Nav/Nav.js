import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import styles from './Nav.scss';

class Home extends Component {
  state = {
    firstSwipe: false,
    secondSwipe: false
  }
  
  handleSwipe = () => {
    const { firstSwipe } = this.state;
    this.setState({ 
      firstSwipe: !firstSwipe
    })
  }
  handleSwipeToEnd = () => {
    const { secondSwipe } = this.state;
    this.setState({ 
      secondSwipe: !secondSwipe
    })
  }

  render() {
    const { firstSwipe, secondSwipe } = this.state;
    return (
      <Hammer 
        onSwipe={this.handleSwipe}
        direction={firstSwipe ? 'DIRECTION_DOWN' : 'DIRECTION_UP'}
      >
        <div>
          <div className={styles.navhat}></div>
          <div className={firstSwipe ? styles.hiddenNavOpen : styles.hiddenNav} />
        </div>
      </Hammer>
    )
  }
}

export default Home;
