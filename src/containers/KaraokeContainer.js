import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';
const url = 'http://localhost:4000/songs'

class KaraokeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [],
      filteredSongs: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        songs: data,
        filteredSongs: data
      })
    })
  }

  handleSearch = (event) => {
    // console.log(event.target.value);
    let searchTerm = event.target.value
    let filterForSongs = this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(searchTerm)
    })
    this.setState({
      searchInput: searchTerm,
      filteredSongs: filterForSongs
    })
  }

  // I know that this method will handle what loads the lyrics into the sidebar, but I'm not sure exactly what to pass to this method in order for its child component to be able to know the lyrics of the song clicked on and display its lyrics
  handleClick = () => {
    // this.setState({
    //   ...this.state,
    //   songs: song.lyrics
    // })
  }

  render() {
    // console.log(this.state.songs);
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearch={this.handleSearch} />
          <SongList songs={this.state.filteredSongs} handleClick={this.handleClick} />
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
