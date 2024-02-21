import React from 'react';
import {View, Text} from 'react-native';

const screensList = [
  {
    img: 'IMAGE',
    text: 'Upload your online CV',
    up: 'text',
  },
  {
    img: 'IMAGE',
    text: 'Get better opportunities',
    up: 'image',
  },
  {
    img: 'IMAGE',
    text: 'All this in your area',
    up: 'text',
  },
];

const OnboardingScreen = ({activeScreen}: {activeScreen: any}) => {
  const component = screensList[activeScreen];

  if (component.up === 'text') {
    return (
      <View style={{flex: 1}}>
        <Text>{component.text}</Text>
        <Text>{component.img}</Text>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <Text>{component.img}</Text>
        <Text>{component.text}</Text>
      </View>
    );
  }
};

export default OnboardingScreen;
