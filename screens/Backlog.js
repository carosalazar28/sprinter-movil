import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, } from 'react-native';
import { Text, Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDataBacklog,
  setName,
  createTask,
  cleanBacklog,
  cleanBacklogRender,
} from '../store/actions/backlog.action';
import Spinner from 'react-native-loading-spinner-overlay';

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

  const { taskBacklog, loading, name, backlogId } = useSelector(({ backlogReducer: { taskBacklog, loading, message, name }}) => ({ taskBacklog, loading, message, name }));

  useEffect(() => {
    if(route.params.id) {
      dispatch(getDataBacklog(route.params.id));
    } else {
      dispatch(getDataBacklog(backlogId));
    }

    return dispatch(cleanBacklogRender());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(name, route.params.work));
    dispatch(cleanBacklog());
  };

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollContainerBacklog>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
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
          { taskBacklog && taskBacklog.length ? taskBacklog.map(item => {
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
  },
  spinnerTextStyle: {
    color: '#fff'
  },
});
