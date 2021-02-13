import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

const list = [
  {
    title: 'Backlog',
    icon: 'list-alt',
    type: 'font-awesome',
    id: '1'
  },
  {
    title: 'Tareas asignadas',
    icon: 'folder-open',
    type: 'font-awesome',
    id: '2'
  },
];

export function Profile() {
  return (
    <>
      <View style={styles.viewName}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613234403/sprinter/ui/Logo_SPRINTER_vpejk2.png' }}
          style={{ width: 80, height: 80, marginTop: 30, marginBottom: 15 }}
        />
        <Text style={styles.nameUser}>Carolina</Text>
      </View>
      <View style={styles.viewList}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <>
              <Icon name={item.icon} type={item.type} />
              <Text>{item.title}</Text>
            </>
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  nameUser: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  viewList: {
    padding: 25,
    backgroundColor: '#f2f2f2',
    height: 700,
    flexDirection: 'row'
  },
  viewName: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
