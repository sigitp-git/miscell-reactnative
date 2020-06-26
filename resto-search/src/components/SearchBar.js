import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name='ios-search' style={styles.iconStyle} />
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        value={term}
        // on web it is : (e) => setState(e.target.value)
        onChangeText={(newTerm) => onTermChange(newTerm)}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 15,
    marginBottom: 10,
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
})

export default SearchBar
