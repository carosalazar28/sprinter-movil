import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WorkspaceStackNavigator, TaskStackNavigator, ProfileStackNavigator, HomeStackNavigator } from './StackNavigator';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return(
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#69c8d4'
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              type="ant-design"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen name="Workspaces" component={WorkspaceStackNavigator}
        options={{
          tabBarLabel: 'Workspaces',
          tabBarIcon: ({ color }) => (
            <Icon
              name="paperclip"
              type="ant-design"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen name="Task" component={TaskStackNavigator}
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ color }) => (
            <Icon
              name="post-add"
              type="material"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon
              name="ios-person-circle-outline"
              type="ionicon"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}