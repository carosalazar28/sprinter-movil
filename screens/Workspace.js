import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewContainer = styled(View)`
  padding: 17px;
  margin: 10px auto;
`;

const Title = styled(Text)`
  color: #f2ea0d;
  margin: 10px 0;
`;

const TextAbout = styled(Text)`
  color: #fff;
  font-size: 14px;
`;

export function Workspace({ navigation }) {

  const [token, setToken] = useState('')
  const [workspace, setWorkspace] = useState(null)

  async function getToken() {
    const tokenAwait = await AsyncStorage.getItem('token')
    
    await setToken(tokenAwait)
    
    if(!token) {
      navigation.navigate('SignIn')
    }
    console.log('HERE HOME', token)
  } 

  useEffect(() => {
    getToken()
    axios({
      method: 'GET',
      baseURL: 'http://192.168.0.6:8080',
      url: '/workspaces/workspace',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(( { data } ) => setWorkspace(data))
    console.log('here token', token)
    
  }, [])

  const result = workspace ? workspace : null

  return (
    <ViewContainer>
      <View style={{width: 330, height: 107 }}>
        <Title h3>Workspace</Title>
        <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
        {workspace && (
          <>
            <Text>{workspace.name}</Text>
            <Text>{workspace.weeks}</Text>
            <Text>{workspace.sprint}</Text>
          </>
        )}
      </ScrollView>
    </ViewContainer>
  )
}