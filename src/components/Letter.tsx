import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionGame from '../components/SectionGame'
import img from '../../assets/a.png'
import img2 from '../../assets/b.png'
import img3 from '../../assets/в.png'

type PropsType = {
    navigation: any
    pictureLetter: string
}

const Letter: React.FC<PropsType> = ({ navigation, pictureLetter }) => {
    return (
        <View style={styles.wrap}>
            <TouchableOpacity onPress={() => navigation.navigate('Letter')} style={styles.letterWrap}>
                <Image source={{ uri: `http://95.83.149.6:5000/${pictureLetter}` }} style={styles.img} />
            </TouchableOpacity>
        </View>
    )
}

export default Letter

const styles = StyleSheet.create({
    wrap: { margin: 5 },
    letterWrap: {},
    img: {
        height: 70,
        width: 70,
        borderWidth: 2,
        borderColor: 'green'
        // backgroundColor: 'blue'
    }
})
