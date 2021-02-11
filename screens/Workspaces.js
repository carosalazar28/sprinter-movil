import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet, Text, RefreshControl, SafeAreaView, LogBox } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import {
  ViewContainer,
  Title,
  TextAbout,
  ContainerAbout,
  ViewContainerWorkspaces,
} from '../components/styled/WorkspaceStyles';
import { getData } from '../store/actions/workspace.action';
import { ScrollView } from 'react-native-gesture-handler';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
])

export function Workspaces({ navigation }) {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const dispatch = useDispatch();
  
  const { workspacesList, loading, error } = useSelector(({ workspaceReducer: { workspacesList, loading, error }}) => ({ workspacesList, loading, error }))
  
  useEffect(() => {
    dispatch(getData())
  }, [])

  if(loading) <Text>Loading...</Text>

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ViewContainer>
          <ScrollView>
            <RefreshControl 
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
            <ContainerAbout>
              <Title h3>Workspace</Title>
              <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
            </ContainerAbout>
            <Text style={styles.textError}>{error}</Text>
            <View style={{ alignItems: 'flex-end', paddingRight: 25 }}>
              <Icon
                name="plus"
                type="ant-design"
                color="#69c8d4"
                onPress={() => navigation.navigate('Workspace')}
              />
            </View>
            <ViewContainerWorkspaces>
              <FlatList
                data={workspacesList}
                renderItem={({ item, index }) => {
                  return (
                    <ListItem 
                      bottomDivider
                      onPress={() => navigation.navigate('WorkspaceEdit', { id: item._id, index: index, backlog: item.backlog })}
                    >
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
          </ScrollView>
        </ViewContainer>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    fontWeight: 'bold'
  }
})