import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import AppLogoComponent from '../../components/AppLogoComponent';
import InputComponent from '../../components/InputComponent';
import DropdownField from '../../components/DropDownComponent';
import ButtonComponent from '../../components/ButtonComponent';

import {
  ContainerComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import AuthLogoComponent from '../../components/AuthLogoComponent';
import {useNavigation} from '@react-navigation/native';

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

  const navigation = useNavigation();

  return (
    <ContainerComponent isScroll styles={styles.screen}>
      <AppLogoComponent />

      <SectionComponent>
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
      </SectionComponent>
      <DropdownField title="Gender" />
      <ButtonComponent title="Sign Up" onPress={signUpFunction} />
      <TextComponent text="Or continue with" styles={styles.text} />

      <View style={styles.iconGroup}>
        <AuthLogoComponent src={googleLogo} onPress={google} />
        <AuthLogoComponent src={facebookLogo} onPress={facebook} />
      </View>

      <RowComponent styles={{marginTop: 30}}>
        <TextComponent text="Already have an account? " />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginLeft: 5}}
          onPress={() => navigation.navigate('SignIn')}>
          <TextComponent text="Sign In" font="bold" />
        </TouchableOpacity>
      </RowComponent>
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
