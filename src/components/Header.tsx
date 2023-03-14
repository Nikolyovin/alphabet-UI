import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../common/constants'

type PropsType = {
    title: string
}

const Header: React.FC<PropsType> = ({ title }) => {
    return (
        <>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {/*<View style={styles.titleCircle}></View> */}
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        paddingTop: 50,
        paddingBottom: 80,
        paddingHorizontal: 20,
        fontSize: 38,
        textAlign: 'center',
        color: COLORS.FON
    },
    titleWrap: {
        width: '100%',
        backgroundColor: COLORS.MAIN,
        borderBottomEndRadius: '50%',
        borderBottomStartRadius: '50%'
        //borderRadius: '100%'
    },
    titleCircle: {
        height: 50,
        width: '100%',
        backgroundColor: '#9cbd42',
        borderBottomEndRadius: 150,
        borderBottomStartRadius: 150
        // borderRadius: 50 / 10
    }
})
