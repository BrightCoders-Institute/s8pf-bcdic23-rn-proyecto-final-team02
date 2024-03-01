import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  OnboardingScreen,
  SplashScreen,
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  MessagesScreen,
  ProfileScreen,
  NotificationScreen,
} from '../screens';

const Stack = createStackNavigator();
const TabButtonUser = createBottomTabNavigator();

const StackNavigation = () => {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Inicio" component={UserButtonTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UserButtonTab = () => {
  return (
    <TabButtonUser.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TabButtonUser.Screen name="Home" component={HomeScreen} />
      <TabButtonUser.Screen name="Messages" component={MessagesScreen} />
      <TabButtonUser.Screen
        name="Notification"
        component={NotificationScreen}
      />
      <TabButtonUser.Screen name="Profile" component={ProfileScreen} />
    </TabButtonUser.Navigator>
  );
};

export default StackNavigation;
