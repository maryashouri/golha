import  { useState, useEffect } from 'react'
import axios from 'axios'
export function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await axios.get(url)
      const response2 = await axios.get(url)
      const response3 = await axios.get(url)
      const response4 = await axios.get(url)
      setLoading(false)
      setData([
        ...response.data.data,
        ...response2.data.data,
        ...response3.data.data,
        ...response4.data.data
      ])
    })()
  }, [])

  return [data, isLoading]
}
