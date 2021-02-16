import React, { useState, useEffect, useCallback, useMemo, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet, RefreshControl, SafeAreaView, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar, Text, SearchBar, } from 'react-native-elements';
import {
  ViewContainer,
  Title,
  TextAbout,
  ContainerAbout,
  ViewContainerWorkspaces,
} from '../components/styled/WorkspaceStyles';
import { getDataTask } from '../store/actions/backlog.action';
import Spinner from 'react-native-loading-spinner-overlay';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
]);

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export function Task({ navigation }) {

  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const { task, loading, } = useSelector(({ backlogReducer: { task, loading }}) => ({ task, loading }));


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch(getDataTask());
  }, [refreshing]);

  const updateSearch = (task) => {
    setSearch(task);
  };

  const filteredTask = useMemo(() =>
    task.filter((tasks) => {
      return tasks.name.toLowerCase().includes(search.toLowerCase());
    }), [task, search]);

  return (
    <>
      <SearchBar
        lightTheme
        round
        placeholder="Busca tu tarea"
        onChangeText={updateSearch}
        value={search}
      />
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
              <Title h3>Tareas</Title>
              <TextAbout>Las tareas que visualizas en está sección son todas las que has creado en tus workspaces.</TextAbout>
            </ContainerAbout>
            <ViewContainerWorkspaces>
              <FlatList
                data={filteredTask}
                renderItem={({ item, index }) => {
                  return (
                    <ListItem
                      bottomDivider
                      onPress={() => navigation.navigate('TaskEdit', { id: item._id, index: index, })}
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
                  );
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
    marginLeft: 200,
    marginTop: 15,
    padding: 5,
    backgroundColor: '#fff',
    width: 80,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#fff'
  },
});
