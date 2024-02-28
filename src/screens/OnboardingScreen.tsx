import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import OnboardingBody from '../components/OnboardingBody';
import OnboardingNavigation from '../components/OnboardingNavigation';
import {useNavigation} from '@react-navigation/native';

function OnboardingScreen() {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState(0);

  const setScreen = () => {
    setActiveScreen(activeScreen + 1);
  };

  // Remove onboarding after the navigate
  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.OnboardingContainer}>
      <OnboardingBody activeScreen={activeScreen} />
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

export default OnboardingScreen;
