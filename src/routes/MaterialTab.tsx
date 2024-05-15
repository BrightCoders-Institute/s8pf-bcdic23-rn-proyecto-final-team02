import {Platform} from 'react-native';
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CompanyJobsScreen,
  FormScreen,
  UserApplicationsScreen,
} from '../screens';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const MaterialTab = () => {
  const {top} = useSafeAreaInsets();

  const materialTabScreenOptions: MaterialTopTabNavigationOptions = {
    tabBarStyle: {
      top: Platform.OS === 'ios' ? top - 11 : top,
    },
  };

  return (
    <Tab.Navigator screenOptions={materialTabScreenOptions}>
      <Tab.Screen name="My Applications" component={UserApplicationsScreen} />
      <Tab.Screen name="CrudStack" component={CrudStack} />
    </Tab.Navigator>
  );
};

const CrudStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="My Jobs" component={CompanyJobsScreen} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
    </Stack.Navigator>
  );
};
