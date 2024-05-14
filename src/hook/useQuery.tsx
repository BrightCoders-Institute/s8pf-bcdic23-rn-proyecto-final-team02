import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { supabase } from '../lib/supabase';

type UserField = 'name' | 'address' | 'password' | 'photo' | 'phone' | 'web_site';

const useQuery = () => {

  // Worker data
  const [user, setUser] = useState<User>({
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

  // Loading state
  const [ queryLoading, setQueryLoading ] = useState(false);

  const createUser = async () => {

    setQueryLoading(true);

    const { data, error } = await supabase
      .from('users')
      .insert(user)
      .select();

    if ( error ) {
      Alert.alert(error.message);
    } else {
      // Map data and give the information to company (useState);
      data.map( ( info: User ) => setUser( info ) );
  
      Alert.alert('Aviso', 'Compañia creada correctamente');
    }

    setQueryLoading(false);

  };

  const getUser = async () => {

    const { data, error } = await supabase
      .from('user')
      .select()
      .eq('id_user', user.id_user)
    ;

    if ( error ) {

      Alert.alert(error.message);

    } else {

      // Map data and give the information to company (useState);
      data.map( ( info: User ) => setUser( info ) );
  
      Alert.alert('Aviso', 'Compañia creada correctamente');

    }

  };
  

  const editUser = async (  field: UserField ) => {

  }

  return {
    createUser,
  };
};

export default useQuery;
