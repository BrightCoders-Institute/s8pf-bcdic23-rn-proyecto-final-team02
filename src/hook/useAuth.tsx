import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const useAuth = () => {
  // Variables para registrar al usuario
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');

  // Estado para dar tiempo a cargar los datos
  const [changeLoading, setChangeLoading] = useState(false);

  const handleSigInWithEmail = async () => {
    if (email.length > 0 && password.length > 0) {
      setChangeLoading(true);

      await auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(userCredential => {
          const user = userCredential.user;
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
    try {
      setChangeLoading(true);

      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      setChangeLoading(false);
      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      setChangeLoading(false);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Alerta', 'Inicio de sesión interrumpido');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Alerta', 'Inicio de sesión en progreso');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Alerta', 'Servicios de google NO DISPLINIBLES');
      } else {
        Alert.alert('Alerta', 'Inicio de sesión fallido');
      }
    }
  };

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
    handleSigInWithEmail,
    handleCreateUserWithEmail,
    handleForgetPassword,
    handleGoogleLogin,
    handleSignOut,
  };
};

export default useAuth;
