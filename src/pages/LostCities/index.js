import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectPile, selectDeck, selectMyCard, playCard, discardCard, drawCard, startGame} from '../../state/lostcities';
import {Button} from '@material-ui/core';
import Layout from '../Layout';

const colors = [
  '#AAAA00',
  'blue',
  'black',
  'green',
  'red'
];

function hasVal(val) {
  return val || val === 0;
}

class MiniCard extends Component {

  render(){
    const { card } = this.props;
    // console.log('minicard', card);
    const style = {
      backgroundColor: this.props.backgroundColor || '#FAFBE6',
      border : '1px solid ' + colors[card.suit],
      color: colors[card.suit]
    };

    return(
      <div className="lostcities-minicard" style={style}>
        <span>{card.value || '$'}</span>
      </div>
    );
  }
}

class LCCard extends Component {

  render(){
    const style = {
      backgroundColor: this.props.backgroundColor || '#FAFBE6'
    };
    if(this.props.canClick){
      style.cursor = 'pointer';
    }
    if(this.props.selected){
      style.boxShadow = '0 4px 5px 0 rgba(255,0,0,.34),0 1px 10px 0 rgba(255,0,0,.72),0 2px 4px -1px rgba(0,0,0,.2)';
    }
    return(
      <div className="mdl-shadow--4dp lostcities-card lostcities-card-front" style={style} onClick={this.props.onClick}>
        <div className="lostcities-number" style={{color: colors[this.props.suit]}}>
          {this.props.value || '$'}
        </div>
        <div className="lostcities-name">
         {this.props.name}
        </div>
      </div>
    );
  }
}


class LostCities extends Component {

  render() {

    const { game } = this.props;

    console.log('LC', game);
    const controlBtnStyle = {float:'left', marginLeft: '5px'};
    let controls = (
      <div>
        <Button color="primary" style={controlBtnStyle} variant="contained" onClick={this.props.playCard} disabled={!hasVal(game.selectedCard) || !game.canPlaceCard} key="playBtn">Play Card</Button>
        <Button color="primary" style={controlBtnStyle} variant="contained" onClick={this.props.discardCard} disabled={!hasVal(game.selectedCard)} key="discardBtn">Discard</Button>
      </div>
    );

    if(game.phase === 'draw') {
      controls = (
        <div>
          <Button color="primary" style={controlBtnStyle} variant="contained" onClick={this.props.drawCard} disabled={!hasVal(game.selectedPile)}>Draw Card</Button>
        </div>
      );
    } else if (game.phase === 'gameover') {
      controls = (
        <div>
          <Button color="primary" style={controlBtnStyle} variant="contained" onClick={this.props.startGame}>New Game</Button>
        </div>
      );
    }

    //debugging
    window.game = game;

    const output = (
        <div>
          <div>
          {game.p2Cards.map((lcc, i) => {
            return game.phase === 'gameover' ? <LCCard value={lcc.value} suit={lcc.suit} key={"oppcard" + i} /> : '';
          })}
          </div>
          <div style={{width:'100%', float: 'left'}}/>
          <div>
            <div className="mdl-shadow--4dp lostcities-card lostcities-deck" style={{boxShadow: game.selectedPile === -1 ? 'red 0px 0px 10px 5px' : undefined }} onClick={() => this.props.selectPile(-1)}>
              <div>deck</div>
              <div>{game.deck.length}</div>
            </div>
            <div className="lostcities-p2box" style={{float: 'left'}}>
            Opponent Score: {game.p2Score}
              <div>
              <div style={{float: 'left'}}>Opp discard:</div>
              {game.p2Discard.map((mc, i) => {
                return <MiniCard card={mc} key={"mc" + i} />;
              })}
              </div>
            </div>
          </div>
          <div style={{width:'100%', float: 'left'}}/>
          <div style={{width: '100%'}}>
            {colors.map((c, i) => {
              const style = {border: '3px solid ' + c};
              if(i === game.selectedPile) {
                style.boxShadow = c + ' 0px 0px 10px 5px';
              }
              const cardForPile = game.piles[i][game.piles[i].length - 1];
              const extras = game.piles[i].map(c => c.value || '$');
              extras.pop();
              extras.reverse();
              const extrasDisplay = extras.join(', ');
              return (
              <div className="lostcities-pilecontainer" key={'container' + i}>
                <div>
                {game.p2Piles[i].map((mc, j) => {
                  return <MiniCard card={mc} key={"mc" + j} />;
                })}
                </div>
                <div className="lostcities-pile" style={style} onClick={() => this.props.selectPile(i)} key={i}>
                {cardForPile ? (<LCCard value={cardForPile.value} selected={false} suit={cardForPile.suit} />) : ''}
                {extrasDisplay}
                </div>
                <div>
                {game.myPiles[i].map((mc, j) => {
                  return <MiniCard card={mc} key={"mc" + j} />;
                })}
                </div>
              </div>
              );
            })}
          </div>
          <div style={{width:'100%', float: 'left'}}/>
          <div>
          {game.myCards.map((lcc, i) => {
            let selected = false;
            if(i === game.selectedCard) {
              selected = true;
            }
            return <LCCard value={lcc.value} selected={selected} suit={lcc.suit} key={"mycard" + i} onClick={() => this.props.selectMyCard(i)} />;
          })}
          </div>
          <div style={{width:'100%', float: 'left'}}/>
          <div style={{width:'100%', float: 'left'}}>
          My Score: {game.myScore}
          </div>
          <div style={{width:'100%', float: 'left'}}/>
          {controls}
        </div>
      );

    return (
      <Layout>
        <div style={{margin: '6px'}}>
          {output}
        </div>
        <div style={{width:'100%', float: 'left'}}/>
      </Layout>
    );
  }
}


function mapStateToProps(state) {
  const { lostcities } = state;

  return {
    game: lostcities
  };
}


export default connect(mapStateToProps, {selectPile, selectDeck, selectMyCard, playCard, discardCard, startGame, drawCard})(LostCities);
