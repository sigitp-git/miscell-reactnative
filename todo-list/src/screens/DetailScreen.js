import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/TodoContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// props.navigation from createStackNavigator in App.js
const DetailScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(Context)

  const todo = state.find((item) => item.id === navigation.getParam('id'))

  return (
    <View style={styles.detailStyle}>
      <Text style={styles.textStyle}>Title: {todo.title}</Text>
      <Text style={styles.textStyle}>Detail: {todo.detail}</Text>
    </View>
  )
}

DetailScreen.navigationOptions = ({ navigation }) => {
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Edit', { id: navigation.getParam('id') })
          }
        >
          <MaterialCommunityIcons
            name='square-edit-outline'
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
  },
  detailStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
})

export default DetailScreen
