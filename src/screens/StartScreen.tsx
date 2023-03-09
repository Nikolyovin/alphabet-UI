import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from '../../assets/frog.png'

const StartScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <Text style={styles.title}>Алфавит и другие игры для самых маленьких</Text>

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
        backgroundColor: '#64b5f6',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 100,
        paddingHorizontal: 20
    },
    // titleWrap: {
    //   textAlign: 'center',
    // },
    title: {
        fontSize: 26,
        color: 'white',
        textAlign: 'center'
    },
    img: {
        width: '50%',
        height: '50%'
        // marginTop: 30,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        color: '#64b5f6'
    }
})
