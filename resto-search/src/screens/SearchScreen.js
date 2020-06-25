import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {!!status ? <Text>Network error, try again later</Text> : null}
      <Text style={styles.textStyle}>{results.length} results found</Text>
      <ResultsList header='Save' results={filterByPrice('$')} />
      <ResultsList header='Medium' results={filterByPrice('$$')} />
      <ResultsList header='Lux' results={filterByPrice('$$$')} />
      <ResultsList header='Lux+' results={filterByPrice('$$$$')} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
  },
})

export default SearchScreen
