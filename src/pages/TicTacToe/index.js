import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startGame, markSquare} from '../../state/tictactoe';
import {RadioGroup, Radio, Button, FormControlLabel} from '@material-ui/core';
import Layout from '../Layout';
import { ticTacToeSpace } from '../../lib/styles';
import { includes } from 'lodash';

function mapStateToProps(state) {
  const { tictactoe } = state;

  return {
    game: tictactoe
  };
}
class TicTacToe extends Component {
  render () {

    // destructuring
    const { game, markSquare } = this.props;
    // 1. var game = this.props.game;
    // 2. var markSquare = this.props.markSquare
    const { board, winningLocations } =  game;
    // 3. var board = game.board;
    // 4. var winningLocations = game.winningLocations;
    const regShadow = "0 3px 5px 2px rgba(255, 105, 135, .30)";
    //let specShadow = "rgba(100, 0, 100, 0.9) 5px 5px 5px 0px";
    const specShadow = "gold 0px 0px 10px 5px";
    return (
      <Layout>
        <b>{game.statusMessage}</b>
        <div className="TicTacToeSpace">
          <div>
            <Button onClick={() => markSquare(0)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 0)? specShadow  : regShadow}}>{board[0]}</Button>
            <Button onClick={() => markSquare(1)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 1)? specShadow  : regShadow}}>{board[1]}</Button>
            <Button onClick={() => markSquare(2)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 2)? specShadow  : regShadow}}>{board[2]}</Button>
          </div>
          <div>
            <Button onClick={() => markSquare(3)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 3)? specShadow  : regShadow}}>{board[3]}</Button>
            <Button onClick={() => markSquare(4)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 4)? specShadow  : regShadow}}>{board[4]}</Button>
            <Button onClick={() => markSquare(5)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 5)? specShadow  : regShadow}}>{board[5]}</Button>
          </div>
          <div>
            <Button onClick={() => markSquare(6)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 6)? specShadow  : regShadow}}>{board[6]}</Button>
            <Button onClick={() => markSquare(7)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 7)? specShadow  : regShadow}}>{board[7]}</Button>
            <Button onClick={() => markSquare(8)} style={{...ticTacToeSpace, boxShadow: includes(winningLocations, 8)? specShadow  : regShadow}}>{board[8]}</Button>
          </div>
        </div>
          <Button color="primary" variant="contained" onClick={this.props.startGame} disabled={!game.winner} style={{marginTop: "50px", marginBottom: "50px"}}>Start over?</Button>

      </Layout>
    )
  }
}
//{this.props.game.statusMessage}
//            <Button color="primary" variant="contained" onClick={this.props.startGame} disabled={!this.props.game.winner}></Button>

export default connect(mapStateToProps, {startGame, markSquare})(TicTacToe);
