import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import AppLogoComponent from '../../components/AppLogoComponent';
import {
  ContainerComponent,
  InputComponent,
  TextComponent,
  AuthLogoComponent,
  ButtonComponent,
} from '../../components';

const SignInScreen = () => {
  const googleLogo = require('../../assets/img/google.webp');
  const facebookLogo = require('../../assets/img/facebook.webp');

  const signInFunction = () => {
    console.log('Auth data');
  };
  const google = () => {
    console.log('Google');
  };
  const facebook = () => {
    console.log('Facebook');
  };

  return (
    <ContainerComponent styles={styles.screen}>
      <AppLogoComponent />
      <InputComponent placeholder="Email or Phone" keyboardType="default" />
      <InputComponent
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
      />
      <TextComponent
        text="Forgot password?"
        color="black"
        size={20}
        font="bold"
      />
      <ButtonComponent title="Sign Up" onPress={signInFunction} />
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

export default SignInScreen;
