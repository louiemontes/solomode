import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
//import createHistory from "history/createHashHistory";
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import ForSolitaire from './pages/ForSolitaire';
import TicTacToe from './pages/TicTacToe';
import LostCities from './pages/LostCities';

const theme = createMuiTheme({
 palette: {
   primary: blue,
 },
});

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="fs" component={ForSolitaire} />
      <Route path="ttt" component={TicTacToe} />
      <Route path="lc" component={LostCities} />
    </Router>
  </MuiThemeProvider>
),document.getElementById('root'));

registerServiceWorker();
