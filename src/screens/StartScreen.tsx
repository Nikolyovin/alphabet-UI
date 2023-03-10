import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from '../../assets/IMG_4304.png'
import Header from '../components/Header'

const StartScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <Header />

            <Image style={styles.img} source={img} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton}>Старт</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    wrap: {
        // backgroundColor: '#64b5f6',
        backgroundColor: '#66bb6a',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 100
    },
    // titleWrap: {
    //   textAlign: 'center',
    // },
    img: {
        flex: 1,
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: '#689f38',
        borderRadius: 10,
        width: '80%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#2e7d32'
    },
    textButton: {
        fontSize: 20,
        color: 'white'
    }
})
