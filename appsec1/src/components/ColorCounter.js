import React from 'react'
import { Text, StyleSheet, Button, View } from 'react-native'

const ColorCounter = (props) => {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`} onPress={props.onSubmitInc}></Button>
      <Button title={`Decrese ${props.color}`} onPress={props.onSubmitDesc}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default ColorCounter
