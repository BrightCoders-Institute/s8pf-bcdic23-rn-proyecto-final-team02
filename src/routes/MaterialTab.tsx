import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {UserAplicationsScreen} from '../screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const MaterialTab = () => {
  const {top} = useSafeAreaInsets();

  const materialTabScreenOptions: MaterialTopTabNavigationOptions = {
    tabBarStyle: {
      top: Platform.OS === 'ios' ? top - 11 : top,
    },
  };

  return (
    <Tab.Navigator screenOptions={materialTabScreenOptions}>
      <Tab.Screen name="Applications" component={UserAplicationsScreen} />
    </Tab.Navigator>
  );
};
