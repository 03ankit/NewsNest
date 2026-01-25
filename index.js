/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
//import Login from './Login';
import AppNavigator from './navigation/AppNavigator';
//import Register from './Register';
import { name as appName } from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppNavigator);
//AppRegistry.registerComponent(appName, () => Register);