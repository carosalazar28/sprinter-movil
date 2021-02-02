import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, WorkspaceStackNavigator } from './StackNavigator';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator}
        options={{
          tabBarIcon: () => (
            <Icon
              name="home"
              type="ant-design"
              size={35}
              color="#fff"
            />
          ),
        }}
      />
      <Tab.Screen name="Workspace" component={WorkspaceStackNavigator}
        options={{
          tabBarIcon: () => (
            <Icon
              name="paperclip"
              type="ant-design"
              size={35}
              color="#fff"
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}