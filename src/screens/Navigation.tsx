import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import StartScreen from './StartScreen'
import { NavigationContainer } from '@react-navigation/native'
import LetterScreen from './AlphabetScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Start"
					component={StartScreen}
					// options={{ title: 'Старт' }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Меню' }}
				/>
				<Stack.Screen
					name="Alphabet"
					component={LetterScreen}
					options={{ title: 'Алфавит' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

const styles = StyleSheet.create({})
