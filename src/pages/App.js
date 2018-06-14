import React, { Component } from 'react';
import { Link } from 'react-router';
import Layout from "./Layout.js";

import { withStyles } from '@material-ui/core/styles';


class App extends Component {
  render() {
    return (
      <Layout>
        <Link to="/fs">For Sale</Link>
        <Link to="/ttt">Tic Tac Toe</Link>
      </Layout>
    );
  }
}

export default App;
