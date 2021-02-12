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
  setName,
  setDescription,
  setAsign,
  setStatus,
  cleanForm
} from '../store/actions/backlog.action';

export function TaskEdit({ navigation, route, index }) {

  const dispatch = useDispatch();

  const dataTask = useSelector((
    { backlogReducer: {
      ...state
    }}) => {
      return { ...state }
  });

  const { name, description, status, asign } = dataTask

  useEffect(() => {
    

    return dispatch(cleanForm())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigation.navigate('Task')
  }

  const handleDelete = (e) => {
    e.preventDefault();
    
    navigation.navigate('Task')
  }

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
      <ViewContainerSprint style={styles.borderLine}>
        <View>
          <Picker
            style={styles.picker}
            itemStyle={styles.onePickerItem}
            selectedValue={status}
            mode="dropdowm"
            onValueChange={(itemValue) => 
              dispatch(setStatus(itemValue))
            }
          >
            <Picker.Item label="Backlog" value="BC" />
            <Picker.Item label="Por hacer" value="PH" />
            <Picker.Item label="En progreso" value="EP" />
            <Picker.Item label="Hecho" value="DO" />
          </Picker>  
        </View>
      </ViewContainerSprint>
      <View style={styles.borderLine}>
        <TextDescription
          multiline
          placeholder="¿Cuál es la descripción del espacio de la tarea?"
          placeholderTextColor ="#828282"
          onChangeText={text => dispatch(setDescription(text))}
          value={description}
        />
      </View>
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
})