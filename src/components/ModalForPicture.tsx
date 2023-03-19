import { Modal, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'
import { COLORS } from '../common/constants'

const ModalForPicture: FC = () => {
    const { isModalForPicture, currentPictureAndName } = useAppSelector(state => state.alphabet)
    const { isOpenModalForPicture } = useActions()

    const { url, name } = currentPictureAndName

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
                    <Text style={styles.title}>{name}</Text>
                    <TouchableOpacity style={styles.touch} onPress={onTouch}>
                        <Image source={{ uri: url }} style={styles.picture} />
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
        backgroundColor: COLORS.FON,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    title: {
        color: COLORS.MAIN,
        fontSize: 48
    },
    touch: {
        // height: 300,
        // width: 250
    },
    picture: {
        height: 350,
        width: 300,
        resizeMode: 'contain'
    }
})
