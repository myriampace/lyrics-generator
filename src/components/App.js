import React from 'react';
import Lyric from './Lyric';
import lyrics from '../lyrics';

class App extends React.Component {

  state = {};

  componentWillMount() {
    this.generateLyrics();
  }

  generateLyrics = event => {
    // Transform Object into Array
    const keyArray = Object.keys(lyrics);
    // Random lyrics
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    if(this.state.lyrics === lyrics[randomKey].lyrics) {
      this.generateLyrics();
      return;
    }
    this.setState(lyrics[randomKey]);
  };

  render () {
    return (
      <div>
        <Lyric details={this.state} />
        <button onClick={e => this.generateLyrics(e)}>New Lyrics</button>
      </div>

    )
  }
}

export default App;
