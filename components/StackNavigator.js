import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Workspaces } from '../screens/Workspaces';
import { Workspace } from '../screens/Workspace';
import { WorkspaceEdit } from '../screens/WorkspaceEdit';
import { Backlog } from '../screens/Backlog';
import { Task } from '../screens/Task';
import { Profile } from '../screens/Profile';

const Stack = createStackNavigator();

const screenOptionStyle = {
  cardStyle: { backgroundColor: '#2f2a3e'},
  headerStyle: {
    backgroundColor: "#f2f2f2",
  },
  headerTintColor: "#69c8d4",
  headerBackTitle: "Back",
};

export const HomeStackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
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
      <Stack.Screen name="Workspaces" component={Workspaces} />
      <Stack.Screen name="Workspace" component={Workspace}/>
      <Stack.Screen name="WorkspaceEdit" component={WorkspaceEdit}/>
      <Stack.Screen name="Backlog" component={Backlog} />
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