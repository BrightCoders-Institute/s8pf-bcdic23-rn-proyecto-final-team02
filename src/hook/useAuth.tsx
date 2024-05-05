import {View, Text, Alert, AppState} from 'react-native';
import React, {useState} from 'react';
import useQuery from './useQuery';
import { supabase } from '../lib/supabase';

const useAuth = () => {
  // Variables para registrar al usuario
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  // const {user, setUser, createUser} = useQuery();

  // Estado para dar tiempo a cargar los datos
  const [changeLoading, setChangeLoading] = useState(false);

  const handleAutoRefresh = () => {
    AppState.addEventListener('change', ( state ) => {
      if ( state === 'active' ) {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });
  };

  const handleSigInWithEmail = async () => {
    if (email.length > 0 && password.length > 0) {

      setChangeLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if ( error ) Alert.alert(error.message);
      setChangeLoading(false);

    } else {

      Alert.alert('Advertencia', 'Debes llenar todos los campos', [
        {text: 'Ok'},
      ]);

      setChangeLoading(false);

    }
  };

  // const handleCreateUserWithEmail = async () => {
  //   const trimmedEmail = email.trim();
  //   const trimmedPhone = phone.trim();

  //   if (
  //     (trimmedEmail.length > 0 || trimmedPhone.length > 0) &&
  //     password.length > 0 &&
  //     confirmPass.length > 0
  //   ) {
  //     if (password === confirmPass) {
  //       setChangeLoading(true);
  //       try {
  //         if (trimmedEmail.length > 0) {
  //           const userCredential = await auth().createUserWithEmailAndPassword(
  //             trimmedEmail,
  //             password,
  //           );
  //           const {user} = userCredential;
  //           setChangeLoading(false);
  //         } else if (trimmedPhone.length > 0) {
  //           await auth().signInWithPhoneNumber(trimmedPhone);
  //           setChangeLoading(false);
  //         }
  //       } catch (error) {
  //         Alert.alert('Error', `${error}`);
  //         setChangeLoading(false);
  //       }
  //     } else {
  //       Alert.alert('Alerta', 'Las contraseñas no coinciden');
  //     }
  //   } else {
  //     Alert.alert('Alerta', 'Debes llenar todos los campos');
  //   }
  // };

  // const handleSignOut = async () => {
  //   try {
  //     await GoogleSignin.signOut();
  //     await auth()
  //       .signOut()
  //       .then(() => Alert.alert('Información', 'Se ha cerrado la sesión'));
  //   } catch (error) {
  //     Alert.alert('Error', `${error}`);
  //   }
  // };

  // const handleForgetPassword = async () => {
  //   if (email.length > 0) {
  //     setChangeLoading(true);
  //     await auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         Alert.alert('Información', 'Correo de recuperación enviado'),
  //           setChangeLoading(false);
  //       })
  //       .catch((err: any) => {
  //         setChangeLoading(false);
  //         Alert.alert('Error', `${err.message}`);
  //       });
  //   } else Alert.alert('Alerta', 'Ingresa tu correo electrónico');
  // };

  // const handleGoogleLogin = async () => {
  //   try {
  //     setChangeLoading(true);

  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     const {idToken} = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     setChangeLoading(false);
  //     return auth().signInWithCredential(googleCredential);
  //   } catch (error: any) {
  //     setChangeLoading(false);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       Alert.alert('Alerta', 'Inicio de sesión interrumpido');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       Alert.alert('Alerta', 'Inicio de sesión en progreso');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       Alert.alert('Alerta', 'Servicios de google NO DISPLINIBLES');
  //     } else {
  //       Alert.alert('Alerta', 'Inicio de sesión fallido');
  //     }
  //   }
  // };

  // const handleGoogleSignUp = async () => {
  //   try {
  //     setChangeLoading(true);

  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     const {idToken, user} = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     setChangeLoading(false);

  //     return auth()
  //       .signInWithCredential(googleCredential)
  //       .finally(() => {
  //         // Use helper to create user in the firestore
  //         createUserGoogle(user, auth().currentUser?.uid);
  //       });
  //   } catch (error: any) {
  //     setChangeLoading(false);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       Alert.alert('Alerta', 'Registro interrumpido');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       Alert.alert('Alerta', 'Registro en progreso');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       Alert.alert('Alerta', 'Servicios de google NO DISPLINIBLES');
  //     } else {
  //       Alert.alert('Alerta', 'Registro fallido');
  //     }
  //   }
  // };

  // const handleEmailOrPhoneChange = val => {
  //   // Check if value is an email address
  //   if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
  //     setEmail(val);
  //   } else {
  //     setPhone(val);
  //   }
  // };

  // const signUp = () => {
  //   // Create user in firebase
  //   handleCreateUserWithEmail().finally(() => {
  //     // Save user data in react useState (Object)
  //     user.email = email;
  //     user.password = password;
  //     user.phone = phone;

  //     // Send user Object to firestore
  //     createUser();
  //   });
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
    handleAutoRefresh,
    handleSigInWithEmail,
  };
};

export default useAuth;
