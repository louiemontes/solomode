import { combineReducers } from 'redux';
import forsolitaire from './forsolitaire';
import tictactoe from './tictactoe';
import lostcities from './lostcities';

const reducer = combineReducers({
  forsolitaire,
  tictactoe,
  lostcities
});

export default reducer;
