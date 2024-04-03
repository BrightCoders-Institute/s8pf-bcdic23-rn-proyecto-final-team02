import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {User} from '../interface/db/UserInterface';

const useQuery = () => {
  // User data
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
    documents: [],
  });

  // Loading state
  // const [changeLoading, setChangeLoading] = useState(false);

  const createUser = async () => {
    try {
      const userId = auth().currentUser?.uid;
      console.log(auth().currentUser?.uid);
      await firestore().collection('users_data').doc(userId).set(user);
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
