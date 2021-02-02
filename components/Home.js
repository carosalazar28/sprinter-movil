import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Image } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navbar} from './Navbar';

export function Home({ navigation }) {

  // useEffect(() => {
  //   const token = AsyncStorage.getItem('token')
  //     if(!token) {
  //       navigation.navigate('SignIn')
  //     }
  // }, [token])

  return (
    <ScrollView style={styles.container}>
      <Navbar
        navigation={navigation}
      />
      <View style={{ alignItems: "center", marginBottom: 37, paddingRight: 28 }}>
        <Image
          source={{ uri: "https://res.cloudinary.com/dkcbxnhg0/image/upload/v1612275065/sprinter/ui/Contenido_hwcrdd.png" }}
          style={{ width: 314, height: 248 }}
        />
      </View>
      <ScrollView horizontal={true}>
        <Image
          source={{ uri: "https://res.cloudinary.com/dkcbxnhg0/image/upload/v1612275050/sprinter/ui/Overlay_Time_kcbtay.png" }}
          style={{ width: 939, height: 467 }}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 28,
  },
})