import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding, SplashScreen} from '../screens';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigation = () => {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
