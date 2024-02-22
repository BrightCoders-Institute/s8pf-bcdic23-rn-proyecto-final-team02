import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import OnboardingScreen from '../components/OnboardingBody';
import OnboardingNavigation from '../components/OnboardingNavigation';

function Onboarding() {
  const [activeScreen, setActiveScreen] = useState(0);

  const setScreen = () => {
    setActiveScreen(activeScreen + 1);
  };

  const navigateToSignUp = () => {
    console.log('Go to Sign Up');
  };

  return (
    <View style={styles.OnboardingContainer}>
      <OnboardingScreen activeScreen={activeScreen} />
      <OnboardingNavigation
        activeScreen={activeScreen}
        onPress={activeScreen === 2 ? navigateToSignUp : setScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  OnboardingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding;
