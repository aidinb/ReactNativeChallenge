import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { observer } from 'mobx-react';
import { COLORS } from '../styles';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useStores } from '../stores';

const logo = require('../assets/browse-cuisines.png');

const { width, height } = Dimensions.get('window');

const Main: React.FC = () => {
  const { mainStore } = useStores(); // Access the store

  return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Image source={logo} style={styles.logo} testID={'logo-image'}/>
        {mainStore.error && <ErrorMessage message={mainStore.error} />}
        {mainStore.loading && <Loading />}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20, // Space between the text and the logo
    textAlign: 'center',
    position: 'absolute', // Fixes the text at the top
    top: 80,
  },
  logo: {
    width: width * 0.5,  // Logo takes 50% of screen width
    height: height * 0.2, // Logo takes 20% of screen height
    resizeMode: 'contain', // Ensure the logo maintains aspect ratio
    marginTop: 40, // Space between text and logo
  },
});

export default observer(Main);
