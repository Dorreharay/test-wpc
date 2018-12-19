import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import Slider from "react-slick";
import img from '../../assets/item.jpg';
import { connect } from 'react-redux';
import { getSlideName } from '../../actions/actions';

import styles from './NewsLine.scss';

class NewsLine extends Component {
  state = {
    firstSwipe: false,
    secondSwipe: false,
    list: [
      [
        {
          hat: img,
          description: 'first text'
        },
        {
          hat: img,
          description: 'second text'
        },
        {
          hat: img,
          description: 'first text'
        },
        {
          hat: img,
          description: 'second text'
        },
        {
          hat: img,
          description: 'first text'
        },
        {
          hat: null,
          description: '',
          end: 'nothing to do here'
        }
      ],
      [
        {
          hat: img,
          description: 'first text'
        },
        {
          hat: img,
          description: 'second text'
        },
        {
          hat: img,
          description: 'first text'
        },
        {
          hat: img,
          description: 'second text'
        },
        {
          hat: img,
          description: 'first text'
        },
        {
          hat: null,
          end: 'nothing to do here'
        }
      ]
    ]
  }
  componentDidMount(){
    const { list } = this.state;
    const { getSlideName } = this.props;
    getSlideName(list[0][2].description)
  }
  handleSwipe = () => {
    const { firstSwipe } = this.state;
    this.setState({ 
      firstSwipe: !firstSwipe
    })
  }

  render() {
    const { list, firstSwipe } = this.state;
    const { getSlideName, slideName } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 200,
      afterChange: (index) => getSlideName(list[0][index].description),
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: this.state.list[0].length / 2 - 1
    };
    return (
    <div className={styles.newsLineWrapper}>
      <div className={styles.head}>
        <div className={styles.button}>{slideName}</div>
      </div>
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
            key={index}
            direction={firstSwipe ? 'DIRECTION_ALL' : 'DIRECTION_NONE'}
          >
            <div>
              <img key={index} className={styles.newsComponent} src={item.hat} />
              <div className={styles.newsComponentDesc}>{item.end ? item.end : ''}</div>
            </div>
          </Hammer>
        )}
      </Slider>
      <Slider {...settings}>
        {list[1].map((item, index) => 
          <Hammer 
            onPress={this.handleSwipe}
            onSwipe={this.handleSwipe}
            key={index}
            direction={firstSwipe ? 'DIRECTION_ALL' : 'DIRECTION_NONE'}
          >
            <div>
              <img key={index} className={styles.newsComponent} src={item.hat} />
            </div>
          </Hammer>
        )}
      </Slider>
      
    </div>
    )
  }
}

const mapStateToProps = state => ({
  slideName: state.newsLine.slideName
})  

const mapDispatchToProps = dispatch => ({
  getSlideName: (name) => dispatch(getSlideName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsLine);