import React from 'react';
import { ImageBackground } from 'react-native';

export function Splash({ navigation }) {

  setTimeout(() => {
    navigation.replace('BottomTab', { screen: 'Home' });
  }, 3000);

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613338957/sprinter/ui/1._Inicio_ujbbb5.png' }}
    />
  );
}
