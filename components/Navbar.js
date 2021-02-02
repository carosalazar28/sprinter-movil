import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';


export function Navbar() {
  return(
    <View>
      <Text>nAVBAR</Text>
      <Icon
        name="home"
        type="outlined"
        color="#fff"
        size= "34"
      />
    </View>
  )
}
