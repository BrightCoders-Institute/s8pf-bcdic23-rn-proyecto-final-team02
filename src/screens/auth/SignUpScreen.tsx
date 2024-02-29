import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AppLogoComponent from '../../components/AppLogoComponent';
import InputComponent from '../../components/InputComponent';
import DropdownField from '../../components/DropDownComponent';
import ButtonComponent from '../../components/ButtonComponent';

import {ContainerComponent, TextComponent} from '../../components';
import AuthLogoComponent from '../../components/AuthLogoComponent';

const SignUpScreen = () => {
  const googleLogo = require('../../assets/img/google.webp');
  const facebookLogo = require('../../assets/img/facebook.webp');

  const signUpFunction = () => {
    console.log('Send data to firebase');
  };
  const google = () => {
    console.log('Google');
  };
  const facebook = () => {
    console.log('Facebook');
  };

  return (
    <ContainerComponent isScroll styles={styles.screen}>
      <AppLogoComponent />
      <InputComponent placeholder="Full name" keyboardType="default" />
      <InputComponent
        placeholder="Email or Phone"
        keyboardType="email-address"
      />
      <InputComponent
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
      />
      <DropdownField title="Gender" />
      <ButtonComponent title="Sign Up" onPress={signUpFunction} />
      <TextComponent text="Or continue with" styles={styles.text} />

      <View style={styles.iconGroup}>
        <AuthLogoComponent src={googleLogo} onPress={google} />
        <AuthLogoComponent src={facebookLogo} onPress={facebook} />
      </View>

      <Text style={styles.text}>
        Already have an account? <Text style={styles.span}>sign in</Text>
      </Text>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  span: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SignUpScreen;
