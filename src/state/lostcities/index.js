import { shuffle, reduce, fill, sortBy } from 'lodash';
import { makeActionCreator } from 'cooldux';
import { useReducer } from 'react';

import createDeck from './cards';

const startGame = makeActionCreator();
const selectPile = makeActionCreator();
const selectMyCard = makeActionCreator();
const playCard = makeActionCreator();
const discardCard = makeActionCreator();
const drawCard = makeActionCreator();

function initialize(){
  const deck = shuffle(createDeck());
  const myCards = sortBy(fill(new Array(8), null).map(a => deck.shift()), ['suit', 'value']);
  const p2Cards = fill(new Array(8), null).map(a => deck.shift());
  const piles = [[],[],[],[],[]];
  const myPiles = [[],[],[],[],[]];
  const p2Piles = [[],[],[],[],[]];
  // console.log(deck, myCards, p2Cards);
  return {
    deck,
    myCards,
    p2Cards,
    phase : 'play',
    piles,
    p2Discard : [],
    myPiles,
    p2Piles,
    myScore : 0,
    p2Score : 0,
    canPlaceCard: false
  };
}

function hasVal(val) {
  return val || val === 0;
}

function handlePlayCard(state) {
  const myCard = state.myCards[state.selectedCard];
  const myNewCards = [];
  state.myCards.forEach((c, i) => {
    if(i !== state.selectedCard) {
      myNewCards.push(c);
    }
  });
  state.myPiles[myCard.suit].push(myCard);
  state.myScore = scorePiles(state.myPiles, 20);
  state.selectedPile = -1;
  return {...state, myCards: myNewCards, selectedCard: null, phase: 'draw'};
}

function handleDiscardCard(state) {
  console.log('handlePlayCard', state.selectedCard);
  const myCard = state.myCards[state.selectedCard];
  const myNewCards = [];
  state.myCards.forEach((c, i) => {
    if(i !== state.selectedCard) {
      myNewCards.push(c);
    }
  });
  state.piles[myCard.suit].push(myCard);
  state.selectedPile = -1;
  return {...state, myCards: myNewCards, selectedCard: null, phase: 'draw'};
}

function handleDrawCard(state) {
  if(state.selectedPile === -1) {
    state.myCards.push(state.deck.pop());
  }
  else {
    state.myCards.push(state.piles[state.selectedPile].pop());
  }
  state.myCards = sortBy(state.myCards, ['suit', 'value']);
  state.selectedPile = null;

  if(!state.deck.length) {
    return {...state, phase: 'gameover'};
  }

  takeP2Turn(state);

  state.p2Score = scorePiles(state.p2Piles, 15);

  if(!state.deck.length) {
    return {...state, phase: 'gameover'};
  }

  return {...state, phase: 'play'};

}

function takeP2Turn(state) {
  state.p2Cards = shuffle(state.p2Cards);
  const p2Card = state.p2Cards.pop();
  state.p2Cards.push(state.deck.pop());
  state.p2Cards = sortBy(state.p2Cards, ['suit', 'value']);

  const pile = state.p2Piles[p2Card.suit];
  if(!pile.length) {
    pile.push(p2Card);
  } else if (p2Card.value > (pile[pile.length - 1].value - 3)) {
    pile.push(p2Card);
    state.p2Piles[p2Card.suit] = sortBy(pile, 'value');
  } else {
    state.p2Discard.push(p2Card);
    state.p2Discard = sortBy(state.p2Discard, ['suit', 'value']);
  }
  return state;
}

function scorePiles(piles, min) {
  return reduce(piles, (result, pile) => {

    let subTotal = 0;
    let mults = 0;

    if(!pile.length) {
      return result;
    }

    pile.forEach(c => {
      if(c.value === 0){
        mults++;
      } else {
        subTotal += c.value;
      }
    });
    if(subTotal < min) {
      result += (mults + 1) * (subTotal - min);
    } else {
      result += (mults + 1) * subTotal;
    }

    return result;

  }, 0);
}

function handleSelectPile(state, pileId) {
  if(state.phase === 'draw' && (pileId === -1 || state.piles[pileId].length)) {
    return {...state, selectedPile: pileId}
  }
  return state;
}

function handleSelectMyCard(state, cardIndex) {
  const card = state.myCards[cardIndex];
  const pile = state.myPiles[card.suit];
  if(!pile.length) {
    state.canPlaceCard = true;
  } else if(card.value >= pile[pile.length - 1].value) {
    state.canPlaceCard = true;
  } else {
    state.canPlaceCard = false;
  }
  return {...state, selectedCard: cardIndex}
}

const initialState = initialize();

function reducer(state = initialState, {type, payload}) {

  switch (type) {
    case startGame.type:
      return initialState;
    case selectPile.type:
      return handleSelectPile(state, payload);
    case selectMyCard.type:
      if(state.phase === 'play') {
        return handleSelectMyCard(state, payload);
      }
      return state;
    case playCard.type:
      if(state.phase === 'play' && hasVal(state.selectedCard)) {
        return handlePlayCard(state, payload);
      }
      return state;
    case discardCard.type:
      if(state.phase === 'play' && hasVal(state.selectedCard)) {
        return handleDiscardCard(state, payload);
      }
      return state;
    case drawCard.type:
      if(state.phase === 'draw' && hasVal(state.selectedPile)) {
        return handleDrawCard(state, payload);
      }
      return state;
    default:
      return state;
    }
}

function wrap(func, dispatch) {
  return function(...args) {
    dispatch(func(...args));
  }
}

export default function useGameState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, {
    startGame: wrap(startGame, dispatch),
    selectPile: wrap(selectPile, dispatch),
    selectMyCard: wrap(selectMyCard, dispatch),
    playCard: wrap(playCard, dispatch),
    discardCard: wrap(discardCard, dispatch),
    drawCard: wrap(drawCard, dispatch),
  }];
}
