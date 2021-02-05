import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Pricker } from '@react-native-picker/picker';

export function Workspace({ navigation, route }) {

  const [sprint, setSprint] = useState(1);

  useEffect(() => {
    
  })

  return (
    <View>
      <Text>Workspace name</Text>
      <View>
        <Text>
          Escoge la duración del sprint
        </Text>
        <Picker
          selectedValue={sprint}
          onValueChange={(itemValue, itemIndex) => 
            setSprint(itemValue)
          }
        >
          <Picker.Item label="1 semana" value="1" />
          <Picker.Item label="2 semanas" value="2" />
        </Picker>
      </View>
    </View>
  )
}