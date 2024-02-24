import React from 'react';
import {View, StyleSheet} from 'react-native';

import LogoComponent from '../../components/LogoComponent';
import InputField from '../../components/InputComponent';
import DropdownField from '../../components/DropDownComponent';
import ButtonComponent from '../../components/ButtonComponent';

const SignUpScreen = () => {
  const signUpFunction = () => {
    console.log('Send data to firebase');
  };

  return (
    <View style={styles.screen}>
      <LogoComponent />
      <InputField title="Full name" type="default" />
      <InputField title="Email or Phone" type="email-address" />
      <InputField title="Password" type="default" security />
      <DropdownField title="Gender" />
      <ButtonComponent title="Sign Up" onPress={signUpFunction} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});

export default SignUpScreen;
