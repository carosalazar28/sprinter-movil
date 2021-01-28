import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FormSignUp } from './components/formSignUp'
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registro" component={FormSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}