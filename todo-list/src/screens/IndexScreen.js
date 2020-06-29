import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native'
import { Context } from '../context/TodoContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const IndexScreen = () => {
  const { state, dispatch } = useContext(Context)
  return (
    <>
      <Button title='Add Todo' onPress={() => dispatch({ type: 'CREATE' })} />
      <FlatList
        data={state}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.textStyle}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch({ type: 'DELETE', id: item.id })}
              >
                <MaterialCommunityIcons
                  name='delete-forever-outline'
                  size={24}
                  color='black'
                />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
})

export default IndexScreen
