import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  StatusBar,
  View,
  Image
} from 'react-native';
import {
  Container,
  Title,
  CustomInput,
  SecundaryTitle,
} from '../components/styled/FormStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { SERVER_URL } from '@env';


export function SignIn({ navigation }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const { data: { token }} = await axios ({
        method: 'POST',
        baseURL: SERVER_URL,
        url: '/user/sign-in',
        data: { username, password }
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
      <Container style={styles.container}>
        <Title>Sprinter!</Title>
        <Text>{error}</Text>
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
            textStyle={{ color: '#f2f2f2', }}
            onPress={handleSubmit}
          />
        </View>
        <Text style={styles.text}>Olvidé mi constraseña</Text>
        <SecundaryTitle
          onPress={() => navigation.navigate('SignUp')}
        >
          Crear una cuenta
        </SecundaryTitle>
      </Container>
      <View>
        <Image
          source={{uri:'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613259321/sprinter/ui/patron_qwxtdz.png'}}
          style={{ width: 450, height: 280 }}
        />
      </View>
    </View>
  );
}

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
});
