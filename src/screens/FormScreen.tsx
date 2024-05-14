import React, {useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import {
  ContainerComponent,
  JobForm,
  SectionComponent,
  TextComponent,
} from '.././components';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useAuth from '.././hook/useAuth';

const SignUpScreen = () => {
  const {top} = useSafeAreaInsets();
  const {changeLoading} = useAuth();

  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const toggleForm = () => {
    setShowCompanyForm(!showCompanyForm);
  };

  return (
    <ContainerComponent isScroll styles={styles.screen}>
      <View style={Platform.OS === 'ios' ? {top: top} : {}}>
        {/* <TextComponent 
        text={"Register New Job"}                     
        font="bold"
        size={30}
        styles={{textAlign: 'center'}}/> */}

        <SectionComponent>
          <JobForm />
        </SectionComponent>
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
