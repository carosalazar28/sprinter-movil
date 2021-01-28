import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FormSignUp } from './components/formSignUp';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Registro" component={FormSignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}