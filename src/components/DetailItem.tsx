import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

interface DetailItemProps {
  title: string;
  value: string | undefined;
}

const DetailItem: React.FC<DetailItemProps> = ({title, value}) => (
    <View style={styles.detailItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
  detailItem: {
    width: width,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Bottom border separator
    paddingHorizontal: 20,
  } as ViewStyle,
  title: {
    fontSize: 14,
    color: '#888', // Gray color for title
    marginBottom: 5,
  } as TextStyle,
  value: {
    fontSize: 16,
    color: '#333', // Darker color for the value
    textAlign: 'center', // Centered text
  } as TextStyle,
});

export default DetailItem;
