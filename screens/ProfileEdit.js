import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, View, Text, Image, StyleSheet, Button, SafeAreaView, StatusBar } from 'react-native';
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

export function ProfileEdit({ navigation }) {

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
    navigation.replace('SignIn');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(dataUser));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(destroyUser());
    navigation.replace('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerImage}>
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
        <View style={styles.containerForm}>
          <Text style={styles.textLabel}>Username</Text>
          <CustomInput
            style={styles.inputStyle}
            placeholder="Nombre de usuario"
            placeholderTextColor = "black"
            onChangeText={text => dispatch(setUserName(text))}
            value={username}
          />
          <Text style={styles.textLabel}>Email</Text>
          <CustomInput
            style={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor = "black"
            onChangeText={text => dispatch(setEmail(text))}
            value={email}
          />
          <Text style={styles.textLabel}>Rol</Text>
          <CustomInput
            style={styles.inputStyle}
            placeholder="Rol"
            placeholderTextColor = "black"
            onChangeText={text => dispatch(setRol(text))}
            value={rol}
          />
        </View>
        <View style={styles.containerRow}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerImage: {
    alignItems: 'center',
    paddingTop: 10
  },
  containerForm: {
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 15,
  },
  textLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 40,
    paddingLeft: 40,
    marginBottom: 15
  },
  inputStyle: {
    backgroundColor: 'white',
    color: 'black'
  }
});
