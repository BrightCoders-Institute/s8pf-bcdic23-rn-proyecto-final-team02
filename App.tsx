/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

import Onboarding from './src/screens/OnboardingScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <View style={styles.App}>
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
  },
});

export default App;
