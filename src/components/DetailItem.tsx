import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface DetailItemProps {
  title?: string;
  value?: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ title, value }) => {
  if (!title || !value) {
    return null;
  }

  return (
      <View style={styles.detailItem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    width,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default DetailItem;
