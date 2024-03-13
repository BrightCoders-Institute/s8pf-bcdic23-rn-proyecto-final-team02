import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import StackNavigation from './src/routes/StackNavigation';

function App(): React.JSX.Element {
  return (
    <View style={styles.app}>
      <StackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
