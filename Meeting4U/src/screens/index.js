import { Navigation } from 'react-native-navigation';

import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

export function registerScreens() {
  Navigation.registerComponent('meeting4u.StartScreen', () => StartScreen);
  Navigation.registerComponent('meeting4u.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('meeting4u.SignUpScreen', () => SignUpScreen);
}
