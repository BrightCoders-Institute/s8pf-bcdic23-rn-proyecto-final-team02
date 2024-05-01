import {TouchableOpacity, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import TextComponent from '../TextComponent';
import InputComponent from '../InputComponent';
import DropdownField from '../DropDownComponent';

import {globalStyles} from '../../theme/globalTheme';

const SignupWorkerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(4, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  // phone: Yup.number().min(10).max(10).required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const WorkerForm = () => {
  return (
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

            {/* <DropdownField title="Gender" user={User} /> */}
          </View>

          <TouchableOpacity
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
          </TouchableOpacity>
        </>
      )}
    </Formik>
  );
};

export default WorkerForm;
