import React, { useState } from 'react'
import { Button, View, StyleSheet, FlatList } from 'react-native'

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const ColorScreen = () => {
  const [colors, setColors] = useState([])

  console.log(colors)

  return (
    <View>
      <Button
        title='color'
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          )
        }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  ViewStyle: {
    fontSize: 30,
  },
})

export default ColorScreen
