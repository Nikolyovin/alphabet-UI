import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import img from '../../assets/art.png'

const StartScreen = ({ navigation }: any) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>
          Алфавит и другие игры для самых маленьких
        </Text>
      </View>
      <Image style={styles.img} source={img} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textButton}>Старт</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#64b5f6',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  titleWrap: {
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    color: 'white',
  },
  img: {},
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
  },
})
