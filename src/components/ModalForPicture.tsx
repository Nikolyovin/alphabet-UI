import { Modal, StyleSheet, View, Text } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import { useAppSelector } from '../hooks/redux'

const ModalForPicture: FC = () => {
    const { isModalForPicture } = useAppSelector(state => state.alphabet)

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={isModalForPicture}
                // onShow={onShow}
            >
                <View style={styles.centeredView}>
                    <Text>текст текст текст</Text>
                </View>
            </Modal>
        </View>
    )
}

export default ModalForPicture

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '55%',
        left: '10%',
        paddingHorizontal: 15
    }
})
