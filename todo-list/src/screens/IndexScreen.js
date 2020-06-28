import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/Context'

const IndexScreen = () => {
  const { state, dispatch } = useContext(Context)
  return (
    <>
      <Text style={styles.textStyle}>Index Screen</Text>
      <Button title='Add Todo' onPress={() => dispatch({ type: 'CREATE' })} />
      <FlatList
        data={state}
        keyExtractor={(todo) => todo.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default IndexScreen
