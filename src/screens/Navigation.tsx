import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import StartScreen from './StartScreen'
import { NavigationContainer } from '@react-navigation/native'
import LetterScreen from './AlphabetScreen'
import AlphabetScreen from './AlphabetScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Start' component={StartScreen} options={{ title: 'Старт' }} />
                <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Меню' }} />
                <Stack.Screen name='Alphabet' component={AlphabetScreen} options={{ title: 'Алфавит' }} />
                <Stack.Screen name='Letter' component={LetterScreen} options={{ title: 'Буква' }} />
                {/* <Stack.Screen name='Word' component={LetterScreen} options={{ title: 'Буква' }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
