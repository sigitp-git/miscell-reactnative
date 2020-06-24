import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Sigit's App</Text>
      <Button onPress={() => navigation.navigate('Components')} title='Components Demo' />
      <Button onPress={() => navigation.navigate('List')} title='List Demo' />
      <Button onPress={() => navigation.navigate('Image')} title='Image Demo' />
      <Button onPress={() => navigation.navigate('Counter')} title='Counter Demo' />
      <Button onPress={() => navigation.navigate('Color')} title='Color Demo' />
      <Button onPress={() => navigation.navigate('Square')} title='Square Color Demo' />
      <Button onPress={() => navigation.navigate('Text')} title='Text Screen Demo' />
      <Button onPress={() => navigation.navigate('Box')} title='Box Screen Demo' />
      <Button onPress={() => navigation.navigate('Box2')} title='Box2 Screen Demo' />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
