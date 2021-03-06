import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet, Text, RefreshControl, SafeAreaView, LogBox } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import {
  ViewContainer,
  Title,
  TextAbout,
  ContainerAbout,
  ViewContainerWorkspaces,
} from '../components/styled/WorkspaceStyles';
import { getData } from '../store/actions/workspace.action';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
]);

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export function Workspaces({ navigation }) {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const dispatch = useDispatch();

  const { workspacesList, loading } = useSelector(({ workspaceReducer: { workspacesList, loading }}) => ({ workspacesList, loading }));

  useEffect(() => {
    dispatch(getData());
  }, [workspacesList.length, refreshing]);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ViewContainer>
          <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <ScrollView>
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
            <ContainerAbout>
              <Title h3>Workspace</Title>
              <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
            </ContainerAbout>
            <View style={{ alignItems: 'flex-end', paddingRight: 25 }}>
              <Icon
                name="plus"
                type="ant-design"
                color="#69c8d4"
                onPress={() => navigation.navigate('Workspace')}
              />
            </View>
            <ViewContainerWorkspaces>
              {workspacesList.length > 0 ? (
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
                    );
                  }}
                  keyExtractor={(item) => `${item._id}`}
                />
              ) : (
                <Text style={{ padding: 8, textAlign: 'center' }}>Aún no tienes workspaces creados</Text>
              )}
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
  spinnerTextStyle: {
    color: '#fff'
  },
});
