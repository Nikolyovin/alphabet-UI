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
    sectionWrap: {
        backgroundColor: '#689f38',
        borderRadius: 10,
        width: '80%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#2e7d32',
        flexDirection: 'row',
        marginBottom: 5
    },
    picture: {
        width: 15,
        height: 15,
        backgroundColor: 'white'
    },
    titleSection: {
        color: 'white'
    }
})
