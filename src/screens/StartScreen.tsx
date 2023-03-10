import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from '../../assets/IMG_4304.png'

const StartScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Алфавит для малышей</Text>
            </View>
            <View style={styles.titleCircle}></View>

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
    title: {
        paddingTop: 80,
        // paddingBottom: 10,
        paddingHorizontal: 20,
        fontSize: 32,
        color: 'white',
        textAlign: 'center'

        // jistyfy
    },
    titleWrap: {
        width: '100%',
        backgroundColor: '#2e7d32'
        // borderBottomEndRadius: 75,
        // borderBottomStartRadius: 75
    },
    titleCircle: {
        height: 50,
        width: '100%',
        backgroundColor: '#2e7d32',
        borderBottomEndRadius: '1000%',
        borderBottomStartRadius: '1000%'
    },
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
