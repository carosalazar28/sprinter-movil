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
import axios from 'axios';
import { SERVER_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataWorkspace, updateWorkspace, onAddTeammate } from '../store/actions/workspace.action';

export function WorkspaceEdit({ navigation, route, index }) {

  const dispatch = useDispatch();

  const dataWorkspace = useSelector((
    { workspaceReducer: {
      ...state
    }}) => {
      return { ...state }
  });

  const { name, description, weeks, sprint, teammates, teammate, error } = dataWorkspace

  useEffect(() => {
    dispatch(getDataWorkspace(route.params.id));
    console.log(weeks)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateWorkspace(dataWorkspace, route.params.id, index))
  }

  const handleDelete = async (e) => {
    e.preventDefault();

    const token = await AsyncStorage.getItem('token');
    console.log(token)
    try {
      await axios({
        method: 'DELETE',
        baseURL: SERVER_URL,
        url: `/workspaces/${route.params.id}`,
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      navigation.navigate('Workspaces')
    } catch(err) {
      setError('Lo sentimos, no pudimos borrar tu workspace, vuelve a intentarlo mas tarde')
    }
  }

  const onAddTeammate = () => {
    dispatch(onAddTeammate(teammate))
  }

  return (
    <ViewContainerWorkspace>
      <CustomInput
          placeholder="Workspace name"
          placeholderTextColor ="#828282"
          onChangeText={text => setName(text)}
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
            onValueChange={(itemValue, itemIndex) => 
              setSprint(itemValue)
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
          onChangeText={text => setDescription(text)}
          value={description}
        />
      </View>
      <View style={styles.borderLine}>
        <TextWeeks>¿Cuántas semanas dura el proyecto?</TextWeeks>
        <CustomInputWeeks
          placeholder= "12"
          placeholderTextColor ="#828282"
          keyboardType="numeric"
          onChangeText={text => setWeeks(text)}
          value={weeks}  
        />
      </View>
      <View style={styles.borderLine}>
        <ContainerRow>
          <CustomInputTeammates
            placeholder="Colaboradores"
            placeholderTextColor ="#828282"
            onChangeText={text => setTeammate(text)}
            value={teammate}
          />
          <Icon
              name="adduser"
              type="ant-design"
              color="#525666"
              onPress={onAddTeammate}
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
          onPress={() => navigation.navigate('Workspace')}
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
          title="Borrar"
          color="#bdbdbb"
          onPress={handleDelete}
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
  }
})