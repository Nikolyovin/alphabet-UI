import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionGame from '../components/SectionGame'
import { useActions } from '../hooks/actions'

type PropsType = {
    navigation: any
    pictureLetter: string
    _id: string
}

const Letter: React.FC<PropsType> = ({ navigation, pictureLetter, _id }) => {
    const { setCurrentLetter } = useActions()

    const onTouchLetter: (letterId: string) => void = letterId => {
        navigation.navigate('Letter')
        setCurrentLetter(letterId)
    }

    return (
        <View style={styles.wrap}>
            <TouchableOpacity onPress={() => onTouchLetter(_id)} style={styles.letterWrap}>
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
