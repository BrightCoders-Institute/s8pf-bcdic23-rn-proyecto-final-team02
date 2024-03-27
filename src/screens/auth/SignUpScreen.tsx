import React, { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';

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
import useAuth from '../../hook/useAuth';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {WEBCLIENT_ID} from '@env';

const SignUpScreen = () => {
  const {
    handleCreateUserWithEmail,
    email,
    setEmail,
    password,
    setPassword,
    handleGoogleLogin,
    changeLoading,
  } = useAuth();

  const googleLogo = require('../../assets/img/google.webp');
  const facebookLogo = require('../../assets/img/facebook.webp');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEBCLIENT_ID,
    });
  }, []);

  const facebook = () => {
    console.log('Facebook');
  };

  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent isScroll styles={styles.screen}>
      <View style={Platform.OS === 'ios' ? {top: top} : {}}>
        <AppLogoComponent />

        <SectionComponent>
          <InputComponent placeholder="Full name" keyboardType="default" />
          <InputComponent
            value={email}
            onChangeText={val => setEmail(val)}
            placeholder="Email or Phone"
            keyboardType="email-address"
          />
          <InputComponent
            value={password}
            onChangeText={val => setPassword(val)}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
          />
        </SectionComponent>
        <DropdownField title="Gender" />
        <ButtonComponent title="Sign Up" onPress={handleCreateUserWithEmail} />
        <TextComponent text="Or continue with" styles={styles.text} />

        <View style={styles.iconGroup}>
          <AuthLogoComponent
            src={googleLogo}
            text="Google"
            onPress={handleGoogleLogin}
          />
          <AuthLogoComponent
            src={facebookLogo}
            text="Facebook"
            onPress={facebook}
          />
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
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    rowGap: 10,
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
