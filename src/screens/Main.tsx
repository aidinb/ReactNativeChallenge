import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {observer} from 'mobx-react';
import {COLORS} from '../styles';

// Import the SVG file
// import WelcomeSvg from '../assets/welcome.svg'; // Adjust path as needed

// Import the logo from local assets
const logo = require('../assets/browse-cuisines.png'); // Adjust the path based on your project structure

const {width, height} = Dimensions.get('window');

const Main: React.FC = () => {
  return (
      <View style={styles.container}>
        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome</Text>

        {/* Welcome SVG */}
        {/*<WelcomeSvg width={width * 0.6} height={height * 0.3} />*/}

        {/* Logo */}
        <Image source={logo} style={styles.logo} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20, // Space between the text and the SVG
    textAlign: 'center',
    position: 'absolute', // Fixes the text at the top
    top: 80,
  } as TextStyle,
  logo: {
    width: width * 0.5,  // Logo takes 50% of screen width
    height: height * 0.2, // Logo takes 20% of screen height
    resizeMode: 'contain', // Ensure the logo maintains aspect ratio
    marginTop: 40, // Space between SVG and logo
  } as ImageStyle,
});

export default observer(Main);
