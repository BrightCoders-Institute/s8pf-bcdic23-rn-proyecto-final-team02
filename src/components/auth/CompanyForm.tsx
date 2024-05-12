import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import {SigupCompanyScheme} from '../../interface/schemes/SignUpScheme';

import TextComponent from '../TextComponent';
import InputComponent from '../InputComponent';
import {globalStyles} from '../../theme/globalTheme';
import useAuth from '../../hook/useAuth';

interface Values {
  name: string,
  email: string,
  password: string,
  confirmPass: string,
}

const CompanyForm = () => {

  const { handleCreateUserWithEmail, changeLoading } = useAuth();

  const cleanValues = ( values: Values ) => {
    values.name = '';
    values.email = '';
    values.password = '';
    values.confirmPass = '';
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPass: '',
      }}
      validationSchema={SigupCompanyScheme}
      onSubmit={values => {
        handleCreateUserWithEmail( values.email, values.password )
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
            <TextComponent styles={globalStyles.input} text="Name" />
            {touched.name && errors.name && (
              <TextComponent
                text={errors.name}
                color="red"
                font="bold"
                size={16}
              />
            )}
            <InputComponent
              keyboardType="default"
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder="BRIGHTCODERS CONSULTING, S.A. DE C.V."
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
        </>
      )}
    </Formik>
  );
};

export default CompanyForm;
