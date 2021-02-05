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

  const [loading, setLoading] = useState(false)
  const [workspace, setWorkspace] = useState([])

  async function getToken() {
    try {
      const token = await AsyncStorage.getItem('token')
      if(!token) {
        navigation.navigate('SignIn')
      }
      console.log('here token 1', token)
      setLoading(true)
      const {data: {data}} = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: '/workspaces/workspace',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return setWorkspace(data)
      console.log('here 2 works', workspace)
      console.log('here 3 data', data)
    } catch (err) {
      console.log('error')
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    getToken()
    console.log('here useeffect', workspace)
  }, [])

  const result = workspace ? workspace : null

  return (
    <>
    {result && (
      <ViewContainer>
        <View style={{width: 330, height: 107 }}>
          <Title h3>Workspace</Title>
          <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
        </View>
        <View>
          {result && result.length > 0 && (
            <FlatList
              data={result}
              renderItem={({ item }) => {
                <View style={{backgroundColor: 'white', marginTop: 10 }}>
                  <TextWorkpace>{item.name}</TextWorkpace>
                </View>
              }}
              keyExtractor={(item) => `${item._id}`}
            />
          )}
        </View>
      </ViewContainer>
    )}
    </>
  )
}