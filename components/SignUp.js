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

export function SignUp() {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function submit() {
    console.log('here')
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
          onPress={submit}
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