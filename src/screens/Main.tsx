import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { observer } from 'mobx-react';
import { COLORS } from '../styles';

const logo = require('../assets/reactnativelogo.png');

const { width } = Dimensions.get('window');

const Main: React.FC = () => {

  return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Image source={logo} style={styles.logo} testID={'logo-image'}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
      alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 50,
    textAlign: 'center',
    marginTop:50,
  },
  logo: {
    width: width - 100,
    height: 300,
    resizeMode: 'contain',
  },
});

export default observer(Main);
