import {TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';

import {SignupWorkerSchema} from '../../interface/schemes/SignUpScheme';

import TextComponent from '../TextComponent';
import InputComponent from '../InputComponent';
import DropdownField from '../DropDownComponent';

import {globalStyles} from '../../theme/globalTheme';


interface Props {
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  phone: string,
  setPhone: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  confirmPass: string,
  setConfirmPass: React.Dispatch<React.SetStateAction<string>>,
}

const WorkerForm = (
  {
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
  } : Props
) => {

  const {user, setUser} = useQuery();

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

export default WorkerForm;
