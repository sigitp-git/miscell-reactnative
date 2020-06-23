import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Text style={styles.textStyle}>Counter Screen {counter}</Text>
      <Button title='+1' onPress={() => setCounter(counter + 1)} />
      <Button title='-1' onPress={() => setCounter(counter - 1)} />
      <Button title='reset' onPress={() => setCounter(0)} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default CounterScreen
