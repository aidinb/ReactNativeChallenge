import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{message}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    marginTop: 20, // Space between logo/loading indicator and error message
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: COLORS.red,
    textAlign: 'center',
  },
});

export default ErrorMessage;
