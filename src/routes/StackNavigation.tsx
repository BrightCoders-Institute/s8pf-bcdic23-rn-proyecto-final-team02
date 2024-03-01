import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  OnboardingScreen,
  SplashScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';

const Stack = createStackNavigator();

const StackNavigation = () => {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
