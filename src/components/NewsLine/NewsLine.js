import React, { Component } from "react";
import Hammer from "react-hammerjs";
import Slider from "react-slick";
import img from "../../assets/background1.jpg";

import styles from "./NewsLine.scss";

class NewsLine extends Component {
  state = {
    firstSwipe: false,
    secondSwipe: false,
    list: [
      [
        {
          hat: img,
          description: "1"
        },
        {
          hat: img,
          description: "2"
        },
        {
          hat: img,
          description: "3"
        },
        {
          hat: img,
          description: "4"
        },
        {
          hat: img,
          description: "5"
        },
        {
          hat: img,
          description: "6"
        },
        {
          hat: img,
          description: "7"
        },
        {
          hat: img,
          description: "8"
        },
        {
          hat: img,
          description: "9"
        },
        {
          hat: img,
          description: "10"
        },
        {
          hat: img,
          description: "11"
        },
        {
          hat: null,
          description: "",
          end: "nothing to do here"
        }
      ],
      [
        {
          hat: img,
          description: "1"
        },
        {
          hat: img,
          description: "2"
        },
        {
          hat: img,
          description: "3"
        },
        {
          hat: img,
          description: "4"
        },
        {
          hat: img,
          description: "5"
        },
        {
          hat: img,
          description: "6"
        },
        {
          hat: img,
          description: "7"
        },
        {
          hat: img,
          description: "8"
        },
        {
          hat: img,
          description: "9"
        },
        {
          hat: img,
          description: "10"
        },
        {
          hat: img,
          description: "11"
        },
        {
          hat: null,
          description: "",
          end: "nothing to do here"
        }
      ]
    ]
  };
  componentDidMount() {
    const { list } = this.state;
    const { getSlideName } = this.props;
    const centralIndex = list[0].length / 2 - 1;
    getSlideName(list[0][centralIndex].description);
    window.scrollTo(0, 0);
  }

  handleSwipe = () => {
    const { firstSwipe } = this.state;
    e.preventDefault();
    this.setState({
      firstSwipe: !firstSwipe
    });
  };

  render() {
    const { list, firstSwipe } = this.state;
    const { getSlideName, slideName } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 200,
      afterChange: index => getSlideName(list[0][index].description),
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
          direction={firstSwipe ? "DIRECTION_ALL" : "DIRECTION_NONE"}
        >
          <div
            className={
              firstSwipe ? styles.newsComponentOpen : styles.newsComponentHidden
            }
          />
        </Hammer>
        <Slider {...settings}>
          {list[0].map((item, index) => (
            <Hammer
              onPress={this.handleSwipe}
              onSwipe={this.handleSwipe}
              key={index}
              direction={firstSwipe ? "DIRECTION_ALL" : "DIRECTION_NONE"}
            >
              <div>
                <img
                  key={index}
                  className={styles.newsComponent}
                  src={item.hat}
                  alt=""
                />
                <div className={styles.newsComponentDesc}>
                  {item.end ? item.end : ""}
                </div>
              </div>
            </Hammer>
          ))}
        </Slider>
        <Slider {...settings}>
          {list[1].map((item, index) => (
            <Hammer
              onPress={this.handleSwipe}
              onSwipe={this.handleSwipe}
              key={index}
              direction={firstSwipe ? "DIRECTION_ALL" : "DIRECTION_NONE"}
            >
              <div>
                <img
                  key={index}
                  className={styles.newsComponent}
                  src={item.hat}
                  alt=""
                />
                <div className={styles.newsComponentDesc}>
                  {item.end ? item.end : ""}
                </div>
              </div>
            </Hammer>
          ))}
        </Slider>
      </div>
    );
  }
}

export default NewsLine;
