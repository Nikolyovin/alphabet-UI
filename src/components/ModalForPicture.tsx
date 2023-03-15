import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import { useAppSelector } from '../hooks/redux'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { useActions } from '../hooks/actions'

const ModalForPicture: FC = () => {
    const { isModalForPicture } = useAppSelector(state => state.alphabet)
    const { isOpenModalForPicture } = useActions()

    const onTouch: () => void = () => {
        isOpenModalForPicture(false)
    }

    return (
        <View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={isModalForPicture}
                // onShow={onShow}
            >
                <View style={styles.centeredView}>
                    <TouchableOpacity style={styles.touch} onPress={onTouch}>
                        <View style={styles.picture}></View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default ModalForPicture

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black'
    },
    touch: {
        height: 250,
        width: 250
    },
    picture: {
        backgroundColor: 'green',
        height: 250,
        width: 250
    }
})
