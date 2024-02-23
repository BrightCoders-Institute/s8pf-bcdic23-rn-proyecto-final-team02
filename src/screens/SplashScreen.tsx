import {View, Text, Image} from 'react-native';
import React from 'react';
import {TextComponent} from '../components';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/logo-transparent.png')}
        style={{width: '100%', height: '60%', resizeMode: 'contain'}}
      />
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextComponent
          text="Search, research"
          color="black"
          font="bold"
          size={36}
        />
        <TextComponent text="and work" color="black" font="bold" size={36} />
      </View>
    </View>
  );
};

export default SplashScreen;
