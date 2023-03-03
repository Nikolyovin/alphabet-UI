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
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#cfd8dc',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
  },
  buttonWrap: {
    width: '40%',
    height: '10%',
    paddingVertical: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picture: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  titleButton: {},
})
