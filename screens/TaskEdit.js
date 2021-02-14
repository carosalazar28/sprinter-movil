import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import {
  ViewContainerWorkspace,
  CustomInput,
  TextDescription,
  CustomInputWeeks,
  ContainerRow,
} from '../components/styled/WorkspaceStyles.js';
import {
  setName,
  setDescription,
  setAsign,
  setStatus,
  cleanForm,
  getDataTaskId,
  updateTask,
} from '../store/actions/backlog.action';

export function TaskEdit({ navigation, route, index }) {

  const dispatch = useDispatch();

  const dataTask = useSelector((
    { backlogReducer: {
      ...state
    }}) => {
    return { ...state };
  });

  const { name, description, status, asign } = dataTask;

  useEffect(() => {
    dispatch(getDataTaskId(route.params.id));

    return dispatch(cleanForm());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(dataTask, route.params.id, index));
    navigation.navigate('Task');
  };

  const handleDelete = (e) => {
    e.preventDefault();

    navigation.navigate('Task');
  };

  return (
    <ViewContainerWorkspace>
      <CustomInput
        placeholder="Titulo de la tarea"
        placeholderTextColor ="#828282"
        onChangeText={text => dispatch(setName(text))}
        value={name}
      />
      <View style={styles.borderLine}>
        <CustomInputWeeks
          placeholder= "Asign"
          placeholderTextColor ="#828282"
          keyboardType="numeric"
          onChangeText={text => dispatch(setAsign(text))}
          value={asign}
        />
      </View>
      <View style={styles.borderLine}>
        <TextDescription
          multiline
          placeholder="¿Cuál es la descripción del espacio de la tarea?"
          placeholderTextColor ="#828282"
          onChangeText={text => dispatch(setDescription(text))}
          value={description}
        />
      </View>
      <View style={styles.containerStatus}>
        <Picker
          style={styles.picker}
          itemStyle={styles.onePickerItem}
          selectedValue={status}
          mode="dropdowm"
          onValueChange={(itemValue) =>
            dispatch(setStatus(itemValue))
          }
        >
          <Picker.Item label="Backlog" value="Backlog" />
          <Picker.Item label="Por hacer" value="PH" />
          <Picker.Item label="En progreso" value="EP" />
          <Picker.Item label="Hecho" value="DO" />
        </Picker>
      </View>
      <ContainerRow style={styles.containerBotton}>
        <Button
          title="Guardar"
          color="#f2ea0d"
          onPress={handleSubmit}
        />
        <Button
          title="Borrar"
          color="#bdbdbb"
          onPress={handleDelete}
        />
      </ContainerRow>
    </ViewContainerWorkspace>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: 150,
    height: 40,
    borderColor: '#828282',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center'
  },
  onePickerItem: {
    height: 40,
    fontSize: 14,
    width: 140,
    borderRadius: 10,
    transform: [
      { scaleX: 0.9 },
      { scaleY: 0.9 },
    ],
  },
  borderLine: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 2,
  },
  containerStatus: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 2,
    paddingTop: 15,
    height: 200,
  },
  containerBotton: {
    marginTop: 30,
  }
});
