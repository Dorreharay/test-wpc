import React, { Component } from "react";
import { CategoriesGridList, NavBar, Header } from "components";

import styles from "./Home.scss";

class Home extends Component {
  state = {
    settingsToggled: false
  };

  componentDidMount() {
    const { startAsyncAction } = this.props;
    startAsyncAction()
  };

  handleAsyncAction = () => {
    const { startAsyncAction } = this.props;
    startAsyncAction()
  };

  render() {
    const { data, loading } = this.props;

    return (
      <div>
        <div onClick={this.handleAsyncAction}>getData</div>

        {loading ? <div>Loading...</div> : data.map((item, index) => <div className={styles.item} key={index}>{item.title}</div>)}
      </div>
    );
  }
}

export default Home;
