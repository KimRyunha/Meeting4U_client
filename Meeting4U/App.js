import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const AppNavigator = createStackNavigator ({
  	Home: {
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
});

export default createAppContainer(AppNavigator);
