import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateMtScreen from './src/screens/CreateMtScreen';
import MapScreen from './src/screens/MapScreen';
import SettingScreen from './src/screens/SettingScreen';
import MtDetailsScreen from './src/screens/MtDetailsScreen';

const HomeTabNavigator = createBottomTabNavigator (
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				headerShown: false
			},
		}, 
		Setting: {
			screen: SettingScreen,
			navigationOptions: {
				headerShown: false
			}
		},
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			swipeEnabled: true,
			adaptive: true,
			tabBarIcon: ({horizontal, tintColor}) => {
				const {routeName} = navigation.state;
				let IconComponent = Ionicons;
				let iconName;
				if (routeName === 'Home') {
					iconName = 'ios-home';
				} else if (routeName === 'Setting') {
					iconName = 'ios-settings';
				}

				return (
					<IconComponent
						name={iconName}
						size={horizontal ? 20 : 25}
						color={tintColor}
					/>
				);
			},
		}),
		tabBarOption: {
			activeTintColor: '#E6826E',
			inactiveTintColor: 'gray',
		},
	}
);

const AppNavigator = createStackNavigator (
	{
		Start: {
			screen: StartScreen,
			navigationOptions: {
				headerShown: false
			}
		},
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				headerShown: false
			}
		},
		SignUp: {
			screen: SignUpScreen,
			navigationOptions: {
				headerShown: false
			}
		},
		HomeTabNavigator: {
			screen: HomeTabNavigator,
			navigationOptions: {
				headerShown: false
			},
		},
		CreateMT: {
			screen: CreateMtScreen,
			navigationOptions: {
				headerShown: false
			}
		},
		MapScreen: {
			screen: MapScreen,
			navigationOptions: {
				headerShown: false
			}
		},
		MtDetails: {
			screen: MtDetailsScreen,
			navigationOptions: {
				headerShown: false
			}
		},
	},
	{
		initialRouteName: 'Start' // 처음 보여줄 화면
	},
);

export default createAppContainer(AppNavigator);
