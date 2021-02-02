import React, { useState } from 'react';
import {
  Button, 
  StyleSheet, 
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  Title,
  CustomInput,
  SecundaryTitle,
} from './styled/FormStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export function SignUp() {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    console.log(username, password)
    try {
      const { data: { token }} = await axios ({
        method: 'POST',
        baseURL: 'http://192.168.0.6:8080',
        url: '/user/sign-up',
        data: { username, email, password }
      });
      console.log(token)
      AsyncStorage.setItem('token', token)
      navigation.navigate('Home')
    }
    catch(err) {
      console.log('here error')
      AsyncStorage.removeItem('token')
      setError('Usuario o contraseña invalidos')
      console.log(err)
    }
  }

  return (
    <Container>
      <Title>Bienvenid@!</Title>
      <SecundaryTitle>Registro</SecundaryTitle>
      <ScrollView>

        <CustomInput
          placeholder="Nombre de usuario"
          placeholderTextColor = "#f2f2f2"
          onChangeText={text => setUserName(text)}
          value={username}
        />
        <CustomInput
          placeholder="Correo electronico"
          placeholderTextColor = "#f2f2f2"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <CustomInput
          placeholder="Contraseña"
          placeholderTextColor = "#f2f2f2"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirme contraseña"
          placeholderTextColor = "#f2f2f2"
          onChangeText={text => setPasswordConfirm(text)}
          value={passwordConfirm}
          secureTextEntry
        />
      </ScrollView>
      <View style={styles.containerButton}>
        <Button
          title="Enviar"
          onPress={handleSubmit}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center'
  },
})