import React, { useState } from 'react';
import {
  Button, 
  KeyboardAvoidingView, 
  StyleSheet, 
  Keyboard,
  Text, 
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  Container,
  Title,
  CustomInput,
} from './styled/FormStyles';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function SignIn({ navigation }) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    console.log(username, password)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
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
          <Button
            title="Enviar"
            color="#f2ea0d"
            onPress={handleSubmit}
          />
          <Text style={styles.text}>Olvidé mi constraseña</Text>
          <Button title="Crear una cuenta"     
            onPress={() => navigation.navigate('Registro')}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text : {
    textDecorationLine: 'underline',
    color: '#f2f2f2',
    textAlign: 'center',
    margin: 10,
  },
})