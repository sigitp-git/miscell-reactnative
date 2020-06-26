import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default ResultDetail
