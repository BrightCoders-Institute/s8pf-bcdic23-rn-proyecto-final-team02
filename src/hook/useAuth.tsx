import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const useAuth = () => {
  // Variables para registrar al usuario
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');

  // Estado para dar tiempo a cargar los datos
  const [changeLoading, setChangeLoading] = useState(false);

  const handleSigInWithEmail = async (navigation: any) => {
    if (email.length > 0 && password.length > 0) {
      setChangeLoading(true);

      await auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(userCredential => {
          const user = userCredential.user;
          navigation.navigate('Home');
          setChangeLoading(false);
        })
        .catch((err: any) => {
          Alert.alert(err.message);
          setChangeLoading(false);
        });
    } else {
      Alert.alert('Advertencia', 'Debes llenar todos los campos', [
        {text: 'Ok'},
      ]);
      setChangeLoading(false);
    }
  };

  const handleCreateUserWithEmail = async () => {
    if (email.length > 0 && password.length) {
      setChangeLoading(true);

      await auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(userCredential => {
          const user = userCredential.user;
          setChangeLoading(false);
        })
        .catch((err: any) => {
          Alert.alert(err.message);
          setChangeLoading(false);
        });
    } else {
      Alert.alert('Alerta', 'Debes llenar todos los campos');
    }
  };

  const handleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth()
        .signOut()
        .then(() => Alert.alert('Información', 'Se ha cerrado la sesión'));
      console.log('Succesful');
    } catch (error) {
      console.error(error);
    }
  };

  const handleForgetPassword = async () => {
    if (email.length > 0) {
      setChangeLoading(true);
      await auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert('Información', 'Correo de recuperación enviado'),
            setChangeLoading(false);
        })
        .catch((err: any) => {
          setChangeLoading(false);
          console.log(err.message);
        });
    } else Alert.alert('Alerta', 'Ingresa tu correo electrónico');
  };

  const handleGoogleLogin = async () => {
    setChangeLoading(true);
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    setChangeLoading(false);
    return auth().signInWithCredential(googleCredential);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    changeLoading,
    handleSigInWithEmail,
    handleCreateUserWithEmail,
    handleForgetPassword,
    handleGoogleLogin,
    handleSignOut,
  };
};

export default useAuth;
