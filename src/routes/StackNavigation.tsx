import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  // OnboardingScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';
import {Session} from '@supabase/supabase-js';
import {supabase} from '../lib/supabase';
import {UserBottomTab} from './UserBottomTab';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
        }}>
        {session && session.user ? (
          <Stack.Screen name="Inicio" component={UserBottomTab} />
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
