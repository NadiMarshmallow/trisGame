import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
      ],
      writeX: true
    }

    for (let i = 0; i < 9; i++) {

      this.state.board.push(
        {
          idx: i,
          val: ""
        }
      )
    }
  }


  play(idx) {
    const text = this.state.writeX ? 'X' : 'O';
    const board = this.state.board;
    if (board[idx].val != "") {
      return;
    }

    board[idx].val = text;
    this.setState({
      board: board,
      writeX: !this.state.writeX
    });


    if (
      (board[0].val.valueOf() !== '' && board[0].val.valueOf() === board[1].val.valueOf() && board[0].val.valueOf() === board[2].val.valueOf()) ||
      (board[3].val.valueOf() !== '' && board[3].val.valueOf() === board[4].val.valueOf() && board[3].val.valueOf() === board[5].val.valueOf()) ||
      (board[6].val.valueOf() !== '' && board[6].val.valueOf() === board[7].val.valueOf() && board[6].val.valueOf() === board[8].val.valueOf()) ||

      (board[0].val.valueOf() !== '' && board[0].val.valueOf() === board[3].val.valueOf() && board[0].val.valueOf() === board[6].val.valueOf()) ||
      (board[1].val.valueOf() !== '' && board[1].val.valueOf() === board[4].val.valueOf() && board[1].val.valueOf() === board[7].val.valueOf()) ||
      (board[2].val.valueOf() !== '' && board[2].val.valueOf() === board[5].val.valueOf() && board[2].val.valueOf() === board[8].val.valueOf()) ||


      (board[0].val.valueOf() !== '' && board[0].val.valueOf() === board[4].val.valueOf() && board[0].val.valueOf() === board[8].val.valueOf()) ||
      (board[2].val.valueOf() !== '' && board[2].val.valueOf() === board[4].val.valueOf() && board[2].val.valueOf() === board[6].val.valueOf())
    ) {
      alert('Hai vinto')
      return;

    }

  }


  render() {
    return (
      <>
        {this.state.writeX ? 'giocatore X' : 'giocatore O'}
        <div className="container">
          <div className="colonna">
            <div className="cella" onClick={() => { this.play(0) }}>
              {this.state.board[0].val}
            </div>
            <div className="cella" onClick={() => { this.play(3) }}>
              {this.state.board[3].val}
            </div>
            <div className="cella" onClick={() => { this.play(6) }}>
              {this.state.board[6].val}
            </div>
          </div>


          <div className="colonna">
            <div className="cella" onClick={() => { this.play(1) }}>
              {this.state.board[1].val}
            </div>
            <div className="cella" onClick={() => { this.play(4) }}>
              {this.state.board[4].val}
            </div>
            <div className="cella" onClick={() => { this.play(7) }}>
              {this.state.board[7].val}
            </div>
          </div>

          <div className="colonna">
            <div className="cella" onClick={() => { this.play(2) }}>
              {this.state.board[2].val}
            </div>
            <div className="cella" onClick={() => { this.play(5) }}>
              {this.state.board[5].val}
            </div>
            <div className="cella" onClick={() => { this.play(8) }}>
              {this.state.board[8].val}
            </div>
          </div>

        </div>

        <button onClick="reset">Ricomincia la partita</button>

      </>
    );

  }


}

export default App;
