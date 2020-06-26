import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const searchApi = async (search) => {
    try {
      const response = await yelp.get('/search', {
        // axios params baseURL/search/?limit=50&term
        params: {
          limit: 50,
          term: search,
          location: 'Plano, TX',
        },
      })
      setResults(response.data.businesses)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(true)
    }
  }

  useEffect(() => {
    searchApi('steak')
  }, [])

  return [searchApi, results, isLoading]
}
