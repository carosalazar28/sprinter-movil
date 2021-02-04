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

const TextWorkpace = styled(Text)`
  color: black;
`;

export function Workspace({ navigation }) {

  const [token, setToken] = useState(null)
  const [workspace, setWorkspace] = useState({})

  async function getToken() {
    const token = await AsyncStorage.getItem('token')
    if(!token) {
      navigation.navigate('SignIn')
    }
    setToken(token)
    console.log('HERE worspace', token)
  } 

  useEffect(() => {
    getToken()
    console.log('here get', token)
    if(token) {
      console.log('here get data')
      axios({
        method: 'GET',
        baseURL: 'http://192.168.0.6:8080',
        url: '/workspaces/workspace',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(( { data } ) => setWorkspace(data))
      
      console.log('here data', data)
    }
    
  }, [token])

  const result = workspace ? workspace : null

  return (
    <>
      {result && (
        <ViewContainer>
        <View style={{width: 330, height: 107 }}>
          <Title h3>Workspace</Title>
          <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
        </View>
        <ScrollView style={{backgroundColor: 'white', marginTop: 10 }}>
          {workspace && (
            <>
              <TextWorkpace>{workspace.name}</TextWorkpace>
              <TextWorkpace>{workspace.weeks}</TextWorkpace>
              <TextWorkpace>{workspace.sprint}</TextWorkpace>
            </>
          )}
        </ScrollView>
        </ViewContainer>
      )}
    </>
  )
}