import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionGame from '../components/SectionGame'
import Letter from '../components/Letter'

const AlphabetScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
            <Letter navigation={navigation} />
        </View>
    )
}

export default AlphabetScreen

const styles = StyleSheet.create({
    wrap: {
        padding: 30,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
