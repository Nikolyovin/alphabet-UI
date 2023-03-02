import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const StartScreen = ({ navigation }: any) => {
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Home')}
				// onPress={() => console.log('efwfwfwef')}
			>
				<Text style={styles.textButton}>Start</Text>
			</TouchableOpacity>
		</View>
	)
}

export default StartScreen

const styles = StyleSheet.create({
	wrap: {
		// backgroundColor: '#64b5f6',
		height: 500,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#64b5f6',
		width: 100,
		height: 30,
	},
	textButton: {},
})
