import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

const ViewContainer = styled(View)`
  padding: 17px;
  margin: 10px auto;
`;

const Title = styled(Text)`
  color: #f2ea0d;
  margin: 10px 0;
`;

const TextAbout = styled(Text)`
  color: #fff;
  font-size: 14px;
`;

export function Workspace() {
  return (
    <ViewContainer>
      <View style={{width: 330, height: 107 }}>
        <Title h3>Workspace</Title>
        <TextAbout>El espacio de trabajo tiene el backlog con las tareas que se han creado, acá podrás interactuar con los sprints.</TextAbout>
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
        
      </ScrollView>
    </ViewContainer>
  )
}