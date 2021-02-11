import React from 'react';
import { SafeAreaView, StyleSheet, View, } from 'react-native';
import { Text, Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

const Title = styled(Text)`
  margin: 10px 0;
`;

const ScrollContainerBacklog = styled(ScrollView)`
  background-color: #fff;
  padding: 16px 26px;
`;

export function Backlog() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollContainerBacklog>
        <View>
          <Title h3>
            Backlog
          </Title>
          <Input 
            leftIcon={
              <Icon
                name="plus"
                type="ant-design"
                color="#69c8d4"
                size={15}
              />
            }
            placeholder="Agregar una nueva tarea <Enter> para guardar"
            style={styles.input}
            multiline
          />
        </View>
      </ScrollContainerBacklog>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 7,
  },
})