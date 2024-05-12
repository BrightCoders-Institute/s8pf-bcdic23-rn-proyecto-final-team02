import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { Company } from '../interface/db/CompanyInterface';
import { supabase } from '../lib/supabase';

const useQuery = ( ) => {

  // Worker data
  const [worker, setWorker] = useState<User>({
    first_name: '',
    address: 'hola',
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
    name: '',
    address: '',
    password: '',
    rating: 0,
    photo: '',
    phone: '',
    web_site: ''
  });

  // Loading state
  const [changeLoading, setChangeLoading] = useState(false);

  const createCompany = async () => {

    const { data, error } = await supabase
      .from('company')
      .insert(company)
      .select();

    if ( error ) {
      Alert.alert(error.message);
      return null;
    }

    data.map( ( info: Company ) => {
      console.log(info.id_company);
    });

    Alert.alert('Aviso', 'Compañia creada correctamente');

  };

  const getCompany = async () => {

    const { data, error } = await supabase
      .from('company')
      .select()
      .eq('id_company', 1);

    if ( error ) Alert.alert(error.message);
  };

  return {
    createCompany,
    getCompany
  };
};

export default useQuery;
