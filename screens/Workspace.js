import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import {
  ViewContainerWorkspace,
  ViewContainerSprint,
} from '../components/styled/WorkspaceStyles.js';

export function Workspace({ navigation, route }) {

  const [sprint, setSprint] = useState(1);
  const [description, setDescription] = useState('');
  const [teammates, setTeammates] = useState([]);
  const [weeks, setWeeks] = useState('');

  useEffect(() => {
    
  })

  return (
    <ViewContainerWorkspace>
      <Text>Workspace name</Text>
      <ViewContainerSprint>
        <Text>
          Escoge la duración del sprint
        </Text>
        <View>
          <Picker
            style={styles.picker}
            itemStyle={styles.onePickerItem}
            selectedValue={sprint}
            onValueChange={(itemValue, itemIndex) => 
              setSprint(itemValue)
            }
          >
            <Picker.Item label="1 semana" value="1" />
            <Picker.Item label="2 semanas" value="2" />
          </Picker>  
        </View>
      </ViewContainerSprint>
      <View>
        <TextInput
          placeholder="Cual es la descripción del espacio de trabajo"
          placeholderTextColor ="rgba(45, 42, 54, 1)"
          onChangeText={text => setDescription(text)}
          value={description}
        />
      </View>
      <View>
        <Text>Cuantas semanas dura el proyecto</Text>
        <TextInput
          placeholderTextColor ="rgba(45, 42, 54, 1)"
          onChangeText={text => setweeks(text)}
          value={weeks}  
        />
      </View>
      <View>
        <Text>Colaboradores</Text>
        <TextInput
          placeholderTextColor ="rgba(45, 42, 54, 1)"
          onChangeText={text => setTeammates(text)}
          value={teammates}
        />
        <Icon
            name="adduser"
            type="ant-design"
            color="#525666"
          />
      </View>
      <View>
        <Icon
          name="plus"
          type="ant-design"
          color="#69c8d4"
          onPress={() => navigation.navigate('Workspace')}
        />
        <Text h3>Agregar backlog</Text>
      </View>
      <View>
        <Button
          title="Guardar"
          color="#f2ea0d"
        />
        <Button
          title="Cancel"
          color="#bdbdbb"
        />
      </View>
    </ViewContainerWorkspace>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: 200,
    height: 30,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  onePickerItem: {
    height: 30,
  },
})