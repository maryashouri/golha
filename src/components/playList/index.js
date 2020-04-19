import React from 'react'
import { LazyList, ListItem } from 'react-onsenui'

import './style.scss'

const PlayList = ({ item }) => {
  const list = [
    {
      id: 1,
      persianTitle: 'رضا  صادقی',
      title: 'sadeghi',
      trackName: 'یه چیزی میشه دیگه'
    },
    {
      id: 2,
      persianTitle: 'همایون شجریان',
      title: 'homayoon',
      trackName: 'ابر میبارد'
    },
    { id: 3, persianTitle: 'گوگوش', title: 'gogoosh', trackName: 'دو پنجره' }
  ]

  // const { setSelectedTrack, selectedTrack } = usePlayer(itemRef)

  return (
    <div style={{ textAlign: 'center' }}>
      <LazyList
        modifier="inset"
        length={list.length}
        renderRow={index => (
          <ListItem onClick={() => item(list[index].title)} key={index}>
            <div className="list-item">
              <div> {list[index].trackName}</div>
              <div className="list-item__singer">
                {list[index].persianTitle}
              </div>
            </div>
          </ListItem>
        )}
        calculateItemHeight={() => 44}
      />
    </div>
  )
}

export default PlayList

// const srcListPlayer = [
//   {
//     src:
//       'https://dls.music-fa.com/tagdl/99/Reza%20Sadeghi%20-%20Ye%20Chizi%20Mishe%20Dige%20(128).mp3',
//     title: 'sadeghi'
//   },
//   {
//     src:
//       'https://dls.music-fa.com/tagdl/downloads/Homayoun%20Shajarian%20-%20Abr%20Mibarad%20(128).mp3',
//     title: 'homayoon'
//   },
//   {
//     src:
//       'http://dl.musicdam.ir/Downloads/mp3/Googoosh%20-%20Do%20Panjereh%20.mp3',
//     title: 'gogoosh'
//   }
// ]
// let track
// srcListPlayer.map(item => {
//   if (item.title == selectedTrack) {
//     track = item.src
//   }

//   if (track) {
//     ref.current.src = track
//     ref.current.play()
//     setPlayer('playing')
//     setFeatures({ duration: ref.current.duration })
//   }
// })
