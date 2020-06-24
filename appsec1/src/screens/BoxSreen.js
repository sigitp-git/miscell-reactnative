import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyleOne}>Child 1</Text>
      <Text style={styles.textStyleTwo}>Child 2</Text>
      <Text style={styles.textStyleThree}>Child 3</Text>
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
    justifyContent: 'center', // center, flex-start, flex-end, space-between, space-around
  },
  // child styles: flex (weight), alignSelf (override alightItems from parent)
  // child styles: position, ignored by siblings, obeys some flex box set by parent
  // child styles: top, bottom, left, right, these are like margins, but shifting itself,
  // can be outside of parent, putting 0 makes it fill up entire parent
  // shortcut: ...StyleSheet.absoluteFillObject (top: 0, bottom: 0, left: 0, right: 0)
  textStyleOne: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 30,
    top: 20,
  },
  textStyleTwo: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 30,
    flex: 1,
    alignSelf: 'center', // flex-start, flex-end
  },
  textStyleThree: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 30,
    flex: 1,
    position: 'absolute', // defaul is relative (not ignoring the siblings)
  },
})

export default BoxScreen
