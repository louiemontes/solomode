import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startGame, markSquare} from '../../state/tictactoe';
import {RadioGroup, Radio, Button, FormControlLabel} from '@material-ui/core';
import Layout from '../Layout';


function mapStateToProps(state) {
  const { tictactoe } = state;

  return {
    game: tictactoe
  };
}

class TicTacToe extends Component {
  render () {

    const { board } =  this.props.game;


    return (
      <Layout>
        <table style={{border: "3px solid #F0"}}>
          <tbody>
            <tr>
              <td onClick={() => this.props.markSquare(0)}>{board[0]}</td>
              <td onClick={() => this.props.markSquare(1)}>{board[1]}</td>
              <td onClick={() => this.props.markSquare(2)}>{board[2]}</td>
            </tr>
            <tr>
              <td onClick={() => this.props.markSquare(3)}>{board[3]}</td>
              <td onClick={() => this.props.markSquare(4)}>{board[4]}</td>
              <td onClick={() => this.props.markSquare(5)}>{board[5]}</td>
            </tr>
            <tr>
              <td onClick={() => this.props.markSquare(6)}>{board[6]}</td>
              <td onClick={() => this.props.markSquare(7)}>{board[7]}</td>
              <td onClick={() => this.props.markSquare(8)}>{board[8]}</td>
            </tr>
          </tbody>
        </table>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, {startGame, markSquare})(TicTacToe);
