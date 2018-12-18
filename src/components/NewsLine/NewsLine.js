import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import Slider from "react-slick";
import img from '../../assets/item.jpg';

import styles from './NewsLine.scss';

class NewsLine extends Component {
  state = {
    firstSwipe: false,
    secondSwipe: false,
    list: [
      [
        {
          hat: img,
          vid: ''
        },
        {
          hat: img,
          vid: ''
        },
        {
          hat: img,
          vid: ''
        },
        {
          hat: img,
          vid: ''
        },
        {
          hat: null,
          vid: ''
        }
      ],
      [
        {
          hat: img,
          vid: ''
        },
        {
          hat: img,
          vid: ''
        },
        {
          hat: img,
          vid: ''
        },
        {
          hat: img,
          vid: ''
        },
        {
          hat: null,
          vid: ''
        }
      ]
    ]
  }

  handleSwipe = () => {
    const { firstSwipe } = this.state;
    this.setState({ 
      firstSwipe: !firstSwipe
    })
  }

  render() {
    const { list, firstSwipe } = this.state;
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 200,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 1
    };
    return (
    <div className={styles.newsLineWrapper}>
      <Hammer 
        onPress={this.handleSwipe}
        onSwipe={this.handleSwipe}
        direction={firstSwipe ? 'DIRECTION_ALL' : 'DIRECTION_NONE'}
      >
        <div className={firstSwipe ? styles.newsComponentOpen : styles.newsComponentHidden} />
      </Hammer>
      <Slider {...settings}>
        {list[0].map((item, index) => 
          <Hammer 
            onPress={this.handleSwipe}
            onSwipe={this.handleSwipe}
            direction={firstSwipe ? 'DIRECTION_ALL' : 'DIRECTION_NONE'}
          >
            <div>
              <img className={styles.newsComponent} src={item.hat} />
            </div>
          </Hammer>
        )}
      </Slider>
      <Slider {...settings}>
        {list[1].map((item, index) => 
          <Hammer 
            onPress={this.handleSwipe}
            onSwipe={this.handleSwipe}
            direction={firstSwipe ? 'DIRECTION_ALL' : 'DIRECTION_NONE'}
          >
            <div>
              <img className={styles.newsComponent} src={item.hat} />
            </div>
          </Hammer>
        )}
      </Slider>
      
    </div>
    )
  }
}

export default NewsLine;
