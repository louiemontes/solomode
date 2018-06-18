import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
//import createHistory from "history/createHashHistory";
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import reducers from './state';
import ForSolitaire from './pages/ForSolitaire';
import TicTacToe from './pages/TicTacToe';
import LostCities from './pages/LostCities';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const theme = createMuiTheme({
 palette: {
   primary: blue,
 },
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="fs" component={ForSolitaire} />
        <Route path="ttt" component={TicTacToe} />
        <Route path="lc" component={LostCities} />
      </Router>
    </MuiThemeProvider>
  </Provider>
),document.getElementById('root'));

registerServiceWorker();
