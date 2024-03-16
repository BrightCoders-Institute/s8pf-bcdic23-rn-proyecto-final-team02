import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';

import AppLogoComponent from '../../components/AppLogoComponent';
import {
  ContainerComponent,
  InputComponent,
  TextComponent,
  AuthLogoComponent,
  ButtonComponent,
  RowComponent,
  SectionComponent,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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

  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent styles={styles.screen}>
      <View style={Platform.OS === 'ios' ? {top: top} : {}}>
        <AppLogoComponent />
        <SectionComponent styles={{marginTop: 10}}>
          <InputComponent placeholder="Email or Phone" keyboardType="default" />
          <InputComponent
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
          />
        </SectionComponent>
        <TextComponent
          text="Forgot password?"
          color="black"
          size={20}
          font="bold"
        />
        <ButtonComponent title="Sign In" onPress={signInFunction} />
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
            onPress={() => navigation.navigate('SignUp')}>
            <TextComponent text="SignUp" font="bold" />
          </TouchableOpacity>
        </RowComponent>
      </View>
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
