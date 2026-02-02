import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';  
import Otpscreen from '../screens/Otpscreen';
import Bottomtab from '../screens/Bottomtab';
import PhoneNumberScreen from "../screens/Phonenumber"; 
import DetailsScreen from "../screens/Details";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import SplashScreen from "../screens/Splashscreen";
import Profile from "../screens/Profile";


const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            {/* <Stack.Screen name="Login" component={LoginScreen} />*/}
            <Stack.Screen name="Splashscreen" component={SplashScreen} />
            <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
            <Stack.Screen name="Otpscreen" component={Otpscreen} />  
            <Stack.Screen name="Profile" component={Profile} />
            {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
            
            <Stack.Screen name="Bottomtab"component={Bottomtab}/>
            <Stack.Screen name="Details" component={DetailsScreen} />
            {/* <Stack.Screen name="Home" component={Home} />
            */}

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView> 
      
  );
}
