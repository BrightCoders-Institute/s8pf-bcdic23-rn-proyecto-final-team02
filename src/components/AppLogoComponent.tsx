import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const AppLogoComponent = () => {
  const logo = require('../assets/logo-transparent.png');
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 360,
    height: 203,
    alignSelf: 'center',
  },
});

export default AppLogoComponent;
