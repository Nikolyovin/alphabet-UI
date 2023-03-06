import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LetterScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonLetter}>
                <View style={styles.picture}> </View>
            </TouchableOpacity>
            <View style={styles.wordsWrap}>
                <TouchableOpacity style={styles.buttonWord}>
                    <View style={styles.picture}> </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWord}>
                    <View style={styles.picture}> </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWord}>
                    <View style={styles.picture}> </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LetterScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    buttonLetter: {},
    picture: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'Grey'
    },
    wordsWrap: {
        flexDirection: 'row'
    },
    buttonWord: {}
})
