import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  // OnboardingScreen,
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  MessagesScreen,
  ProfileScreen,
  NotificationScreen,
  UserAplicationsScreen,
  CompanyAplicationsScreen,
  MapScreen,
  WorkDetailScreen
} from '../screens';
import {
  BottomTabNavigationConfig,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {Platform, StyleSheet, View} from 'react-native';
import {IconComponent, TextComponent} from '../components';
import useAuth from '../hook/useAuth';

const Stack = createStackNavigator();
const TabButtonUser = createBottomTabNavigator();

const StackNavigation = () => {
  const { logged } = useAuth();
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  useEffect(() => {
    console.log(logged);
  }, [logged]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Inicio" component={UserBottomTab} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UserBottomTab = () => {
  const bottomScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,

    tabBarStyle: {
      //alignSelf: 'center', // Centra los elementos del tabBar
      marginHorizontal: 16,
      bottom: Platform.OS === 'ios' ? 30 : 20, // Espacio de 20 unidades desde la parte inferior
      backgroundColor: '#1e164d', // Color de fondo del tabBar
      borderRadius: 20, // establece un radio de borde
      alignContent: 'center',
      alignItems: 'center', // Alinea los elementos del tabBar en el centro
      height: Platform.OS === 'ios' ? 60 : 60,
    },
  };

  return (
    <TabButtonUser.Navigator screenOptions={bottomScreenOptions}>
      <TabButtonUser.Screen
        name="routeHome"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent name="home" color={focused ? 'red' : 'white'} />
              </View>
            );
          },
        }}
      />
      <TabButtonUser.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="notifications"
                  color={focused ? 'red' : 'white'}
                />
              </View>
            );
          },
        }}
      />
      <TabButtonUser.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="map-outline"
                  color={focused ? 'red' : 'white'}
                />
              </View>
            );
          },
        }}
      />
      <TabButtonUser.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="chatbubble"
                  color={focused ? 'red' : 'white'}
                />
              </View>
            );
          },
        }}
      />
      <TabButtonUser.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent
                  name="person"
                  color={focused ? 'red' : 'white'}
                />
              </View>
            );
          },
        }}
      />
    </TabButtonUser.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      />
    <Stack.Screen
      name="WorkDetailScreen"
      component={WorkDetailScreen} />
  </Stack.Navigator>
    )
}

export const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        top: 15,
      },
    }),
  },
});

export default StackNavigation;
