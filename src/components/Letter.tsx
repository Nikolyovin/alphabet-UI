import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionGame from '../components/SectionGame'

const Letter = () => {
	return (
		<View style={styles.wrap}>
			<TouchableOpacity style={styles.letterWrap}>
				<View style={styles.img}></View>
			</TouchableOpacity>
		</View>
	)
}

export default Letter

const styles = StyleSheet.create({
	wrap: { margin: 5 },
	letterWrap: {},
	img: {
		height: 70,
		width: 70,
		backgroundColor: 'blue',
	},
})
