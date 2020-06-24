import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareColorScreen = () => {
  const [red, setRed] = useState(125)
  const [green, setGreen] = useState(125)
  const [blue, setBlue] = useState(125)

  const COLOR_INCREMENT = 15

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        return
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change)
        return
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return
      default:
        return
    }
  }

  return (
    <View>
      <ColorCounter
        color='Red'
        onSubmitInc={() => setColor('red', COLOR_INCREMENT)}
        onSubmitDesc={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        onSubmitInc={() => setColor('green', COLOR_INCREMENT)}
        onSubmitDesc={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        onSubmitInc={() => setColor('blue', COLOR_INCREMENT)}
        onSubmitDesc={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default SquareColorScreen
