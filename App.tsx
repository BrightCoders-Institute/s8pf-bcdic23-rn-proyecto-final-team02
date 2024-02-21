import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {SplashScreen, LoginScreen} from './src/screens';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {visible && <SplashScreen />}
      <LoginScreen />
    </SafeAreaView>
  );
}

export default App;
