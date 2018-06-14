import { makeActionCreator } from 'cooldux';

export const startGame = makeActionCreator();
export const markSquare = makeActionCreator();

function initialize(){
  const board = new Array(9).fill(0);
  return {
    board, 
    turn: "x"
  }
};

function placeOnBoard(state, payload) {
  if (state.board[payload]) {
    return state;
  }
  if (state.turn === "x") {
    state.board[payload] = "x";
    state.turn = "o";
  } else {
    state.board[payload] = "o";
    state.turn = "x";
  }
  return {...state};
}

function reducer(state = initialize(), {type, payload}) {
  console.log(state, type, payload);
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
