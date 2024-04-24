import {View} from 'react-native';
import React from 'react';

import TextComponent from '../TextComponent';
import InputComponent from '../InputComponent';
import DropdownField from '../DropDownComponent';

import useAuth from '../../hook/useAuth';
import useQuery from '../../hook/useQuery';

import {globalStyles} from '../../theme/globalTheme';

const WorkerForm = () => {
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
      <TextComponent styles={globalStyles.input} text="First name" />
      <InputComponent
        keyboardType="default"
        value={user.name}
        onChangeText={val => setUser({...user, name: val})}
      />

      <TextComponent styles={globalStyles.input} text="Last name" />
      <InputComponent
        keyboardType="default"
        value={user.last_name}
        onChangeText={val => setUser({...user, last_name: val})}
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

      <DropdownField title="Gender" user={user} />
    </View>
  );
};

export default WorkerForm;
