import { Navigation } from 'react-native-navigation';

import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import CreateMtScreen from './CreateMtScreen';
import MapScreen from './MapScreen';

export function registerScreens() {
  Navigation.registerComponent('meeting4u.StartScreen', () => StartScreen);
  Navigation.registerComponent('meeting4u.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('meeting4u.SignUpScreen', () => SignUpScreen);
  Navigation.registerComponent('meeting4u.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('meeting4u.CreateMtScreen', () => CreateMtScreen);
  Navigation.registerComponent('meeting4u.MapScreen', () => MapScreen);
}
