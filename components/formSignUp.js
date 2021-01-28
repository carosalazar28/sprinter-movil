import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export function FormSignUp() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function handleSubmit() {
    console.log(username, email, password, passwordConfirm)
  }

  return (
    <View styles={styles.container}>
      <Text style={styles.principalText}>Bienvenid@</Text>
      <Text>Registro</Text>
      <Input
        placeholder="Nombre de usuario"
        onChangeText={text => setUserName(text)}
        value={userName}
        leftIcon={
          <Icon
            name="user"
            size={15}
            color="#F2F2F2"
          />
        }
      />
      <Input
        placeholder="Correo electronico"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="Contraseña"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Input
        placeholder="Confirme contraseña"
        onChangeText={text => setPasswordConfirm(text)}
        value={passwordConfirm}
        secureTextEntry
      />
      <Button
        title="Enviar"
        type="outline"
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
    backgroundColor: '#2F2A3E'
  },
  principalText: {
    color: '#f2ea0d',
    fontSize: 48,
  }
})