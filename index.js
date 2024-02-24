/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SignUpScreen from './src/screens/auth/SignUpScreen';

AppRegistry.registerComponent(appName, () => SignUpScreen);
