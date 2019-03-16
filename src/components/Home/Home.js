import React, { Component } from 'react';
import { Loader } from 'components'

import './Home.scss';

class Home extends Component {

  handleAsyncAction = () => {
    this.props.asyncAction()
  }

  
  render() {
    const { data } = this.props;
    return (
      <>
        <div onClick={this.handleAsyncAction} className="background">
          {data && data[0].map((item) => <div>{item.title}</div>)}
        </div>
        <Loader loading={this.props.loading} />
      </>
    )
  }
}

export default Home;