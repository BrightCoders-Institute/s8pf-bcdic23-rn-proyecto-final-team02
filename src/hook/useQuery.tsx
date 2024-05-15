import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { supabase } from '../lib/supabase';

type UserField = 'id' | 'name' | 'address' | 'password' | 'photo' | 'phone' | 'web_site';

const useQuery = () => {

  // Worker data
  const [user, setUser] = useState<User>({
    id: '',
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    photo: '',
    working: 'notworking',
  });

  // Loading state
  const [ queryLoading, setQueryLoading ] = useState(false);

  const createUser = async ( email: string ) => {


    // setQueryLoading(true);

    const { data, error } = await supabase
      .from('users')
      .insert(user)
    ;

    if (error) Alert.alert( error.message );

    // setQueryLoading(false);

  };

  const getUserId = async () => {

    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.log(error);
    } else {
      user.id = data.user?.email;
    }

  };

  const getUser = async () => {
    console.log('before', user)

    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('id', user.id)
    ;

    if ( error ) {
      Alert.alert(error.message);
    } else {
      data.map( ( info: User ) => {
        user.address = info.address;
        user.first_name = info.first_name;
        user.last_name = info.last_name;
        user.phone = info.phone;
        user.photo = info.photo;
        user.working = info.working;

        console.log('After I think', user)
      });
    }

  };

  return {
    // Props
    user,
    setUser,

    // Methods
    createUser,
    getUser,
    getUserId,
  };
};

export default useQuery;
