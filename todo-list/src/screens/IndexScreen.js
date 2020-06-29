import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Context } from '../context/TodoContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// props.navigation from createStackNavigator in App.js
const IndexScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(Context)
  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.textStyle}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => dispatch({ type: 'DELETE', id: item.id })}
                >
                  <MaterialCommunityIcons
                    name='delete-forever-outline'
                    size={30}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 15,
          width: 120,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <MaterialCommunityIcons
            name='pencil-plus-outline'
            size={30}
            color='black'
          />
        </TouchableOpacity>
      </View>
    ),
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    flexShrink: 1,
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
