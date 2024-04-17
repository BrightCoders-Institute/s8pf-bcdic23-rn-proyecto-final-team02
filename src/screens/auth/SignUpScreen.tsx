import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';

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

const SignUpScreen = () => {
  const {
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    setConfirmPass,
    confirmPass,
    handleCreateUserWithEmail,
    handleGoogleSignUp,
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

  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const toggleForm = () => {
    setShowCompanyForm(!showCompanyForm);
  };

  const signUp = () => {
    // Create user in firebase
    handleCreateUserWithEmail().finally(() => {
      // Save user data in react useState (Object)
      user.email = email;
      user.password = password;
      user.phone = phone;

      // Send user Object to firestore
      createUser();
    });
  };

  const facebook = () => {
    console.log('Facebook');
  };

  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const handleEmailOrPhoneChange = (val) => {
    // Check if value is an email address
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setEmail(val);
    } else {
      setPhone(val);
    }
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
              <TextComponent text="Worker" color="white" size={24} font="bold" />
            </RowComponent>

            <RowComponent
              styles={showCompanyForm ? styles.company : styles.companyInactive}
              onPress={toggleForm}
              isCenter>
              <TextComponent text="Company" color="white" size={24} font="bold" />
            </RowComponent>
          </RowComponent>

          {showCompanyForm ? (
            // Aquí va el formulario para la empresa
            <View>
              <TextComponent styles={styles.input} text="Name" />
              <InputComponent
                keyboardType="default"
                value={user.name}
                onChangeText={(val) => setUser({...user, name: val})}
              />

              <TextComponent styles={styles.input} text="Email or Phone" />
              <InputComponent
                value={email || phone} // Display whichever is not empty
                onChangeText={handleEmailOrPhoneChange} // Handle email or phone change
                keyboardType="email-address"
              />

              <TextComponent styles={styles.input} text="Password" />
              <InputComponent
                value={password}
                onChangeText={(val) => setPassword(val)}
                keyboardType="default"
                secureTextEntry
              />

              <TextComponent styles={styles.input} text="Password Confirmation" />
              <InputComponent
                value={confirmPass}
                onChangeText={(val) => setConfirmPass(val)}
                keyboardType="default"
                secureTextEntry
              />
            </View>
          ) : (
            // formulario para el trabajador
            <View>
              <TextComponent styles={styles.input} text="First name" />
              <InputComponent
                keyboardType="default"
                value={user.name}
                onChangeText={(val) => setUser({...user, name: val})}
              />

              <TextComponent styles={styles.input} text="Last name" />
              <InputComponent
                keyboardType="default"
                value={user.last_name}
                onChangeText={(val) => setUser({...user, last_name: val})}
              />

              <TextComponent styles={styles.input} text="Email or Phone" />
              <InputComponent
                value={email || phone} // Display whichever is not empty
                onChangeText={handleEmailOrPhoneChange} // Handle email or phone change
                keyboardType="email-address"
              />

              <TextComponent styles={styles.input} text="Password" />
              <InputComponent
                value={password}
                onChangeText={(val) => setPassword(val)}
                keyboardType="default"
                secureTextEntry
              />

              <TextComponent styles={styles.input} text="Password Confirmation" />
              <InputComponent
                value={confirmPass}
                onChangeText={(val) => setConfirmPass(val)}
                keyboardType="default"
                secureTextEntry
              />

              <DropdownField title="Gender" user={user} />
            </View>
          )}
        </SectionComponent>

        <ButtonComponent title="Sign Up" onPress={signUp} />
        <TextComponent text="Or continue with" styles={styles.text} />

        <View style={styles.iconGroup}>
          <AuthLogoComponent
            src={googleLogo}
            text="Google"
            onPress={handleGoogleSignUp}
            disabled={changeLoading}
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
