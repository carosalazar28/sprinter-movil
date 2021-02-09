import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './components/TabNavigator';
import { MainStackNavigator } from './components/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {

  const [token, setToken] = useState()

  async function getToken() {
    const token = await AsyncStorage.getItem('token')
    setToken(token)
  }
  
  useEffect(() => {
    getToken()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        {token ? (
          <BottomTabNavigator/>
        ) : (
          <MainStackNavigator/>
        )}
      </NavigationContainer>
    </Provider>
  );
}