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
