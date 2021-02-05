import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  ViewContainerWorkspace,
  ViewContainerSprint,
} from '../components/styled/WorkspaceStyles.js';

export function Workspace({ navigation, route }) {

  const [sprint, setSprint] = useState(1);

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