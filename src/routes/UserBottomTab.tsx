import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, View} from 'react-native';
import {IconComponent} from '../components';
import {
  MapScreen,
  MessagesScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';
import {HomeStack} from './HomeStack';
import {MaterialTab} from './MaterialTab';

const TabButtonUser = createBottomTabNavigator();

export const UserBottomTab = () => {
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
        component={MaterialTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconContainer}>
                <IconComponent name="send" color={focused ? 'red' : 'white'} />
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
