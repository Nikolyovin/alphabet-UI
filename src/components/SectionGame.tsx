import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../common/constants'
import img from '../../assets/abc-letters.png'

const SectionGame = ({ navigation }: any) => {
    return (
        // <View style={styles.wrap}>
        <TouchableOpacity style={styles.sectionWrap} onPress={() => navigation.navigate('Alphabet')}>
            {/* <View style={styles.picture}></View> */}
            <Image style={styles.picture} source={img} />
            <Text style={styles.titleSection}>Алфавит</Text>
        </TouchableOpacity>
        // </View>
    )
}

export default SectionGame

const styles = StyleSheet.create({
    sectionWrap: {
        backgroundColor: COLORS.MAIN,
        borderRadius: 10,
        width: '80%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#3d9635',
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: 60
    },
    picture: {
        width: 60,
        height: 50
        // backgroundColor: 'white'
    },
    titleSection: {
        color: 'white',
        fontSize: 23
    }
})
