import React from 'react';

const PlayerCard = ({color, symbol}) => {
  const style = { backgroundColor: color,
                  backgroundImage: 'url(./img/' + symbol + '.png)' }
  return (
    <div style={ style } className='player-card'>{ symbol }</div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.symbols = ['paper', 'rock', 'scissors'];
    this.state = {};
  }

  startGame = () => {
    this.setState({
      playerRed: this.symbols[Math.floor(Math.random()*3)],
      playerBlue: this.symbols[Math.floor(Math.random()*3)]
    });
  }

  render() {
    return (
      <div className='App'>
        <PlayerCard color='red' symbol={this.state.playerRed}/>
        <PlayerCard color='blue' symbol={this.state.playerBlue}/>
        <button onClick={this.startGame}>Run Game</button>
      </div>
    )
  }
}

export default App;
