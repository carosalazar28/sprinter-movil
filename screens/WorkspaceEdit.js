import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import {
  ViewContainerWorkspace,
  ViewContainerSprint,
  CustomInput,
  TextSprint,
  TextDescription,
  TextWeeks,
  CustomInputWeeks,
  ContainerRow,
  CustomInputTeammates,
  ContainerBacklog
} from '../components/styled/WorkspaceStyles.js';
import {
  getDataWorkspace,
  updateWorkspace,
  onAddTeammate,
  setName,
  setDescription,
  setWeeks,
  setSprint,
  setTeammate,
  deleteWorkspace,
  cleanForm
} from '../store/actions/workspace.action';
import Spinner from 'react-native-loading-spinner-overlay';

export function WorkspaceEdit({ navigation, route }) {

  const dispatch = useDispatch();

  const dataWorkspace = useSelector((
    { workspaceReducer: {
      ...state
    }}) => {
    return { ...state };
  });

  const { name, description, weeks, sprint, teammates, teammate, loading, message } = dataWorkspace;

  useEffect(() => {
    dispatch(getDataWorkspace(route.params.id));
    return dispatch(cleanForm());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWorkspace(dataWorkspace, route.params.id, route.params.index));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteWorkspace(route.params.id, route.params.index));
    navigation.navigate('Workspaces');
  };

  const onAddTeammates = () => {
    dispatch(onAddTeammate(teammate));
  };

  return (
    <ViewContainerWorkspace>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <CustomInput
        placeholder="Workspace name"
        placeholderTextColor ="#828282"
        onChangeText={text => dispatch(setName(text))}
        value={name}
      />
      <ViewContainerSprint style={styles.borderLine}>
        <TextSprint>
          Escoge la duración del sprint
        </TextSprint>
        <View>
          <Picker
            style={styles.picker}
            itemStyle={styles.onePickerItem}
            selectedValue={sprint.toString()}
            mode="dropdowm"
            onValueChange={(itemValue) =>
              dispatch(setSprint(itemValue))
            }
          >
            <Picker.Item label="1 semana" value="1" />
            <Picker.Item label="2 semanas" value="2" />
          </Picker>
        </View>
      </ViewContainerSprint>
      <View style={styles.borderLine}>
        <TextDescription
          multiline
          placeholder="¿Cuál es la descripción del espacio de trabajo?"
          placeholderTextColor ="#828282"
          onChangeText={text => dispatch(setDescription(text))}
          value={description}
        />
      </View>
      <View style={styles.borderLine}>
        <TextWeeks>¿Cuántas semanas dura el proyecto?</TextWeeks>
        <CustomInputWeeks
          placeholder= "12"
          placeholderTextColor ="#828282"
          keyboardType="numeric"
          onChangeText={text => dispatch(setWeeks(text))}
          value={weeks.toString()}
        />
      </View>
      <View style={styles.borderLine}>
        <ContainerRow>
          <CustomInputTeammates
            placeholder="Colaboradores"
            placeholderTextColor ="#828282"
            onChangeText={text => dispatch(setTeammate(text))}
            value={teammate}
          />
          <Icon
            name="adduser"
            type="ant-design"
            color="#525666"
            onPress={onAddTeammates}
          />
        </ContainerRow>
        {teammates && teammates.map((item, index) => {
          return (
            <Text style={styles.textTeammate} key={index}>{item}</Text>
          )}
        )}
      </View>
      <Text style={styles.textSuccesfully}>{message}</Text>
      <ContainerRow>
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
      <ContainerBacklog>
        <Icon
          name="plus"
          type="ant-design"
          color="#69c8d4"
          style={{ marginRight: 13 }}
          onPress={() => navigation.navigate('Backlog', { id: route.params.backlog, work: route.params.id })}
        />
        <Text style={styles.textBacklog}>Agregar backlog</Text>
      </ContainerBacklog>
    </ViewContainerWorkspace>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: 155,
    height: 80,
    borderColor: '#828282',
    borderWidth: 1,
    borderRadius: 10,
  },
  onePickerItem: {
    height: 80,
    fontSize: 14,
    width: 120,
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
  textError: {
    color: 'red',
    fontWeight: 'bold'
  },
  textBacklog: {
    fontSize: 18,
  },
  textTeammate: {
    padding: 8,
  },
  textSuccesfully: {
    color: '#fb68d2',
    fontWeight: 'bold',
    letterSpacing: 2
  },
  spinnerTextStyle: {
    color: '#fff'
  },
});
