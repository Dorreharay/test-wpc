import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import styles from './NewsLine.scss';

class NewsLine extends Component {
  state = {
    firstSwipe: false,
    secondSwipe: false,
    vidlist: [
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
      },
      {
        hat: 'src\assets\defaulthat.jpg',
        vid: ''
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
    const { vidlist, firstSwipe } = this.state;
    return (
    <div className={styles.newsLineWrapper}>
      {vidlist.map((item, index) => 
      <Hammer 
        onPress={this.handleSwipe}
        onSwipe={this.handleSwipe}
        direction={firstSwipe ? 'DIRECTION_ALL' : 'DIRECTION_NONE'}
      >
        <img key={index} className={firstSwipe ? styles.newsComponentOpen : styles.newsComponent} src='https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'/>
      </Hammer>
      )}
    </div>
    )
  }
}

export default NewsLine;
