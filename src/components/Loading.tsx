import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../common/constants'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size='large' color={COLORS.MAIN} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
