import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';

import TextComponent from '../TextComponent';
import InputComponent from '../InputComponent';
import {globalStyles} from '../../theme/globalTheme';

const SigupCompanyScheme = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too short name')
    .max(30, 'Too long name')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short password')
    .max(20, 'Too long password')
    .required('Required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const CompanyForm = () => {
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
            />

            <TextComponent styles={globalStyles.input} text="Email or Phone" />
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
            />
          </View>
          {/* <TouchableOpacity
            disabled={!isValid}
            onPress={() => handleSubmit}
            style={globalStyles.primaryBtn}>
            <TextComponent
              text="SIGN UP"
              font="bold"
              size={24}
              color="white"
              styles={{textAlign: 'center'}}
            />
          </TouchableOpacity> */}
        </>
      )}
    </Formik>
  );
};

export default CompanyForm;
