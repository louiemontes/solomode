import React from 'react';
import useGameState from './state';
import {RadioGroup, Radio, Button, FormControlLabel} from '@material-ui/core';
import Layout from '../Layout';


function PropCard (props) {
  const style = {
    backgroundColor: props.backgroundColor || '#EFEBD6'
  };

  if(props.canClick){
    style.cursor = 'pointer';
  }
  if(props.check){
    style.boxShadow = '0 4px 5px 0 rgba(0,255,0,.14),0 1px 10px 0 rgba(0,255,0,.72),0 2px 4px -1px rgba(0,0,0,.2)';
  }
  if(props.selected){
    style.boxShadow = '0 4px 5px 0 rgba(255,0,0,.14),0 1px 10px 0 rgba(255,0,0,.72),0 2px 4px -1px rgba(0,0,0,.2)';
  }
  return(
    <div className="mdl-shadow--4dp forsolitaire-card" style={style} onClick={props.onClick}>
      <div className="forsolitaire-number">
        {props.value}
      </div>
      <div className="forsolitaire-name">
        {props.name}
      </div>
    </div>
  );
}


export default function ForSolitaire () {
  const [game, {selectBid, placeBid, selectProp, sellProp, nextSell, startGame}] = useGameState();

  //debugging
  window.game = game;

  let output = (<h2>{game.phase}</h2>);

  if(game.phase === 'buy'){
    output = (
      <div>
        <div style={{fontSize: '2em'}}>
          Round: {game.round}
        </div>
        <div>
          My Coins: {game.myCoins}
        </div>
        <div>
          {`Jessica's Bid: ${game.jessCoins}`}
        </div>
        <div>
        {game.marketProps.map((prop, i) => {
          return <PropCard value={prop.value} name={prop.name} key={"propcard" + i} />;
        })}
        </div>
        <div style={{width:'100%', float: 'left'}}/>
        <div>
          <RadioGroup name="bids" onChange={(evt, val) => selectBid(parseInt(val,10))} value={'' + game.selectedBid}  style={{display: 'block'}}>
          {game.availableBids.map((bid, i) => {
            return <FormControlLabel value={'' + bid} key={i} control={<Radio color="primary" />} label={'' + bid} />; //style={{float:'left', margin: '5px', width:'auto'}}/>;
            // return <Radio value={'' + bid} key={i} label={'' + bid} style={{float:'left', margin: '5px', width:'auto'}}/>;
          })}
          </RadioGroup>
          <div style={{width:'100%', float: 'left'}}/>
          <Button color="primary" variant="contained" onClick={evt => placeBid(game.selectedBid)}style={{float:'left', marginLeft: '5px'}} disabled={!game.selectedBid && game.selectedBid !== 0}>Place Bid</Button>
        </div>
      </div>
    );
  }
  else if(game.phase === 'sell'){
    output = (
      <div>
        <div style={{fontSize: '2em'}}>
          Round: {game.round}
        </div>
        <div>
        {game.marketChecks.map((check, i) => {
          return <PropCard value={check.value} name="check $" check={true} key={"check" + i} />;
        })}
        </div>
        <div style={{width:'100%', float: 'left'}}/>
        <div>
          {game.myProps.map((prop, i) => {
            return <PropCard selected={game.selectedProp === prop.value} value={prop.value} name={prop.name} onClick={evt => selectProp(prop.value)} canClick={true} key={"propcard" + i}/>;
          })}
          <div style={{width:'100%', float: 'left'}}/>
          <Button color="primary" variant="contained" onClick={evt => sellProp(game.selectedProp)} style={{float:'left'}} disabled={!game.selectedProp} >Sell Property</Button>
        </div>
      </div>
    );
  }
  else if(game.phase === 'sellResult'){
    let unsoldProp = <div/>;
    if(game.jessUnsoldProp){
      unsoldProp = (
        <div>
          <span style={{float:'left'}}>{`Jessica's unsold property:`}</span>
          <div>
            <PropCard value={game.jessUnsoldProp.value} name={game.jessUnsoldProp.name}/>
          </div>
        </div>
      );
    }
    output = (
      <div>
        <div>
          Round: {game.round}
        </div>
        <div style={{width:'100%', float: 'left'}}/>
        <div>
          <span style={{float:'left'}}>Me:</span>
          <div>
            <PropCard value={game.myCheckReward.value} name="check $" check={true}/>
            <PropCard value={game.mySoldProp.value} name={game.mySoldProp.name}/>
          </div>
        </div>
        <div style={{width:'100%', float: 'left'}}/>
        <div>
          <span style={{float:'left'}}>Jessica:</span>
          <div>
            <PropCard value={game.jessCheckReward.value} name="check $" check={true}/>
            <PropCard value={game.jessSoldProp.value} name={game.jessSoldProp.name}/>
          </div>
        </div>
        <div style={{width:'100%', float: 'left'}}/>
        {unsoldProp}
        <div style={{width:'100%', float: 'left'}}/>
        <div>
          <Button
            color="primary"
            variant="contained"
            onClick={evt => nextSell()} style={{float:'left'}}
          >
            Next Round
          </Button>
        </div>
      </div>
    );
  }
  else if(game.phase === 'gameover'){
    output = (
      <div>
        <div>
          <h3>{(game.winner ? 'Winner !' : 'You lose !')}</h3>
        </div>
        <div style={{width:'100%', float: 'left'}}/>
        <div>
          <PropCard value={game.myScore} name="My $" check={game.winner} selected={!game.winner}/>
          <PropCard value={game.jessScore} name="Jessica $" check={!game.winner} selected={game.winner}/>
        </div>
        <div style={{width:'100%', float: 'left'}}/>
        <div>
          <Button color="primary" variant="contained" onClick={evt => startGame()} style={{float:'left'}}>New Game</Button>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div style={{margin: '6px'}}>
        {output}
      </div>
    </Layout>
  );
  
}
