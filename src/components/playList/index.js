import React, { useState } from 'react'
import { LazyList, ListItem, Button } from 'react-onsenui'
import AudioPlayer from 'react-playlist-player'

import './style.scss'

const PlayList = ({ item }) => {
  const list = [
    {
      id: 1,
      persianTitle: 'رضا  صادقی',
      title: 'sadeghi',
      trackName: 'یه چیزی میشه دیگه',
      src:
        'https://dls.music-fa.com/tagdl/99/Reza%20Sadeghi%20-%20Ye%20Chizi%20Mishe%20Dige%20(128).mp3'
    },
    {
      id: 2,
      persianTitle: 'همایون شجریان',
      title: 'homayoon',
      trackName: 'ابر میبارد',
      src:
        'https://dls.music-fa.com/tagdl/downloads/Homayoun%20Shajarian%20-%20Abr%20Mibarad%20(128).mp3'
    },
    {
      id: 3,
      persianTitle: 'گوگوش',
      title: 'gogoosh',
      trackName: 'دو پنجره',
      src:
        'http://dl.vblogit.ir/googoosh/Googoosh%20-%202%20Panjereh/06%20-%202%20Panjereh.mp3'
    }
  ]

  const addTrackToPlaylist = track => {
    setArr(arr.concat({ songUrl: track.src, songName: track.title }))
  }
  const [currentPlayList, setCurrentPlayList] = useState({})
  const [arr, setArr] = useState([])
  const loadPlayList = () => {
    setCurrentPlayList({
      playlistCoverUrl:
        'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      playlistName: 'playlist name',
      bandName: 'band name',
      songs: arr,
      type: 'album'
    })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <LazyList
        modifier="inset"
        length={list.length}
        renderRow={index => (
          <ListItem onClick={() => item(list[index].src)} key={index}>
            <div className="list-item">
              <div className="list-item__detail"> {list[index].trackName}</div>
              <Button
                modifier="material--flat"
                onClick={() => addTrackToPlaylist(list[index])}
              >
                {' '}
                ...افزودن به لیست
              </Button>
              <div className="list-item__singer list-item__detail">
                {list[index].persianTitle}
              </div>
            </div>
          </ListItem>
        )}
        calculateItemHeight={() => 44}
      />
      <Button className={'Demo__load-btn'} onClick={loadPlayList}>
        load playlist
      </Button>
      <AudioPlayer
        currentPlayList={currentPlayList}
        onToggle={({ audioPlaying }) => console.log({ audioPlaying })}
      />
    </div>
  )
}

export default PlayList
