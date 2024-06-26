import {View, Text, Alert, AppState} from 'react-native';
import React, {useState} from 'react';
import { supabase } from '../lib/supabase';
import { isEmptyArray } from 'formik';

import useQuery from './useQuery';

const useAuth = () => {

  const { createUser, getUser } = useQuery();

  // Variables para registrar al usuario
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');

  // Estado para dar tiempo a cargar los datos
  const [changeLoading, setChangeLoading] = useState(false);

  const handleSigInWithEmail = async ( email: string, password: string ) => {
    if (email.length > 0 && password.length > 0) {

      setChangeLoading( true );

      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if ( error ) Alert.alert(error.message);
      setChangeLoading( false );

    } else {

      Alert.alert('Advertencia', 'Debes llenar todos los campos', [
        {text: 'Ok'},
      ]);

      setChangeLoading(false);

    }
  };

  const handleCreateUserWithEmail = async ( email: string, password: string ) => {

    setChangeLoading( true );
    

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    
    if ( error ) {
      Alert.alert(error.message)
    } else {
      console.log(data)
      Alert.alert('Información', 'Se ha enviado un correo para realizar la validación');
    }

    setChangeLoading( false );

  };

  const handleSignOut = async () => {

    const { error } = await supabase.auth.signOut();

    if ( error ) {
      Alert.alert(error.message)
    } else {
      Alert.alert('Información', 'Se ha cerrado la sesión');
    }

  };

  // const handleForgetPassword = async () => {
  //   if (email.length > 0) {
  //     
  //   } else Alert.alert('Alerta', 'Ingresa tu correo electrónico');
  // };

  return {
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    changeLoading,

    // Methods
    handleSigInWithEmail,
    handleCreateUserWithEmail,
    handleSignOut,
  };
};

export default useAuth;
