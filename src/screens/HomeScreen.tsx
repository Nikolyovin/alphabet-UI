import { StyleSheet, View } from 'react-native'
import React from 'react'
import SectionGame from '../components/SectionGame'
import Header from '../components/Header'

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrap}>
            <Header />
            {/* <Text style={styles.title}></Text> */}
            <SectionGame navigation={navigation} />
            <SectionGame navigation={navigation} />
            <SectionGame navigation={navigation} />
            <SectionGame navigation={navigation} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    wrap: {
        // paddingHorizontal: 30,
        // paddingVertical: 30,
        // backgroundColor: '#cfd8dc',
        // flexDirection: 'row',
        // height: '100%',
        // justifyContent: 'space-between',
        // flexWrap: 'wrap'
        alignItems: 'center'
    },
    title: {}
})
