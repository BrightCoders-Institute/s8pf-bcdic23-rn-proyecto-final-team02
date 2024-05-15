import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';

import {
  ContainerComponent,
  FabComponent,
  InputComponent,
  SectionComponent,
  TextComponent,
} from '.././components';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {globalStyles} from '../theme/globalTheme';
import useQuery from '../hook/useQuery';
import useAuth from '../hook/useAuth';
import {RegisterJobScheme} from '../interface/schemes/RegisterJobScheme';
import {navigatorLock} from '@supabase/supabase-js';

interface Values {
  name: string;
  state: boolean;
  salary: string;
  description: string;
  requirements: string;
  img: string;
}

const SignUpScreen = () => {
  const {top} = useSafeAreaInsets();
  const {registerJob} = useQuery(); // Obtiene la función registerJob de useQuery
  const {changeLoading} = useAuth();
  const navigation = useNavigation();

  const cleanValues = (values: Values) => {
    values.name = '';
    values.state = true;
    values.salary = '';
    values.description = '';
    values.requirements = '';
    values.img = '';
  };

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back-outline"
        styles={
          Platform.OS === 'ios'
            ? {top: top - 5, marginLeft: 16}
            : {top: top + 3, marginLeft: 16}
        }
        onPress={() => navigation.goBack()}
      />
      <ContainerComponent
        isScroll
        styles={Platform.OS === 'ios' ? {top: top} : {top: top + 5}}>
        <TextComponent
          text={'Register New Job'}
          font="bold"
          size={20}
          styles={{textAlign: 'center'}}
        />

        <SectionComponent>
          <Formik
            initialValues={{
              position: '',
              state: true,
              salary: '',
              description: '',
              requirements: '',
              img: '',
            }}
            validationSchema={RegisterJobScheme}
            onSubmit={async values => {
              await registerJob(values); // Llama a la función registerJob con los valores del formulario
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
                  {touched.position && errors.position && (
                    <TextComponent
                      text={errors.position}
                      color="red"
                      font="bold"
                      size={16}
                    />
                  )}
                  <InputComponent
                    keyboardType="default"
                    value={values.position}
                    onChangeText={handleChange('name')}
                    placeholder="Marketing Assistant"
                  />

                  <TextComponent styles={globalStyles.input} text="Salary" />
                  {touched.salary && errors.salary && (
                    <TextComponent
                      text={errors.salary}
                      color="red"
                      font="bold"
                      size={16}
                    />
                  )}
                  <InputComponent
                    value={values.salary}
                    onChangeText={handleChange('salary')}
                    keyboardType="number-pad"
                    placeholder="$X,XXX/month"
                  />

                  <TextComponent
                    styles={globalStyles.input}
                    text="Description"
                  />
                  {touched.description && errors.description && (
                    <TextComponent
                      text={errors.description}
                      color="red"
                      font="bold"
                      size={16}
                    />
                  )}
                  <InputComponent
                    value={values.description}
                    onChangeText={handleChange('description')}
                    keyboardType="default"
                    placeholder="We are seeking a highly motivated and creative [Job Title] to join our team. In this role, you will be responsible for [description of job responsibilities]. We are looking for someone with excellent [required skills] skills and the ability to [specific actions]"
                    multiline={true}
                    numberOfLines={10}
                  />

                  <TextComponent
                    styles={globalStyles.input}
                    text="Requirements"
                  />
                  {touched.requirements && errors.requirements && (
                    <TextComponent
                      text={errors.requirements}
                      color="red"
                      font="bold"
                      size={16}
                    />
                  )}
                  <InputComponent
                    value={values.requirements}
                    onChangeText={handleChange('requirements')}
                    keyboardType="default"
                    placeholder="Ideal candidates should have at least [number] years of experience in [related field], along with demonstrated skills in [specific skills]. The ability to [additional skills] is valued. Additionally, a solid understanding of [relevant concepts] and the ability to [additional actions] are essential"
                    multiline={true}
                    numberOfLines={10} // Puedes ajustar el número de líneas visibles según tus necesidades
                  />

                  <TextComponent styles={globalStyles.input} text="Imagen" />
                  {touched.img && errors.img && (
                    <TextComponent
                      text={errors.img}
                      color="red"
                      font="bold"
                      size={16}
                    />
                  )}
                  <InputComponent
                    value={values.img}
                    onChangeText={handleChange('img')}
                    keyboardType="default"
                    placeholder=""
                  />
                </View>

                {changeLoading ? (
                  <ActivityIndicator size="large" style={{marginTop: 25}} />
                ) : (
                  <TouchableOpacity
                    disabled={!isValid || changeLoading}
                    onPress={handleSubmit}
                    style={globalStyles.primaryBtn}>
                    <TextComponent
                      text="REGISTER"
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
        </SectionComponent>
        <View style={Platform.OS === 'ios' ? {} : {height: 50}} />
      </ContainerComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
