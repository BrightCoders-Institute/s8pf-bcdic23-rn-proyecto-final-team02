import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Onboarding() {
  const [activePage, setActivePage] = useState(1);

  const jumpScreen = () => {
    setActivePage(activePage + 1);
  };

  return (
    <View style={styles.OnboardingContainer}>
      <Text>Content</Text>
      <Text>Active Screen = {activePage}</Text>
      <Button title="Next" onPress={jumpScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  OnboardingContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default Onboarding;
