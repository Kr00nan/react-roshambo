import React from 'react';

const PlayerCard = ({color, symbol}) => {
  const style = { backgroundColor: color }
  return (
    <div style={ style } className='player-card'>{ symbol }</div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.symbols = ['paper', 'rock', 'scissors'];
  }

  startGame = () => {
    const index = Math.floor(Math.random()*3);
    console.log(this.symbols[index]);
  }

  render() {
    return (
      <div className='App'>
        <PlayerCard color='red' symbol='paper'/>
        <PlayerCard color='blue' symbol='rock'/>
        <button onClick={this.startGame}>Run Game</button>
      </div>
    )
  }
}

export default App;
