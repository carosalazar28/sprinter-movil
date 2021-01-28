import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FormSignUp } from './components/formSignUp'

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registro" component={FormSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
