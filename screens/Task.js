import React, { useState } from 'react';
import { View, Text } from 'react-native';import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet, Text, RefreshControl, SafeAreaView, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Icon, Avatar } from 'react-native-elements'
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

export function Task() {

  const dispatch = useDispatch();

  const { task } = useSelector(({ backlogReducer: { task }}) => ({ task }))

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
            <Text style={styles.textError}>{error}</Text>
            <ViewContainerWorkspaces>
              <FlatList
                data={task}
                renderItem={({ item, index }) => {
                  return (
                    <ListItem 
                      bottomDivider
                      onPress={() => navigation.navigate('taskEdit')}
                    >
                      <Avatar source={{uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613085189/sprinter/ui/profile_f894xe.png'}} />
                      <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                        <ListItem.Subtitle>{item.asign}</ListItem.Subtitle>
                        <ListItem.Subtitle>{item.status}</ListItem.Subtitle>
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