import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SectionGame = ({ navigation }: any) => {
    return (
        // <View style={styles.wrap}>
        <TouchableOpacity style={styles.sectionWrap} onPress={() => navigation.navigate('Alphabet')}>
            <View style={styles.picture}></View>
            <Text style={styles.titleSection}>Алфавит</Text>
        </TouchableOpacity>
        // </View>
    )
}

export default SectionGame

const styles = StyleSheet.create({
    wrap: {},
    sectionWrap: {
        backgroundColor: '#689f38',
        borderRadius: 10,
        width: '80%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#2e7d32'
    },
    picture: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 10
    },
    titleSection: {
        color: 'white'
    }
})
