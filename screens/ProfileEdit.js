import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import {
  CustomInput,
} from '../components/styled/FormStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getUser,
  setUserName,
  setEmail,
  setRol,
  updateUser,
  destroyUser,
} from '../store/actions/user.action';

export function ProfileEdit() {

  const dispatch = useDispatch();

  const dataUser = useSelector((
    { userReducer: {
      ...state
    }}) => {
    return { ...state };
  });

  const { username, email, rol } = dataUser;

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleClose = async () => {
    await AsyncStorage.removeItem('token');
  };

  const handleSubmit = (e) => {
    dispatch(updateUser(dataUser));
  };

  const handleDelete = (e) => {
    dispatch(destroyUser());
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
          onChangeText={text => setUserName(text)}
          value={username}
        />
        <Text>Username</Text>
        <CustomInput
          placeholder="Email"
          placeholderTextColor = "black"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text>Rol</Text>
        <CustomInput
          placeholder="Rol"
          placeholderTextColor = "black"
          onChangeText={text => setRol(text)}
          value={rol}
        />
      </View>
      <View>
        <Button
          title="Guardar"
          color="#f2ea0d"
          onPress={handleSubmit}
        />
        <Button
          title="Borrar"
          color="#bdbdbb"
          onPress={handleDelete}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

});
