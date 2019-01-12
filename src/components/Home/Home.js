import React, { Component } from "react";
import { NavBar } from "components";

import img from '../../assets/c.png';
import back from '../../assets/background.jpg';

import styles from "./Home.scss";

class Home extends Component {
  state = {
    hovered: false,
    settingsToggled: false,
    navList: [
      {
        title: "catword"
      },
      {
        title: "sfdgsdfg"
      },
      {
        title: "catsdfgsdfgword"
      },
      {
        title: "sfgsdfgsdf"
      },
      {
        title: "catword"
      },
      {
        title: "dfgfdgfd"
      },
      {
        title: "catword"
      },
      {
        title: "catword"
      },
      {
        title: "dfgdfgsdffdsgsdf"
      },
      {
        title: "sdfgsdfgsdfgasdf"
      },
      {
        title: "catword"
      },
      {
        title: "catword"
      },
      {
        title: "sdfgsdfgsdfg"
      },
      {
        title: "catword"
      },
      {
        title: "sdgsdfgsdfgsdfg"
      },
      {
        title: "catword"
      },
      {
        title: "anime"
      },
      {
        title: "catworddfsdfs"
      },
      {
        title: "catword"
      },
      {
        title: "catword"
      },
      {
        title: "catword"
      },
      {
        title: "catword"
      },
      {
        title: "catword"
      },
      {
        title: "catword"
      }
    ]
  };

  handleHoverEnter = () => {
    this.setState({
      hovered: true
    });
  };
  handleHoverLeave = () => {
    this.setState({
      hovered: false
    });
  };
  toggleSettings = () => {
    const { settingsToggled } = this.state;
    this.setState({
      settingsToggled: !settingsToggled
    })
  }

  render() {
    const { hovered, settingsToggled, navList } = this.state;

    return (
      <div>
        <div className={styles.header}></div>
        <div className={styles.content}>
          <div className={hovered ? styles.smartBoxHovered : styles.smartBox} onMouseLeave={() => this.handleHoverLeave()} >
            <div className={styles.innerContent} onMouseEnter={() => this.handleHoverEnter()}></div>
          </div>
          <img className={styles.coffeecup} src={img} />
          <ul className={styles.socialList}>
            <li>
              <svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m123.195312 260.738281 63.679688 159.1875 82.902344-82.902343 142.140625 112.976562 100.082031-450-512 213.265625zm242.5-131.628906-156.714843 142.941406-19.519531 73.566407-36.058594-90.164063zm0 0" />
              </svg>
            </li>
            <li>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 26 26" space="preserve">

              <path d="M20,7c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h2c0.551,0,1,0.449,1,1v2c0,0.551-0.449,1-1,1H20z
                "/>
              <path d="M13,9.188c-0.726,0-1.396,0.213-1.973,0.563c0.18-0.056,0.367-0.093,0.564-0.093
                c1.068,0,1.933,0.865,1.933,1.934c0,1.066-0.865,1.933-1.933,1.933s-1.933-0.866-1.933-1.933c0-0.199,0.039-0.386,0.094-0.565
                C9.4,11.604,9.188,12.274,9.188,13c0,2.107,1.705,3.813,3.813,3.813c2.105,0,3.813-1.705,3.813-3.813S15.105,9.188,13,9.188z"/>
              <path d="M13,7c3.313,0,6,2.686,6,6s-2.688,6-6,6c-3.313,0-6-2.686-6-6S9.687,7,13,7 M13,5
                  c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S17.411,5,13,5L13,5z"/>
              <path d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
                C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M24,9h-6.537C18.416,10.063,19,11.461,19,13
                c0,3.314-2.688,6-6,6c-3.313,0-6-2.686-6-6c0-1.539,0.584-2.938,1.537-4H2V4.875C2,3.29,3.29,2,4.875,2h16.25
                C22.711,2,24,3.29,24,4.875V9z"/>
            </svg>
            </li>
            <li>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0" />
              </svg>
            </li>
            <li>
              <svg onClick={() => this.toggleSettings()} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 268.765 268.765" space="preserve">
                  <path d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617
                    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133
                    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529
                    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08
                    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574
                    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214
                    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597
                    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415
                    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508
                    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167
                    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817
                    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572
                    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213
                    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043
                    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491
                    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824
                    C179.418,159.385,159.312,179.491,134.595,179.491z"
                  />
              </svg>
            </li>
          </ul>
        </div>
        {settingsToggled ? (
          <NavBar
            settingsToggled={settingsToggled}
            navList={navList}
            toggleSettings={this.toggleSettings}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
