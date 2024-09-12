import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';

interface User {
  id: number;
  parentId: number;
  imagePath: string;
  name: string;
}

interface UserItemProps {
  item: User;
  onPress: (item: User) => void;
}

const { width } = Dimensions.get('window');

const UserItem: React.FC<UserItemProps> = ({ item, onPress }) => (
    <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.card}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: width * 0.9, // Width of each card, with some margin
    paddingVertical: 15,
    backgroundColor: '#ffffff', // White background for the box
    marginVertical: 10, // Space between each box
    borderRadius: 8, // Rounded corners for the white box
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 2, // For Android shadow effect
    alignSelf: 'center', // Center the box horizontally
  } as ViewStyle,
  text: {
    fontSize: 16,
    color: '#333',
    paddingLeft:15
  } as TextStyle,
});

export default React.memo(UserItem);
