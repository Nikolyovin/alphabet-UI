import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, URL_SERVER } from '../common/constants'
import img from '../../assets/a.png'
import sharp from '../../assets/sharp.jpg'
import pineapple from '../../assets/pineapple.jpg'
import bus from '../../assets/bus.jpg'
import ModalForPicture from '../components/ModalForPicture'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { ILetter } from '../types/types'

const LetterScreen: React.FC = () => {
    const { currentLetter, letters } = useAppSelector(state => state.alphabet)

    const { isOpenModalForPicture } = useActions()

    const TouchPicture: () => void = () => {
        isOpenModalForPicture(true)
    }

    const filteredLetters: ILetter = letters.find(({ _id }) => _id === currentLetter)

    const { pictureLetter, picture1, picture2, picture3 } = filteredLetters

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonLetter}>
                <Image source={{ uri: `${URL_SERVER}${pictureLetter}` }} style={styles.letterPicture} />
            </TouchableOpacity>
            <View style={styles.wordsWrap}>
                <TouchableOpacity style={styles.buttonWord} onPress={TouchPicture}>
                    <Image source={{ uri: `${URL_SERVER}${picture1}` }} style={styles.picture} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWord} onPress={TouchPicture}>
                    <Image source={{ uri: `${URL_SERVER}${picture2}` }} style={styles.picture} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWord} onPress={TouchPicture}>
                    <Image source={{ uri: `${URL_SERVER}${picture3}` }} style={styles.picture} />
                </TouchableOpacity>
            </View>
            <ModalForPicture />
        </View>
    )
}

export default LetterScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 100,
        height: '100%',
        backgroundColor: COLORS.FON
    },
    buttonLetter: {
        alignItems: 'center'
    },
    letterPicture: {
        // flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        // borderWidth: 2,
        // borderColor: 'Grey'
    },
    wordsWrap: {
        paddingTop: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
        // height: 300
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    picture: {
        // flex: 1,
        width: 145,
        height: 145,
        resizeMode: 'contain'
        // borderWidth: 2,
        // borderColor: 'Grey'
    },
    buttonWord: {
        width: 150,
        height: 150,
        borderWidth: 3,
        borderColor: COLORS.MAIN,
        backgroundColor: 'white',
        paddingBottom: 30,
        marginBottom: 30
    }
})
