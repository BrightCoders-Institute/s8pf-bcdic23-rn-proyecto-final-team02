import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import {Formik} from 'formik';

import AppLogoComponent from '../../components/AppLogoComponent';
import {
  ContainerComponent,
  InputComponent,
  TextComponent,
  AuthLogoComponent,
  ButtonComponent,
  SectionComponent,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LogInScheme} from '../../interface/schemes/SignUpScheme';
import {globalStyles} from '../../theme/globalTheme';

const SignInScreen = () => {
  const googleLogo = require('../../assets/img/google.webp');

  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent styles={styles.screen}>
      <View style={Platform.OS === 'ios' ? {top: top} : {}}>
        <AppLogoComponent />
        <SectionComponent styles={{marginTop: 10}}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LogInScheme}
            onSubmit={values => {
              console.log(values);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View>
                  <TextComponent styles={styles.input} text="Email" />
                  {touched.email && errors.email && (
                    <TextComponent
                      text={errors.email}
                      color="red"
                      font="bold"
                      size={16}
                    />
                  )}
                  <InputComponent
                    value={values.email}
                    onChangeText={handleChange('email')}
                    keyboardType="email-address"
                    placeholder="email@email.com"
                  />

                  <TextComponent styles={styles.input} text="Password" />
                  {touched.password && errors.password && (
                    <TextComponent
                      text={errors.password}
                      color="red"
                      font="bold"
                      size={16}
                    />
                  )}
                  <InputComponent
                    value={values.password}
                    onChangeText={handleChange('password')}
                    keyboardType="default"
                    secureTextEntry
                    placeholder="********"
                  />
                </View>

                <TextComponent
                  styles={styles.text}
                  text="Forgot password?"
                  color="black"
                  size={20}
                  font="bold"
                />
                <TouchableOpacity
                  disabled={!isValid}
                  onPress={handleSubmit}
                  style={globalStyles.primaryBtn}>
                  <TextComponent
                    text="SIGN IN"
                    font="bold"
                    color="white"
                    size={24}
                    styles={{textAlign: 'center'}}
                  />
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </SectionComponent>

        <TextComponent text="Or continue with" styles={styles.text} />

        <View style={styles.iconGroup}>
          <AuthLogoComponent
            src={googleLogo}
            text="In with Google"
            onPress={() => {}}
            // disabled={}
          />
        </View>

        <TextComponent text="Already have an account? " styles={styles.text} />

        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginLeft: 5}}
          onPress={() => navigation.navigate('SignUp')}>
          <TextComponent
            text="Sign Up"
            font="bold"
            size={20}
            styles={styles.button}
          />
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
  input: {
    color: '#161616',
    fontSize: 20,
    marginBottom: 8,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});

export default SignInScreen;
