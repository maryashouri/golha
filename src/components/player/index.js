import React, { useRef } from 'react'
import PlayList from '../playList/index'
import { usePlayer } from '../../hooks/usePlayer'

const Player = () => {
  let ref = useRef()
  const { player, features, setPlayer, setSelectedTrack } = usePlayer(ref)

  function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      )
    }
  }

  const currentTime = getTime(features.currentTime)
  const duration = getTime(features.duration)

  return (
    <>
      <h1>My Little Player</h1>
      <PlayList item={setSelectedTrack} />
      <div>
        {player === 'paused' && (
          <button onClick={() => setPlayer('playing')}>Play</button>
        )}
        {player === 'playing' && (
          <button onClick={() => setPlayer('paused')}>Pause</button>
        )}
        {player === 'playing' || player === 'paused' ? (
          <button onClick={() => setPlayer('stopped')}>Stop</button>
        ) : (
          ''
        )}
      </div>
      {(player === 'playing' || player === 'paused') && duration ? (
        <div>
          {currentTime} / {duration}
        </div>
      ) : (
        ''
      )}

      <audio ref={ref} />
    </>
  )
}

export default Player
