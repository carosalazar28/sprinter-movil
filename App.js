import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './components/TabNavigator';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#2f2a3e'},
            headerTintColor: '#69c8d4',
          }}
        >
          <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
