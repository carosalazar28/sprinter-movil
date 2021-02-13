import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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

export function Profile({ navigation }) {
  return (
    <>
      <View style={styles.viewName}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit")} style={styles.viewIconEdit}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613085189/sprinter/ui/profile_f894xe.png'}}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613234403/sprinter/ui/Logo_SPRINTER_vpejk2.png' }}
          style={{ width: 80, height: 80, marginTop: 30, marginBottom: 15 }}
        />
        <Text style={styles.nameUser}>Carolina</Text>
      </View>
      <View style={styles.viewList} onPress={() => navigation.navigate("ProfileEdit")}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={styles.viewListItem} >
              <Icon name={item.icon} type={item.type} />
              <View style={{ flex: 1 }}>
                <Text style={styles.textFlatlist}>{item.title}</Text>
              </View>
              <Icon name="right" type="ant-design" color="#69c8d4" />
            </View>
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
    backgroundColor: 'white',
    height: 700
  },
  viewListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 15,
    padding: 25
  },
  viewName: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFlatlist: {
    marginLeft: 18,
    fontSize: 18
  },
  viewIconEdit: {
    position: 'absolute',
    right: 18,
    top: 32
  }
});
