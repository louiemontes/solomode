import React from 'react';
import useGameState from '../../state/tictactoe';
import { Button } from '@material-ui/core';
import Layout from '../Layout';
import { ticTacToeSpace } from '../../lib/styles';
import { includes } from 'lodash';


export default function TicTacToe () {
  const [game, {markSquare, startGame}] = useGameState();
  // destructuring
  const { board, winningLocations } =  game;
  const regShadow = "0 3px 5px 2px rgba(255, 105, 135, .30)";
  const specShadow = "gold 0px 0px 10px 5px";
  
  return (
    <Layout>
      <b>{game.statusMessage}</b>
      <div className="TicTacToeSpace">
        <svg>
          
        </svg>
      </div>
        <Button color="primary" variant="contained" onClick={startGame} disabled={!game.winner} style={{marginTop: "50px", marginBottom: "50px"}}>Start over?</Button>

    </Layout>
  );
  
}
