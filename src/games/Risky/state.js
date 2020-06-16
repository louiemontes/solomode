import { makeActionCreator, wrapFunctions } from '../../lib/actions';
import { includes } from 'lodash';
import { countries, connections, continents } from './countries';
import { useReducer } from 'react';

const startGame = makeActionCreator();
const hover = makeActionCreator();

function initialize(){
  return {
    countries, connections, continents
  }
};

const initialState = initialize();

function handleHover(state, hc) {
  countries.forEach((c) => {
    if(includes(hc.connections, c.id)) {
      c.highlight = true;
    } else {
      c.highlight = false;
    }
  })
  return {...state, selected: hc}
}

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case startGame.type:
      return initialize();
    case hover.type:
      return handleHover(state, payload);
    default:
      return state;
  }
}

export default function useGameState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, wrapFunctions({
    startGame,
    hover
  }, dispatch)]
}
