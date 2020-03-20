import { useState, useEffect } from 'react'
import axios from 'axios'
export function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await axios.get(url)
      setLoading(false)
      console.log(response.data.data)
      setData(response.data.data)
    })()
  }, [])

  return [data, isLoading]
}
