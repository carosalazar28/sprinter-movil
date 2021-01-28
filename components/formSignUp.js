import React, { useState } from 'react'
import { Button, TextInput, Text, View, StyleSheet } from 'react-native'

export function FormSignUp() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function handleSubmit() {
    console.log(username, email, password, passwordConfirm)
  }

  return (
    <View>
      <Text style={styles.principalText}>Bienvenid@</Text>
      <Text>Registro</Text>
      <TextInput
        placeholder="Nombre de usuario"
        onChangeText={text => setUserName(text)}
        value={userName}
      />
      <TextInput
        placeholder="Correo electronico"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirme contraseña"
        onChangeText={text => setPasswordConfirm(text)}
        value={passwordConfirm}
        secureTextEntry
      />
      <Button
        title="Enviar"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginRight: 15,
    marginLeft: 15,
  },
  principalText: {
    color: '#f2ea0d',
    fontSize: 48,
  }
})