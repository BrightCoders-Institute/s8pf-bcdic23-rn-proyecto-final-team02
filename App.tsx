import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SplashScreen} from './src/screens';
import Onboarding from './src/screens/OnboardingScreen';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.app}>
      {visible && <SplashScreen />}
      <Onboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default App;
