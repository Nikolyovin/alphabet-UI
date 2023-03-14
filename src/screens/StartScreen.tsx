import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from '../../assets/IMG_4304.png'
// import img from '../../assets/abc-letters.png'
import Header from '../components/Header'
import { COLORS } from '../common/constants'

const StartScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <Header title={'Учись играя'} />
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
        backgroundColor: COLORS.FON,
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
        backgroundColor: COLORS.MAIN,
        borderRadius: 10,
        width: '80%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#3d9635'
    },
    textButton: {
        fontSize: 20,
        color: 'white'
    }
})
