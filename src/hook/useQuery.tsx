import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { Company } from '../interface/db/CompanyInterface';
import { supabase } from '../lib/supabase';

type CompanyField = 'name' | 'address' | 'password' | 'photo' | 'phone' | 'web_site';

const useQuery = () => {

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
    name: '',
    address: '',
    password: '',
    rating: 0,
    photo: '',
    phone: '',
    web_site: ''
  });

  // Loading state
  const [ queryLoading, setQueryLoading ] = useState(false);

  const createCompany = async () => {

    setQueryLoading(true);

    const { data, error } = await supabase
      .from('company')
      .insert(company)
      .select();

    if ( error ) {
      Alert.alert(error.message);
    } else {
      // Map data and give the information to company (useState);
      data.map( ( info: Company ) => setCompany( info ) );
  
      Alert.alert('Aviso', 'Compañia creada correctamente');
    }

    setQueryLoading(false);

  };

  const getCompany = async () => {

    const { data, error } = await supabase
      .from('company')
      .select()
      .eq('id_company', company.id_company);

    if ( error ) Alert.alert(error.message);

  };
  

  const editCompany = async (  field: CompanyField ) => {

  }

  return {
    createCompany,
    getCompany,
  };
};

export default useQuery;
