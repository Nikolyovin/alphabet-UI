import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Алфавит для малышей</Text>
            </View>
            <View style={styles.titleCircle}></View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        paddingTop: 80,
        // paddingBottom: 10,
        paddingHorizontal: 20,
        fontSize: 32,
        color: 'white',
        textAlign: 'center'
    },
    titleWrap: {
        width: '100%',
        backgroundColor: '#2e7d32'
        // borderBottomEndRadius: 75,
        // borderBottomStartRadius: 75
    },
    titleCircle: {
        height: 50,
        width: '100%',
        backgroundColor: '#2e7d32',
        borderBottomEndRadius: '1000%',
        borderBottomStartRadius: '1000%'
    }
})
