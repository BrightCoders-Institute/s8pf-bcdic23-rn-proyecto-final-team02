import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { Company } from '../interface/db/CompanyInterface';
import { supabase } from '../lib/supabase';

const useQuery = ( ) => {

  // Worker data
  const [worker, setWorker] = useState<User>({
    first_name: '',
    address: '',
    applications: [],
    documents: [],
    email: '',
    gender: '',
    last_name: '',
    password: '',
    phone: '',
    photo: '',
    working: false
  });

  // Company data
  const [ company, setCompany ] = useState<Company>({
    id: undefined,
    name: '',
    address: '',
    password: '',
    rating: 0,
    photo: '',
    phone: '',
    webSite: ''
  });

  // Loading state
  const [changeLoading, setChangeLoading] = useState(false);

  const createCompany = async () => {

    const { error } = await supabase
      .from('company')
      .insert(company);

    if ( error ) {
      Alert.alert('Error', 'Error al crear la compañia');
    } else {
      Alert.alert('Aviso', 'Compañia creada correctamente');
    }

  };

  return {
    createCompany
  };
};

export default useQuery;
