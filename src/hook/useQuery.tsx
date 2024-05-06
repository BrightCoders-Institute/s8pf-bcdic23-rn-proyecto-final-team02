import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
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

  // const createUser = async () => {
  //   try {
  //     const userId = auth().currentUser?.uid;
  //     await firestore().collection('users_data').doc(userId).set(user);
  //   } catch (error) {
  //     Alert.alert('Error', `${error}`);
  //   }
  // };

  return {
    user,
    setUser,
    // createUser
  };
};

export default useQuery;
