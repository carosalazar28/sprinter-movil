import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  Title,
  CustomInput,
  SecundaryTitle,
} from '../components/styled/FormStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { SERVER_URL } from '@env';

export function SignUp({ navigation }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const { data: { token }} = await axios ({
        method: 'POST',
        baseURL: SERVER_URL,
        url: '/user/sign-up',
        data: { username, email, password }
      });
      AsyncStorage.setItem('token', token);
      navigation.replace('BottomTab', { screen: 'Home' });
    }
    catch(err) {
      AsyncStorage.removeItem('token');
      setError('Usuario o contraseña invalidos');
    }
  };

  return (
    <View>
      <Container>
        <Title>¡Bienvenid@!</Title>
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
      <View>
        <Image
          source={{uri:'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613259321/sprinter/ui/patron_qwxtdz.png'}}
          style={{ width: 450, height: 230 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center'
  },
});
