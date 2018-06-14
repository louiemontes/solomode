import { combineReducers } from 'redux';
import forsolitaire from './forsolitaire';
import tictactoe from './tictactoe';

const reducer = combineReducers({
  forsolitaire,
  tictactoe
});

export default reducer;
