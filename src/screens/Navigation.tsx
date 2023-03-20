import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import StartScreen from './StartScreen'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import AlphabetScreen from './AlphabetScreen'
import LetterScreen from './LetterScreen'
import { COLORS } from '../common/constants'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Start' component={StartScreen} options={{ title: 'Старт', headerShown: false }} />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Меню', headerStyle: { backgroundColor: COLORS.FON } }}
                />
                <Stack.Screen
                    name='Alphabet'
                    component={AlphabetScreen}
                    options={{ title: 'Алфавит', headerStyle: { backgroundColor: COLORS.MAIN } }}
                />
                <Stack.Screen
                    name='Letter'
                    component={LetterScreen}
                    options={{ title: 'Буква', headerStyle: { backgroundColor: COLORS.MAIN } }}
                />
                {/* <Stack.Screen name='Word' component={LetterScreen} options={{ title: 'Буква' }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
