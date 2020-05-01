import { useState, useEffect } from 'react'
export function usePlayer(ref) {
  const [selectedTrack, setSelectedTrack] = useState({})
  const [player, setPlayer] = useState('stopped')
  const [features, setFeatures] = useState({ currentTime: '', duration: '' })

  // const usePrevious = value => {
  //   // The ref object is a generic container whose current property is mutable ...
  //   // ... and can hold any value, similar to an instance property on a class
  //   const ref = useRef()
  //   // Store current value in ref
  //   useEffect(() => {
  //     ref.current = value
  //   }, [value]) // Only re-run if value changes
  //   // Return previous value (happens before update in useEffect above)
  //   return ref.current
  // }
  // const prevPlayer = usePrevious(player)
  useEffect(() => {
    ref.current.addEventListener('timeupdate', e => {
      setFeatures({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      })
    })
    return () => ref.current.removeEventListener('timeupdate', () => {})
  }, [])
  useEffect(() => {
    let track
    if (typeof selectedTrack === 'string') {
      track = selectedTrack
    }
    if (track) {
      ref.current.src = track
      setTimeout(() => {
        setPlayer('playing')
        setFeatures({ duration: ref.current.duration })
      })
    }
  }, [selectedTrack])
  useEffect(() => {
    if (player === 'paused') {
      ref.current.pause()
    } else if (player === 'stopped') {
      ref.current.pause()
      ref.current.currentTime = 0
      setSelectedTrack({ selectedTrack: null })
      // && prevPlayer === 'paused'
    } else if (player === 'playing') {
      ref.current.play()
    }
  }, [player])

  return { selectedTrack, player, features, setSelectedTrack, setPlayer }
}
