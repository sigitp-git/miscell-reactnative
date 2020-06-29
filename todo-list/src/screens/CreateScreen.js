import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/TodoContext'

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [status, setStatus] = useState('Enter Title and Detail')

  const { dispatch } = useContext(Context)

  return (
    <View>
      <Text style={styles.textStyle}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputStyle}
      />
      <Text style={styles.textStyle}>Detail:</Text>
      <TextInput
        value={detail}
        onChangeText={(text) => setDetail(text)}
        style={styles.inputStyle}
      />
      <Button
        title='Save'
        onPress={() => {
          if (title.length > 0 && detail.length > 0) {
            dispatch({ type: 'CREATE', title: title, detail: detail })
            navigation.navigate('Index')
          } else {
            setStatus('Title and Detail required')
          }
        }}
      />
      <Text style={styles.statusStyle}>{status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  statusStyle: {
    fontSize: 14,
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
})

export default CreateScreen
