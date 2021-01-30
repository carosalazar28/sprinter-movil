import React, { useState } from 'react';
import {
  Button, 
  KeyboardAvoidingView, 
  StyleSheet, 
  Keyboard, 
} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  Container,
  Title,
  CustomInput,
  SecundaryTitle,
} from './styled/FormStyles';
import { Platform } from 'react-native';

export function SignUp() {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function handleSubmit() {
    console.log(username, email, password, passwordConfirm)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Button
            title="Enviar"
            color="#f2ea0d"
            onPress={handleSubmit}
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
})