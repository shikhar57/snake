import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Routes from "./Routes";


class App extends Component {

  constructor(props) {
    super(props);
  }

  render () {

    return (
        <Routes />
    )
  }
}

export default withRouter(App);
