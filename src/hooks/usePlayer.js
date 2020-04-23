import { useState, useEffect, useRef } from 'react'
export function usePlayer(ref) {
  const [selectedTrack, setSelectedTrack] = useState('sa')
  const [player, setPlayer] = useState('stopped')
  const [features, setFeatures] = useState({ currentTime: '', duration: '' })

  const usePrevious = value => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef()
    // Store current value in ref
    useEffect(() => {
      ref.current = value
    }, [value]) // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current
  }
  const prevPlayer = usePrevious(player)
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
    const sadeghi =
      'https://dls.music-fa.com/tagdl/99/Reza%20Sadeghi%20-%20Ye%20Chizi%20Mishe%20Dige%20(128).mp3'
    const homayoon =
      'https://dls.music-fa.com/tagdl/downloads/Homayoun%20Shajarian%20-%20Abr%20Mibarad%20(128).mp3'
    const gogoosh =
      'http://dl.vblogit.ir/googoosh/Googoosh%20-%202%20Panjereh/06%20-%202%20Panjereh.mp3'
    let track

    switch (selectedTrack) {
      case 'sadeghi':
        track = sadeghi
        break
      case 'homayoon':
        track = homayoon
        break
      case 'gogoosh':
        track = gogoosh
      default:
        break
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
