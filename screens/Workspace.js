import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URL } from '@env';

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
  const [loading, setLoading] = useState(false)
  const [workspace, setWorkspace] = useState(null)

  async function getToken() {
    try {
      const token = await AsyncStorage.getItem('token')
      if(!token) {
        navigation.navigate('SignIn')
      }
      console.log('here token 1', token)
      setToken(token)
      setLoading(true)
      const {data: {data}} = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: '/workspaces/workspace',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setWorkspace(data)
      console.log('here 2', data)
    } catch (err) {
      console.log('error')
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    getToken()
    // console.log('here get', token)
    // console.log('here get data')
    // axios({
    //   method: 'GET',
    //   baseURL: SERVER_URL,
    //   url: '/workspaces/workspace',
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // })
    //   .then(( { data: { data } } ) => setWorkspace(data))
    // console.log('here url', SERVER_URL)
    console.log('here useeffect', workspace)
    
  }, [])

  return (
    <>
      <ViewContainer>
        <View style={{width: 330, height: 107 }}>
          <Title h3>Workspace</Title>
          <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
        </View>
        <View style={{backgroundColor: 'white', marginTop: 10 }}>
          {workspace && workspace.length > 0 && (
            <FlatList
              data={workspace}
              renderItem={({ item }) => {
                <View>
                  <TextWorkpace>{item.name}</TextWorkpace>
                  <TextWorkpace>{item.weeks}</TextWorkpace>
                  <TextWorkpace>{item.sprint}</TextWorkpace>
                </View>
              }}
              keyExtractor={(item) => `${item._id}`}
            />
          )}
        </View>
      </ViewContainer>
    </>
  )
}