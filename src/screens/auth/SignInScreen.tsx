import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';

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
import useAuth from '../../hook/useAuth';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { WEBCLIENT_ID } from '@env';

const SignInScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    changeLoading,
    // handleSigInWithEmail,
    // handleGoogleLogin,
  } = useAuth();

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: WEBCLIENT_ID,
  //   });
  // }, []);

  const googleLogo = require('../../assets/img/google.webp');

  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent styles={styles.screen}>
      <View style={Platform.OS === 'ios' ? {top: top} : {}}>
        <AppLogoComponent />
        <SectionComponent styles={{marginTop: 10}}>

        <TextComponent styles = {styles.input}
          text="Email"
        />
          <InputComponent
            value={email}
            onChangeText={val => setEmail(val)}
            keyboardType="default"
          />
        <TextComponent styles = {styles.input}
          text="Password"
        />
          <InputComponent
            value={password}
            onChangeText={val => setPassword(val)}
            keyboardType="default"
            secureTextEntry
          />

          <TextComponent styles = {styles.input}
              text="Password Confirmation"
            />

          <InputComponent
            value={password}
            onChangeText={val => setPassword(val)}
            keyboardType="default"
            secureTextEntry
          />

        </SectionComponent>
        <TextComponent styles = {styles.text}
          text="Forgot password?"
          color="black"
          size={20}
          font="bold"
        />
        <ButtonComponent title="Sign In" onPress={() => navigation.navigate('Inicio')} />
        <TextComponent text="Or continue with" styles={styles.text} />

        <View style={styles.iconGroup}>
          <AuthLogoComponent
            src={googleLogo}
            text="In with Google"
            onPress={() => navigation.navigate('Inicio')}
            disabled={changeLoading}
          />
        </View>

          <TextComponent text="Already have an account? " styles={styles.text}/>
          
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginLeft: 5}}
            onPress={() => navigation.navigate('SignUp')}>
            <TextComponent text="Sign Up" font="bold" size={20} styles={styles.button}/>
          </TouchableOpacity>
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
  input:{
    color:"#161616",
    fontSize:20,
    marginBottom:8,
  },
  button:{
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});

export default SignInScreen;
