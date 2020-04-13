import React, { useEffect, useState, useRef } from 'react'

const Player = () => {
  const [selectedTrack, setSelectedTrack] = useState('null')
  const [player, setPlayer] = useState('stopped')
  const [features, setFeatures] = useState({ currentTime: '', duration: '' })
  function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      )
    }
  }

  const ref = useRef(null)
  useEffect(() => {
    ref.current.addEventListener('timeupdate', e => {
      setFeatures({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      })
    })
    return () => ref.current.removeEventListener('timeupdate', () => {})
  }, [selectedTrack])

  useEffect(() => {
    const campfireStory =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    const bootingUp =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    let track
    switch (this.state.selectedTrack) {
      case 'Campfire Story':
        track = campfireStory
        break
      case 'Booting Up':
        track = bootingUp
        break
      default:
        break
    }
    if (track) {
      ref.current.src = track
      ref.current.play()
      setFeatures({ player: 'playing', duration: ref.current.duration })
    }
  }, [selectedTrack])
  useEffect(() => {
    if (player === 'paused') {
      ref.current.pause()
    } else if (player === 'stopped') {
      ref.current.pause()
      ref.current.currentTime = 0
      this.setState({ selectedTrack: null })
    } else if (
      player === 'playing'
      // prevState.player === "paused"
    ) {
      ref.current.play()
    }
  }, [player])
  const list = [
    { id: 1, title: 'Campfire Story' },
    { id: 2, title: 'Booting Up' }
  ].map(item => {
    return (
      <li
        key={item.id}
        onClick={() => setSelectedTrack({ selectedTrack: item.title })}
      >
        {item.title}
      </li>
    )
  })

  const currentTime = getTime(features.currentTime)
  const duration = getTime(features.duration)

  return (
    <>
      <h1>My Little Player</h1>
      <ul>{list}</ul>
      <div>
        {player === 'paused' && (
          <button onClick={() => setPlayer({ player: 'playing' })}>Play</button>
        )}
        {player === 'playing' && (
          <button onClick={() => setPlayer({ player: 'paused' })}>Pause</button>
        )}
        {player === 'playing' || player === 'paused' ? (
          <button onClick={() => setPlayer({ player: 'stopped' })}>Stop</button>
        ) : (
          ''
        )}
      </div>
      {player === 'playing' || player === 'paused' ? (
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
