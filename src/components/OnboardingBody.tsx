import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import onlineCV from '../assets/img/onlineCV.webp';
import jobOffers from '../assets/img/jobOffers.webp';
import myLocattion from '../assets/img/myLocattion.webp';

const screensList = [
  {
    text: 'Upload your online CV',
    up: 'text',
    img: onlineCV,
  },
  {
    text: 'Get better opportunities',
    up: 'image',
    img: jobOffers,
  },
  {
    text: 'All this in your area',
    up: 'text',
    img: myLocattion,
  },
];

const OnboardingBody = ({activeScreen}: {activeScreen: any}) => {
  const component = screensList[activeScreen];
  const {orderStyle, textStyle} =
    activeScreen === 1
      ? {
          orderStyle: styles.structure_UpText,
          textStyle: styles.text_UpText,
        }
      : {
          orderStyle: styles.structure_UpImage,
          textStyle: styles.text_UpImage,
        };

  const truncateString = (text: string) => {
    const words = text.split(' ');
    let newText = '';

    for (let word = 0, caracters = 0; word < words.length; word++) {
      caracters += words[word].length;

      if (caracters >= 12) {
        newText += '\n';
        caracters = 0;
      } else if (word !== 0) {
        newText += ' ';
      }

      newText += words[word];
    }

    return newText;
  };

  return (
    <View style={[styles.container, orderStyle]}>
      <Image source={component.img} />
      <Text style={[styles.text, textStyle]}>
        {truncateString(component.text)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 25,
  },
  text: {
    fontSize: 28,
    color: 'black',
    lineHeight: 40,
  },
  structure_UpText: {
    flexDirection: 'column',
  },
  text_UpText: {
    textAlign: 'right',
  },
  structure_UpImage: {
    flexDirection: 'column-reverse',
  },
  text_UpImage: {
    textAlign: 'left',
  },
});

export default OnboardingBody;
