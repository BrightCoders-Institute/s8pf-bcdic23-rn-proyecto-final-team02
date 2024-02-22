import React from 'react';
import {View, Text, Button, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const Nav = ({activeScreen}: {activeScreen: number}) => {
  return (
    <View style={[styles.navContainer, styles.flexRow]}>
      <View style={[styles.circle, activeScreen === 0 ? styles.circle_active : false]} />
      <View style={[styles.circle, activeScreen === 1 ? styles.circle_active : false]} />
      <View style={[styles.circle, activeScreen === 2 ? styles.circle_active : false]} />
    </View>
  );
};

const OnboardingNavigation = ({
  activeScreen,
  onPress,
}: {
  activeScreen: number;
  onPress: any;
}) => {
  const patterns = ['1 0 0', '0 1 0', '0 0 1'];

  return (
    <View style={[styles.navigation, styles.flexRow]}>
      <Nav activeScreen={activeScreen} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>--></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    justifyContent: 'flex-end',
    width: '100%',
    bottom: 25,
  },
  navContainer: {
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  circle_active: {
    backgroundColor: 'purple',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'purple',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  }
});

export default OnboardingNavigation;
