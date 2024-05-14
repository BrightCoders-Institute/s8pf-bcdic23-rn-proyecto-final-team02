import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import AppLogoComponent from '../../components/AppLogoComponent';

import {
  ContainerComponent,
  FabComponent,
  InputComponent,
  TextComponent,
} from '../../components';
import AuthLogoComponent from '../../components/AuthLogoComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useAuth from '../../hook/useAuth';
import {globalStyles} from '../../theme/globalTheme';
import {SignupWorkerSchema} from '../../interface/schemes/SignUpScheme';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPass: string;
}

const SignUpScreen = () => {
  const googleLogo = require('../../assets/img/google.webp');
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const {handleCreateUserWithEmail, changeLoading} = useAuth();

  const cleanValues = (values: Values) => {
    values.firstName = '';
    values.lastName = '';
    values.email = '';
    values.password = '';
    values.confirmPass = '';
  };

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back-outline"
        onPress={() => navigation.goBack()}
        styles={
          Platform.OS === 'ios' ? {top: 60, left: 16} : {top: 20, left: 16}
        }
      />
      <ContainerComponent
        isScroll
        styles={Platform.OS === 'ios' ? {top: top} : {}}>
        <AppLogoComponent />
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPass: '',
          }}
          validationSchema={SignupWorkerSchema}
          onSubmit={values => {
            handleCreateUserWithEmail(values.email, values.password);
            cleanValues(values);
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
                <TextComponent styles={globalStyles.input} text="First name" />
                {touched.firstName && errors.firstName && (
                  <TextComponent
                    text={errors.firstName}
                    color="red"
                    font="bold"
                    size={16}
                  />
                )}
                <InputComponent
                  keyboardType="default"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  placeholder="Ex. Oliver"
                />

                <TextComponent styles={globalStyles.input} text="Last name" />
                {touched.lastName && errors.lastName && (
                  <TextComponent
                    text={errors.lastName}
                    color="red"
                    font="bold"
                    size={16}
                  />
                )}
                <InputComponent
                  keyboardType="default"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  placeholder="Ex. Alejandro"
                />

                <TextComponent styles={globalStyles.input} text="Email" />
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

                <TextComponent styles={globalStyles.input} text="Password" />
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

                <TextComponent
                  styles={globalStyles.input}
                  text="Password Confirmation"
                />
                {touched.confirmPass && errors.confirmPass && (
                  <TextComponent
                    text={errors.confirmPass}
                    color="red"
                    font="bold"
                    size={16}
                  />
                )}
                <InputComponent
                  value={values.confirmPass}
                  onChangeText={handleChange('confirmPass')}
                  keyboardType="default"
                  secureTextEntry
                  placeholder="********"
                />
              </View>

              {changeLoading ? (
                <ActivityIndicator size="large" style={{marginTop: 25}} />
              ) : (
                <TouchableOpacity
                  disabled={!isValid}
                  onPress={handleSubmit}
                  style={globalStyles.primaryBtn}>
                  <TextComponent
                    text="SIGN UP"
                    font="bold"
                    size={24}
                    color="white"
                    styles={{textAlign: 'center'}}
                  />
                </TouchableOpacity>
              )}
            </>
          )}
        </Formik>
        <TextComponent text="Or continue with" styles={styles.text} />
        <View style={styles.iconGroup}>
          <AuthLogoComponent
            src={googleLogo}
            text="Google"
            onPress={() => console.log(changeLoading)}
            disabled={changeLoading}
          />
        </View>
        <TextComponent text="Already have an account? " styles={styles.text} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginLeft: 5}}
          onPress={() => navigation.navigate('SignIn')}
          disabled={changeLoading}>
          <TextComponent text="Sign In" font="bold" styles={styles.button} />
        </TouchableOpacity>
        <View style={Platform.OS === 'ios' ? {height: 90} : {height: 50}} />
      </ContainerComponent>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  worker: {
    backgroundColor: '#1F1650',
    height: 40,
    width: 186,
    borderRadius: 10,
  },
  company: {
    backgroundColor: '#6C63FF',
    height: 40,
    width: 186,
    borderRadius: 10,
  },
  row: {
    gap: 9,
    marginTop: 30,
    marginBottom: 30,
  },
  workerInactive: {
    backgroundColor: '#ccc',
    height: 40,
    width: 186,
    borderRadius: 10,
  },
  companyInactive: {
    backgroundColor: '#ccc',
    height: 40,
    width: 186,
    borderRadius: 10,
  },
});

export default SignUpScreen;
