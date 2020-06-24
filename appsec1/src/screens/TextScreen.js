import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {
  const [text, setText] = useState('')

  return (
    <View>
      <Text>Enter Password: </Text>
      <TextInput
        style={styles.textInput}
        placeholder='test'
        autoCapitalize='none'
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => setText(newValue)}
      />
      <Text>The password is {text}</Text>
      { text.length < 5 && <Text>Password needs to be longer than 5</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 30,
  },
})

export default TextScreen
