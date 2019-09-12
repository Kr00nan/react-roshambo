import React from 'react';
import './App.css';

const PlayerChoice = ({color, choice}) => {
  const style = { backgroundColor: color,
                  backgroundImage: 'url(./img/' + choice + '.png)' };
  return (
    <div style={ style } className='player-icon'></div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.choices = ['paper', 'rock', 'scissors'];
    this.state = {};
  }

  decideWinner = () => {
    const { playerOne, playerTwo } = this.state;
    if ( playerOne === playerTwo ) {
      return 'It\'s a draw!';
    }
    if ((playerOne === 'rock' && playerTwo === 'scissors') ||
        (playerOne === 'paper' && playerTwo === 'rock') ||
        (playerOne === 'scissors' && playerTwo === 'paper')) {
          return 'Player One is the winner!';
        }
    return 'Player Two is the winner!';
  }

  startGame = () => {
    let counter = 0;
    let myInterval = setInterval(() => {
      counter++;
      this.setState({
        playerOne: this.choices[Math.floor(Math.random()*3)],
        playerTwo: this.choices[Math.floor(Math.random()*3)],
        winner: ''
      })
      if (counter > 10) {
        clearInterval(myInterval);
        this.setState({ winner: this.decideWinner });
      }
    }, 100);
  }

  render() {
    return (
      <div>
        <PlayerChoice color='firebrick' choice={ this.state.playerOne }/>
        <PlayerChoice color='cadetblue' choice={ this.state.playerTwo }/>
        <p>{ this.state.winner }</p>
        <button onClick={ this.startGame }>Run Game</button>
      </div>
    );
  }
}

export default App;
