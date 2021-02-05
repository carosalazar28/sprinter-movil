import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URL } from '@env';
import {
  ViewContainer,
  Title,
  TextAbout,
  ContainerAbout,
  ViewContainerWorkspaces,
} from '../components/styled/WorkspaceStyles';



export function Workspace({ navigation }) {

  const [loading, setLoading] = useState(false)
  const [workspace, setWorkspace] = useState([])

  async function getToken() {
    try {
      const token = await AsyncStorage.getItem('token')
      if(!token) {
        navigation.navigate('SignIn')
      }
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
    } catch (err) {
      console.log('error')
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    getToken()
  }, [])

  return (
    <>
    {workspace ? (
      <ViewContainer>
        <ContainerAbout>
          <Title h3>Workspace</Title>
          <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
        </ContainerAbout>
        <ViewContainerWorkspaces>
          <FlatList
            data={workspace}
            renderItem={({ item }) => {
              return (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.weeks} weeks</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.sprints}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron/>
                </ListItem>
              )
            }}
            keyExtractor={(item) => `${item._id}`}
          />
        </ViewContainerWorkspaces>
      </ViewContainer>
    ) : (
      <ViewContainer>
        <Title>loading</Title>
      </ViewContainer>
    )}
    </>
  )
}