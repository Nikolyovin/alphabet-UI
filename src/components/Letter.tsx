import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useActions } from '../hooks/actions'
import { URL_SERVER } from '../common/constants'

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
                <Image source={{ uri: `${URL_SERVER}/${pictureLetter}` }} style={styles.img} />
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
        resizeMode: 'contain'
        // borderWidth: 2,
        // borderColor: 'green'
        // backgroundColor: 'blue'
    }
})
