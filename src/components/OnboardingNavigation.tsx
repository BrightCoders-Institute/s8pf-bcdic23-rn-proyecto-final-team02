import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Nav = ({active}: {active: any}) => {
  return (
    <View>
      <Text>{active}</Text>
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
    <View style={styles.navigation}>
      <Nav active={patterns[activeScreen]} />
      <Button title="Next" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    justifyContent: 'flex-end',
  },
});

export default OnboardingNavigation;
