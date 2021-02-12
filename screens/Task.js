import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet, RefreshControl, SafeAreaView, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar, Text } from 'react-native-elements'
import {
  ViewContainer,
  Title,
  TextAbout,
  ContainerAbout,
  ViewContainerWorkspaces,
} from '../components/styled/WorkspaceStyles';
import { getDataTask } from '../store/actions/backlog.action';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
])

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function Task({ navigation }) {

  const dispatch = useDispatch();

  const { task, message } = useSelector(({ backlogReducer: { task, message }}) => ({ task, message }))

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch(getDataTask())
  }, [])

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
              <Title h3>Tareas</Title>
              <TextAbout>Las tareas que visualizas en está sección son todas las que has creado en tu backlog.</TextAbout>
            </ContainerAbout>
            <Text style={styles.textError}>{message}</Text>
            <ViewContainerWorkspaces>
              <FlatList
                data={task}
                renderItem={({ item, index }) => {
                  return (
                    <ListItem 
                      bottomDivider
                      onPress={() => navigation.navigate('taskEdit', { id: item._id })}
                    >
                      <Avatar source={{uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613088152/sprinter/ui/taskavatar_fiqyv9.png'}} />
                      <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <View>
                          <Text>{item.description}</Text>
                        </View>
                        <View style={styles.statusText}>
                          {item.status ? (
                            <Text>{item.status}</Text>
                          ) : (
                            <Text>Backlog</Text>
                          )}
                        </View>
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
  );
}

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    fontWeight: 'bold'
  },
  statusText: {
    flex: 1,
    marginLeft: 220,
    padding: 5,
    backgroundColor: '#fff',
    width: 80,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  }
})