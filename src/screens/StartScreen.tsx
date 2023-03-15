import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import img from '../../assets/IMG_4304.png'
// import img from '../../assets/abc-letters.png'
import Header from '../components/Header'
import { COLORS } from '../common/constants'

const StartScreen = ({ navigation }: any) => {
    const urlImg = 'http://95.83.149.6:5000/334d96db-1a15-4e2c-a71a-c0ef1da06329.jpg'
    const getReq = async () => {
        let response = await fetch('http://95.83.149.6:5000/api/letters')
        let result = await response.json()
        console.log('result', result)
    }

    useEffect(() => {
        getReq()
    }, [])

    return (
        <View style={styles.wrap}>
            <Header title={'Учись играя'} />
            <Image style={{ width: 250, height: 250, borderWidth: 2, borderColor: 'red' }} source={{ uri: urlImg }} />
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
