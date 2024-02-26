import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LogoComponent from '../../components/LogoComponent';
import InputField from '../../components/InputComponent';
import DropdownField from '../../components/DropDownComponent';
import ButtonComponent from '../../components/ButtonComponent';
import AuthLogoComponent from '../../components/AuthLogoComponent';

import Facebook from '../../../img/facebook.png';
import Google from '../../../img/google.png';

const SignUpScreen = () => {
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
    <View style={styles.screen}>
      <LogoComponent />
      <InputField title="Full name" type="default" />
      <InputField title="Email or Phone" type="email-address" />
      <InputField title="Password" type="default" security />
      <DropdownField title="Gender" />
      <ButtonComponent title="Sign Up" onPress={signUpFunction} />
      <Text style={styles.text}>Or continue with</Text>

      <View style={styles.iconGroup}>
        <AuthLogoComponent src={Google} onPress={google} />
        <AuthLogoComponent src={Facebook} onPress={facebook} />
      </View>

      <Text style={styles.text}>
        Already have an account? <Text style={styles.span}>sign in</Text>
      </Text>
    </View>
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
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  span: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SignUpScreen;
