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
  createWorkspace,
  onAddTeammate,
  cleanForm,
  setName,
  setDescription,
  setWeeks,
  setSprint,
  setTeammate,
  setTeammates,
} from '../store/actions/workspace.action';

export function Workspace({ navigation }) {

  const dispatch = useDispatch();

  const dataWorkspace = useSelector((
    { workspaceReducer: {
      ...state
    }}) => {
      return { ...state }
  });

  const { name, description, weeks, sprint, teammates, teammate, error } = dataWorkspace

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createWorkspace(dataWorkspace))
    navigation.navigate('Workspaces')
  }

  const onAddTeammates = () => {
    dispatch(onAddTeammate(teammate))
  }

  const handleCancel = () => {
    dispatch(cleanForm())
  }
  
  useEffect(() => {
    return dispatch(cleanForm())
  }, [])

  return (
    <ViewContainerWorkspace>
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
            selectedValue={sprint}
            mode="dropdowm"
            onValueChange={(itemValue ) => 
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
        <Text>{teammates}</Text>
      </View>
      <ContainerBacklog>
        <Icon
          name="plus"
          type="ant-design"
          color="#69c8d4"
          style={{ marginRight: 13 }}
          onPress={() => navigation.navigate('Backlog')}
        />
        <Text h3>Agregar backlog</Text>
      </ContainerBacklog>
      <Text style={styles.textError}>{error}</Text>
      <ContainerRow>
        <Button
          title="Guardar"
          color="#f2ea0d"
          onPress={handleSubmit}
        />
        <Button
          title="Cancel"
          color="#bdbdbb"
          onPress={handleCancel}
        />
      </ContainerRow>
    </ViewContainerWorkspace>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: 120,
    height: 80,
    backgroundColor: '#f2ea0d',
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
})