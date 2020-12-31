import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateMtScreen from './src/screens/CreateMtScreen';
import MapScreen from './src/screens/MapScreen';

const AppNavigator = createStackNavigator ({
  	Start: {
    	screen: StartScreen,
    	navigationOptions: {
      		headerShown : false
    	},
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
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerShown: false
		}
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
});

export default createAppContainer(AppNavigator);
