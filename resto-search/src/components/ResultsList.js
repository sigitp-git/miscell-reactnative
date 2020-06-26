import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'

// props.navigation sent by CreateStackNavigator (react-navigation-stack) on App.js
// skip parent to get props.navigation by wrapper withNavigation()
const ResultsList = ({ header, results, navigation }) => {
  // collaps section if no result
  if (!results.length) {
    return null
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            // navigation params as second argument { id: item.id } passed to 'Detail' page
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
})

// props.navigation sent by CreateStackNavigator (react-navigation-stack) on App.js
// skip parent to get props.navigation by wrapper withNavigation()
export default withNavigation(ResultsList)
