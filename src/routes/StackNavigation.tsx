import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  // OnboardingScreen,
  SignInScreen,
  SignUpScreen,
  HomeScreen,
} from '../screens';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const [initializing, setInitializing] = useState<Boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null | undefined>();

  function onAuthStateChanged(
    user: React.SetStateAction<FirebaseAuthTypes.User | null | undefined>,
  ): void {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}

        {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
