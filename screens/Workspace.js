import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
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

export function Workspace({ navigation }) {

  const [name, setName] = useState('');
  const [sprint, setSprint] = useState(1);
  const [description, setDescription] = useState('');
  const [teammates, setTeammates] = useState('');
  const [weeks, setWeeks] = useState('');

  useEffect(() => {
    
  })

  return (
    <ViewContainerWorkspace>
      <CustomInput
          placeholder="Workspace name"
          placeholderTextColor ="#828282"
          onChangeText={text => setName(text)}
          value={description}
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
          onChangeText={text => setWeeks(text)}
          value={weeks}  
        />
      </View>
      <View style={styles.borderLine}>
        <ContainerRow>
          <CustomInputTeammates
            placeholder="Colaboradores"
            placeholderTextColor ="#828282"
            onChangeText={text => setTeammates(text)}
            value={teammates}
          />
          <Icon
              name="adduser"
              type="ant-design"
              color="#525666"
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
      <ContainerRow>
        <Button
          title="Guardar"
          color="#f2ea0d"
        />
        <Button
          title="Cancel"
          color="#bdbdbb"
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