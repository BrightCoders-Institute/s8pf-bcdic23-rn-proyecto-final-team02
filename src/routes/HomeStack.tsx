import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, WorkDetailScreen} from '../screens';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WorkDetailScreen" component={WorkDetailScreen} />
    </Stack.Navigator>
  );
};
