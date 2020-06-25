import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('')

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
      setStatus('')
    } catch (err) {
      setStatus(err)
    }
  }

  useEffect(() => {
    searchApi('plano')
  }, [])

  return [searchApi, results, status]
}
