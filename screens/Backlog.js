import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, } from 'react-native';
import { Text, Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDataBacklog,
  cleanTask,
  setName,
  createTask,
  cleanBacklog
} from '../store/actions/backlog.action';

const Title = styled(Text)`
  margin: 10px 0;
`;

const ScrollContainerBacklog = styled(ScrollView)`
  background-color: #fff;
  padding: 16px 26px;
`;

const ContainerNoContent = styled(View)`
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export function Backlog({ route }) {

  const dispatch = useDispatch();

  const { task, loading, message, name, backlogId } = useSelector(({ backlogReducer: { task, loading, message, name }}) => ({ task, loading, message, name }));

  useEffect(() => {
    dispatch(getDataBacklog(backlogId));

    return dispatch(cleanTask());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('task', route.params.work)
    dispatch(createTask(name, route.params.work));
    dispatch(cleanBacklog());
  };

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollContainerBacklog>
        <View>
          <Title h3>
            Backlog
          </Title>
          <Input
            leftIcon={
              <Icon
                name="plus"
                type="ant-design"
                color="#69c8d4"
                size={15}
                onPress={handleSubmit}
              />
            }
            placeholder="Agregar una nueva tarea <Enter> para guardar"
            style={styles.input}
            multiline
            onChangeText={text => dispatch(setName(text))}
            value={name}
          />
        </View>
        <View>
          { task && task.length ? task.map(item => {
            return (
              <View style={styles.containerTask} key={item._id}>
                <Text
                  style={styles.title}
                >
                  {item.name}
                </Text>
              </View>
            )}) : (
            <ContainerNoContent>
              <Text>No tienes backlog en esté workspace</Text>
            </ContainerNoContent>
          )}
        </View>
      </ScrollContainerBacklog>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 7,
  },
  title: {
    fontSize: 18,
  },
  containerTask: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingBottom: 25,
    paddingLeft: 8,
    marginTop: 10,
  }
});
