import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const allSongs = props.songs.map(song => {
    return <Song song={song} key={song.id} handleClick={props.handleClick} />
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {allSongs}

      </tbody>
    </table>
  )
}

export default SongList;
