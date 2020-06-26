import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  // term is not part of the useResults hooks because term is input
  // for the useResults hooks, not internal to the hooks
  const [term, setTerm] = useState('')
  const [searchApi, results, status] = useResults()

  const filterByPrice = (price) =>
    results.filter((result) => result.price === price)

  return (
    // react wrapper (instead of View) is best practice for ScrollView parent
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {!!status ? <Text>Network error, try again later</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList header='Deals' results={filterByPrice('$')} />
        <ResultsList header='Enjoy' results={filterByPrice('$$')} />
        <ResultsList header='Lux' results={filterByPrice('$$$')} />
        <ResultsList header='Lux+' results={filterByPrice('$$$$')} />
      </ScrollView>
    </>
  )
}

export default SearchScreen
