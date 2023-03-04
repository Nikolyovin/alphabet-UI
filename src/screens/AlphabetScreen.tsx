import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionGame from '../components/SectionGame'
import Letter from '../components/Letter'

const AlphabetScreen = () => {
	return (
		<View style={styles.wrap}>
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
			<Letter />
		</View>
	)
}

export default AlphabetScreen

const styles = StyleSheet.create({
	wrap: {
		padding: 30,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
})
