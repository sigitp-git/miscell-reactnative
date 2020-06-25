import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ResultsList = ({ header, results }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{header}</Text>
      <Text>{results.length} results</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name} </Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default ResultsList
