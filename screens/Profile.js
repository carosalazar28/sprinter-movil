import React from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const list = [
  {
    title: 'Backlog',
    icon: 'list-alt',
    type: 'font-awesome'
  },
  {
    title: 'Tareas asignadas',
    icon: 'folder-open',
    type: 'font-awesome'
  },
];

export function Profile() {
  return (
    <>
      <View>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613234403/sprinter/ui/Logo_SPRINTER_vpejk2.png' }}
          style={{ width: 80, height: 75, borderRadius: 25 }}
        />
        <Text>Carolina</Text>
      </View>
      <View>
        { list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} type={item.type} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </>
  );
}
