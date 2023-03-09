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
        width: '45%',
        height: '25%',
        paddingVertical: 30,
        backgroundColor: '#64b5f6',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
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
