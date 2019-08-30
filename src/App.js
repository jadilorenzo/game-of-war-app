import React from 'react';
import './App.css';
import Game from './models/Game';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: new Game('bill', 'bob')
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
