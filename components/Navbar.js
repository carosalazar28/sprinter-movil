import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components';

const ViewContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 28px;
  height: 40px;
`;


export function Navbar({ navigation }) {

  function navigationHome() {
    navigation.navigate('Home')
  }

  function navigationWorkspace() {
    navigation.navigate('Workspace')
  }

  return(
    <ViewContainer style={styles.container}>
      <Icon
        name="home"
        type="ant-design"
        size={35}
        color="#fff"
        onPress={navigationHome}
      />
      <Icon
        name="post-add"
        type="material"
        size={35}
        color="#fff"
      />
      <Icon
        name="paperclip"
        type="ant-design"
        size={35}
        color="#fff"
        onPress={navigationWorkspace}
      />
      <Icon
        name="ios-person-circle-outline"
        type="ionicon"
        size={35}
        color="#fff"
      />
    </ViewContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})