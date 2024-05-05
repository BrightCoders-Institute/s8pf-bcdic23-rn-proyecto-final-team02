import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';

import AppLogoComponent from '../../components/AppLogoComponent';
import ButtonComponent from '../../components/ButtonComponent';

import {
  CompanyForm,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
  WorkerForm,
} from '../../components';
import AuthLogoComponent from '../../components/AuthLogoComponent';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SignUpScreen = () => {
  const googleLogo = require('../../assets/img/google.webp');
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const toggleForm = () => {
    setShowCompanyForm(!showCompanyForm);
  };

  return (
    <ContainerComponent isScroll styles={styles.screen}>
      <View style={Platform.OS === 'ios' ? {top: top} : {}}>
        <AppLogoComponent />

        <SectionComponent>
          <RowComponent styles={styles.row}>
            <RowComponent
              styles={showCompanyForm ? styles.workerInactive : styles.worker}
              onPress={toggleForm}
              isCenter>
              <TextComponent
                text="Worker"
                color="white"
                size={24}
                font="bold"
              />
            </RowComponent>

            <RowComponent
              styles={showCompanyForm ? styles.company : styles.companyInactive}
              onPress={toggleForm}
              isCenter>
              <TextComponent
                text="Company"
                color="white"
                size={24}
                font="bold"
              />
            </RowComponent>
          </RowComponent>

          {showCompanyForm ? (
            // Aquí va el formulario para la empresa
            <CompanyForm />
          ) : (
            // formulario para el trabajador
            <WorkerForm />
          )}
        </SectionComponent>

        <ButtonComponent title="Sign Up" onPress={ () => console.log('Sign Up') } />
        <TextComponent text="Or continue with" styles={styles.text} />

        <View style={styles.iconGroup}>
          <AuthLogoComponent
            src={googleLogo}
            text="Google"
            onPress={ () => console.log('Sign Up google') }
            disabled={false} // Change this to "changeLoading"
          />
        </View>

        <TextComponent text="Already have an account? " styles={styles.text} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginLeft: 5}}
          onPress={() => navigation.navigate('SignIn')}>
          <TextComponent text="Sign In" font="bold" styles={styles.button} />
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
