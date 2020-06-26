import { useState } from 'react'
import yelp from '../api/yelp'

const useDetails = () => {
  const [detail, setDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // returns single object instead of array of objects
  const getDetail = async (id) => {
    try {
      const response = await yelp.get(`/${id}`)
      setDetail(response.data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(true)
    }
  }

  return [detail, isLoading, getDetail]
}

export default useDetails
