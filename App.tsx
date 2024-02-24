import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigation from './src/routes/StackNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <StackNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default App;
