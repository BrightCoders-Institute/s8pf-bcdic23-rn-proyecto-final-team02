import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  OnboardingScreen,
  SplashScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigation = () => {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
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
