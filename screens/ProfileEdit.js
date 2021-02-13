import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import {
  CustomInput,
} from '../components/styled/FormStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ProfileEdit() {

  const handleClose = async () => {
    await AsyncStorage.removeItem('token');
  };

  return (
    <>
      <View>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613234403/sprinter/ui/Logo_SPRINTER_vpejk2.png' }}
          style={{ width: 180, height: 180, marginTop: 30, marginBottom: 15 }}
        />
        <Button
          title="Cerrar Sesión"
          color="#bdbdbb"
          onPress={handleClose}
        />
      </View>
      <View>
        <Text>Nombre</Text>
        <CustomInput
          placeholder="Nombre de usuario"
          placeholderTextColor = "black"
          onChangeText="{text => setUserName(text)}"
          value="{username}"
        />
        <Text>Username</Text>
        <CustomInput
          placeholder="Nombre de usuario"
          placeholderTextColor = "black"
          onChangeText="{text => setUserName(text)}"
          value="{username}"
        />
        <Text>Rol</Text>
        <CustomInput
          placeholder="Nombre de usuario"
          placeholderTextColor = "black"
          onChangeText="{text => setUserName(text)}"
          value="{username}"
        />
      </View>
      <View>
        <Button
          title="Guardar"
          color="#f2ea0d"
          onPress="{handleSubmit}"
        />
        <Button
          title="Borrar"
          color="#bdbdbb"
          onPress="{handleDelete}"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

});
