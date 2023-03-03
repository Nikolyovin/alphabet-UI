import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.buttonWrap}>
        <View style={styles.picture}></View>
        <Text style={styles.titleButton}>Алфавит</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrap}>
        <View style={styles.picture}></View>
        <Text style={styles.titleButton}>Цифры</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#cfd8dc',
  },
  buttonWrap: {
    width: '40%',
  },
  picture: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  titleButton: {},
})
