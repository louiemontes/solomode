import { makeActionCreator } from 'cooldux';
import { reduce, sample } from 'lodash';
import { winPositionPatterns } from './patterns';

export const startGame = makeActionCreator();
export const markSquare = makeActionCreator();

//"\u00a0"


function initialize(){
  const board = new Array(9).fill("");
  return {
    board,
    statusMessage: "Press a button.",
    winningLocations: []
  }
};
function checkSpaces(state, player){
  const { board } = state;
  let win = false;
  winPositionPatterns.forEach(line => {
    if(board[line[0]] === player && board[line[1]] === player && board[line[2]] === player) {
      win = true;
      state.winningLocations = [line[0], line[1], line[2]];
    }
  });
  return win;
}

function checkGameOver(state) {
  if (checkSpaces(state, "x")){
    // x won
    state.winner = "x";
    state.statusMessage = "x won";
    return true;
  } else if (checkSpaces(state, "o")){
    // o won
    state.winner = "o";
    state.statusMessage = "o won";
    return true;
  }
  const emptyCount = (reduce(state.board, function(result, value, key){
    if(!value) {
       result.push(key);
    }
   return result;
  }, [])).length;
  if(emptyCount) {
    return false;
  }
  state.winner = "draw";
  state.statusMessage = "draw";

  return true;
}

function placeOnBoard(state, payload) {
  // leave it alone if string already there
  if (state.board[payload] ||  state.winner ) {
    return state;
  }
  state.board[payload] = "x";

  if (!checkGameOver(state)) {
    // ai take "o" turn
    // otherwise place where fits
    let positionChoice = sample(reduce(state.board, function(result, value, key){
      if(!value) {
         result.push(key);
      }
     return result;
    }, []));

    state.board[positionChoice] = "o";
    checkGameOver(state)
  }
  return {...state};
}

function reducer(state = initialize(), {type, payload}) {
  // console.log(state, type, payload);
  switch (type) {
    case startGame.type:
      return initialize();
    case markSquare.type:
      return placeOnBoard(state, payload);
    default:
      return state;
  }
}

export default reducer;
