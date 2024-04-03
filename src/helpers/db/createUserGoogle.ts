import firestore from '@react-native-firebase/firestore';
import {User} from '../../interface/db/UserInterface';
import {Alert} from 'react-native';

interface UserGoogle {
  email: string;
  familyName: string;
  givenName: string;
  name: string;
  photo: string;
}

let user: User = {
  name: '',
  last_name: '',
  email: '',
  gender: '',
  password: '',
  phone: '',
  address: '',
  photo: '',
  working: false,

  applications: [],
  documents: [],
};

export const createUserGoogle = async (
  userGoogle: UserGoogle | any,
  userId: string | any,
) => {
  try {
    user.name = userGoogle.givenName;
    user.last_name = userGoogle.familyName;
    user.email = userGoogle.email;
    user.photo = userGoogle.photo;

    await firestore().collection('users_data').doc(userId).set(user);
  } catch (error) {
    Alert.alert('Error', `${error}`);
  }
};
