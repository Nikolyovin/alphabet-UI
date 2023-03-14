import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../common/constants'

const Header = () => {
    return (
        <>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Учись играя</Text>
            </View>
            {/* <View style={styles.titleCircle}></View> */}
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
        textAlign: 'center',
        color: COLORS.FON
    },
    titleWrap: {
        width: '100%',
        backgroundColor: COLORS.MAIN
        // borderBottomEndRadius: 75,
        // borderBottomStartRadius: 75
    },
    titleCircle: {
        height: 50,
        width: '100%',
        backgroundColor: '#9cbd42',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50
        // borderRadius: 50 / 10
    }
})
