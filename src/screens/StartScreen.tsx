import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textButton}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#64b5f6',
  },
  button: {},
  textButton: {},
})
