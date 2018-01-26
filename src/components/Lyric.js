import React from 'react';

class Lyric extends React.Component {
  render() {
    return (
      <p>
        {this.props.details.lyrics}
        <span>{this.props.details.singerAndSong}</span>
      </p>
    )
  }
}

export default Lyric;
