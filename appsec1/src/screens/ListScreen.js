import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'friend one', age: 20 },
    { name: 'friend two', age: 20 },
    { name: 'friend 3', age: 20 },
    { name: 'friend 4', age: 20 },
    { name: 'friend 5', age: 20 },
    { name: 'friend 6', age: 20 },
    { name: 'friend 7', age: 20 },
    { name: 'friend 8', age: 20 },
    { name: 'friend 9', age: 20 },
    { name: 'friend 10', age: 20 },
  ]
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}, age: {item.age}</Text>
      }}
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 50,
  },
})

export default ListScreen
