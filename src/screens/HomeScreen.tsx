import { StyleSheet, View } from 'react-native'
import React from 'react'
import SectionGame from '../components/SectionGame'
import Header from '../components/Header'
import { COLORS } from '../common/constants'
import Layout from '../components/Layout'

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <Header title={'Выбирай режим игры'} />
            <View style={styles.list}>
                <SectionGame navigation={navigation} />
                <SectionGame navigation={navigation} />
                <SectionGame navigation={navigation} />
                <SectionGame navigation={navigation} />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: COLORS.FON,
        height: '100%'
    },
    list: {
        paddingVertical: 100,
        alignItems: 'center'
    }
})
