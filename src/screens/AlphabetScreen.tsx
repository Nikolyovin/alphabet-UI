import { StyleSheet, View } from 'react-native'
import React from 'react'
import Letter from '../components/Letter'
import { COLORS } from '../common/constants'
import { useAppSelector } from '../hooks/redux'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/actions'

const AlphabetScreen = ({ navigation }: any) => {
    const { letters } = useAppSelector(state => state.alphabet)
    const { getLettersFetch } = useActions()

    React.useEffect(() => {
        getLettersFetch()
    }, [])

    console.log('letters', letters)

    return (
        <View style={styles.wrap}>
            {letters.length &&
                letters.map(({ pictureLetter, _id }) => (
                    <Letter navigation={navigation} pictureLetter={pictureLetter} key={_id} _id={_id} />
                ))}
        </View>
    )
}

export default AlphabetScreen

const styles = StyleSheet.create({
    wrap: {
        padding: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: COLORS.FON
    }
})
