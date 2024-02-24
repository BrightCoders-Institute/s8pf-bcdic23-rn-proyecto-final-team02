import React from 'react';
import {Image, StyleSheet} from 'react-native';

import logo from '../assets/logo-blanco.png';

const LogoComponent = () => {
  return <Image source={logo} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 203,
    alignSelf: 'center',
  },
});

export default LogoComponent;
