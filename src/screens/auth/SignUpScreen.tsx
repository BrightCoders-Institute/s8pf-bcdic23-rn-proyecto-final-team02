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
import useQuery from '../../hook/useQuery';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {WEBCLIENT_ID} from '@env';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const {
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    handleCreateUserWithEmail,
    handleGoogleLogin,
    changeLoading,
  } = useAuth();

  const {user, setUser, createUser} = useQuery();

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

  const signUp = () => {
    // Create user in firebase
    handleCreateUserWithEmail();

    // Save user data in react useState (Object)
    setUser({
      ...user,
      email: email,
      password: password,
      phone: phone,
    });

    // Send user Object to firestore
    createUser();
  };

  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent isScroll styles={styles.screen}>
      <View style={Platform.OS === 'ios' ? {top: top} : {}}>
        <AppLogoComponent />

        <SectionComponent>
          <InputComponent
            placeholder="Full name"
            keyboardType="default"
            value={user.name}
            onChangeText={val => setUser({...user, name: val})}
          />
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
        <DropdownField title="Gender" user={user} />
        <ButtonComponent title="Sign Up" onPress={signUp} />
        <TextComponent text="Or continue with" styles={styles.text} />

        <View style={styles.iconGroup}>
          <AuthLogoComponent
            src={googleLogo}
            text="Up with Google"
            onPress={handleGoogleLogin}
            disabled={changeLoading}
          />
          <AuthLogoComponent
            src={facebookLogo}
            text="Up with Facebook"
            onPress={facebook}
            disabled={changeLoading}
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
