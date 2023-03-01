import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const StartScreen = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  button: {},
  textButton: {},
})
