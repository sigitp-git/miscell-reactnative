import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')

  return (
    <View>
      <Text style={styles.textStyle}>{term}</Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log(term)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
  },
})

export default SearchScreen
