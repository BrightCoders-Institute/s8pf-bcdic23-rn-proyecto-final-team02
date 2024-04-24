import {View} from 'react-native';
import React from 'react';
import TextComponent from '../TextComponent';
import InputComponent from '../InputComponent';
import useQuery from '../../hook/useQuery';
import useAuth from '../../hook/useAuth';
import {globalStyles} from '../../theme/globalTheme';

const CompanyForm = () => {
  const {user, setUser} = useQuery();

  const {
    email,
    phone,
    password,
    setPassword,
    setConfirmPass,
    confirmPass,
    handleEmailOrPhoneChange,
  } = useAuth();

  return (
    <View>
      <TextComponent styles={globalStyles.input} text="Name" />
      <InputComponent
        keyboardType="default"
        value={user.name}
        onChangeText={val => setUser({...user, name: val})}
      />

      <TextComponent styles={globalStyles.input} text="Email or Phone" />
      <InputComponent
        value={email || phone} // Display whichever is not empty
        onChangeText={handleEmailOrPhoneChange} // Handle email or phone change
        keyboardType="email-address"
      />

      <TextComponent styles={globalStyles.input} text="Password" />
      <InputComponent
        value={password}
        onChangeText={val => setPassword(val)}
        keyboardType="default"
        secureTextEntry
      />

      <TextComponent styles={globalStyles.input} text="Password Confirmation" />
      <InputComponent
        value={confirmPass}
        onChangeText={val => setConfirmPass(val)}
        keyboardType="default"
        secureTextEntry
      />
    </View>
  );
};

export default CompanyForm;
