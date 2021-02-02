import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text,
  Button,
  StatusBar,
  View,
} from 'react-native';
import {
  Container,
  Title,
  CustomInput,
  SecundaryTitle,
} from '../components/styled/FormStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export function SignIn({ navigation }) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    console.log(username, password)
    try {
      const { data: { token }} = await axios ({
        method: 'POST',
        baseURL: 'http://192.168.0.6:8080',
        url: '/user/sign-in',
        data: { username, password }
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
    <Container style={styles.container}>
      <Title>Sprinter!</Title>
      <CustomInput
        placeholder="Nombre de usuario"
        placeholderTextColor = "#f2f2f2"
        onChangeText={text => setUserName(text)}
        value={username}
      />
      <CustomInput
        placeholder="Contraseña"
        placeholderTextColor = "#f2f2f2"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={styles.containerButton}>
        <Button
          title="Enviar"
          style={styles.button}
          textStyle={{ color: "#f2f2f2", }}
          onPress={handleSubmit}
        />
      </View>
      <Text style={styles.text}>Olvidé mi constraseña</Text>
      <SecundaryTitle     
        onPress={() => navigation.navigate('SignUp')}
      >
        Crear una cuenta
      </SecundaryTitle>
      <StatusBar style="auto"/>
    </Container>
  );
};

const styles = StyleSheet.create({
  text : {
    textDecorationLine: 'underline',
    color: '#f2f2f2',
    textAlign: 'center',
    margin: 15,
  },
  containerButton: {
    alignItems: 'center'
  },
})