import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUp } from '../screens/SignUp';
import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { Workspace } from '../screens/Workspace';
import { Task } from '../screens/Task';
import { Profile } from '../screens/Profile';

const Stack = createStackNavigator();

const screenOptionStyle = {
  cardStyle: { backgroundColor: '#2f2a3e'},
  headerStyle: {
    backgroundColor: "#2f2a3e",
  },
  headerTintColor: "#69c8d4",
  headerBackTitle: "Back",
};

export const MainStackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export const TaskStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  )
}

export const WorkspaceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Workspace" component={Workspace} />
    </Stack.Navigator>
  )
}

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}