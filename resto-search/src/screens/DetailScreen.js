import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

// capture props.navigation from react-navigation-stack on App.js
const DetailScreen = ({ navigation }) => {
  const [detail, setDetail] = useState({})

  // get id object prop param from ResultsList.js navigation.navigate('Detail', { id: item.id })
  const id = navigation.getParam('id')
  //console.log(id)

  // returns single object instead of array of objects
  const getDetail = async (id) => {
    const response = await yelp.get(`/${id}`)
    if (response) {
      setDetail(response.data)
    }
  }

  useEffect(() => {
    getDetail(id)
  }, [])
  console.log(detail)

  // detail.photos contains url of photo
  return (
    <>
      <Text style={styles.headerStyle}>{detail.name}</Text>
      <Text style={styles.textStyle}>
        {detail.rating} stars, {detail.review_count} reviews
      </Text>
      <Text style={styles.headerStyle}>Address</Text>
      <Text style={styles.textStyle}>
        {detail.location.address1}, {detail.location.city},{' '}
        {detail.location.state}, {detail.location.zip_code}
      </Text>
      <Text style={styles.textStyle}>{detail.phone}</Text>
      <Text style={styles.headerStyle}>Pictures</Text>
      <FlatList
        data={detail.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item }} />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    marginLeft: 15,
    marginBottom: 10,
  },
  headerStyle: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
})

export default DetailScreen
