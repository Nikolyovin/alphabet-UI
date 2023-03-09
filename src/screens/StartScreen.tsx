import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from '../../assets/frog.PNG'

const StartScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Алфавит для малышей</Text>
            </View>

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
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 50
    },
    // titleWrap: {
    //   textAlign: 'center',
    // },
    title: {
        paddingTop: 100,
        paddingBottom: 50,
        paddingHorizontal: 20,
        fontSize: 32,
        color: 'white',
        textAlign: 'center'

        // jistyfy
    },
    titleWrap: {
        backgroundColor: '#689f38',
        borderBottomEndRadius: 75,
        borderBottomStartRadius: 75
    },
    img: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: '#689f38',
        borderRadius: 50,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        color: 'white'
    }
})
