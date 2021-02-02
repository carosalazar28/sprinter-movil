import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Home } from './components/Home';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: '#2f2a3e'}
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}