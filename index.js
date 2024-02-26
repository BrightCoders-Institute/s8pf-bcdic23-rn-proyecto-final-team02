/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import Onboarding from './src/screens/OnboardingScreen';

AppRegistry.registerComponent(appName, () => SignUpScreen);
