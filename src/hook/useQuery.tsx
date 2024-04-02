import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {User} from '../interface/db/UserInterface';

const useQuery = () => {
  // Variables para registrar al usuario
  const [user, setUser] = useState<User>({
    name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    address: '',
    photo: '',
    working: false,

    applications: [],
    docuemtens: [],
  });

  // Estado para dar tiempo a cargar los datos
  // const [changeLoading, setChangeLoading] = useState(false);

  const createUser = async () => {
    try {
      const userId = auth().currentUser?.uid;
      await firestore().collection('users_data').add(user);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    setUser,
    createUser,
  };
};

export default useQuery;
