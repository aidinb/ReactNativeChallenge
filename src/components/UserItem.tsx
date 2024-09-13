import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Item } from '../utils/types.ts';

interface UserItemProps {
  item: Item;
  onPress: (item: Item) => void;
}

const { width } = Dimensions.get('window');

const UserItem: React.FC<UserItemProps> = ({ item, onPress }) => (
    <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.card}
    >
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    paddingLeft: 15,
  },
});

export default React.memo(UserItem);
