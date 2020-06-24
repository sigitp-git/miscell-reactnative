import React from 'react'
import { View, StyleSheet } from 'react-native'

const BoxScreen2 = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.ViewStyleOne} />
      <View style={styles.ViewStyleTwo} />
      <View style={styles.ViewStyleThree} />
    </View>
  )
}

const styles = StyleSheet.create({
  // parent styles: flexDirection, alignItems, justifyContent
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row', // column
    height: 200,
    alignItems: 'stretch', // flex-start, flex-end, center
    justifyContent: 'space-between', // center, flex-start, flex-end, space-between, space-around
  },
  // child styles: flex (weight), alignSelf (override alightItems from parent)
  // child styles: position, ignored by siblings, obeys some flex box set by parent
  // child styles: top, bottom, left, right, these are like margins, but shifting itself,
  // can be outside of parent, putting 0 makes it fill up entire parent
  // shortcut: ...StyleSheet.absoluteFillObject (top: 0, bottom: 0, left: 0, right: 0)
  ViewStyleOne: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
  },
  ViewStyleTwo: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
  },
  ViewStyleThree: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
  },
})

export default BoxScreen2
