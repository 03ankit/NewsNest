import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
     <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home") {
            icon = require("../asset/home.png");
          } else if (route.name === "Profile") {
            icon = require("../asset/profile.png");
          }

          return (
            <Image
              source={icon}
              style={{width: 26,height: 26, opacity: focused ? 1 : 0.5, 
                tintColor: focused ? "#4da6ff" : "gray",
              }}
              resizeMode="contain"
            />
          );
        },

        tabBarLabelStyle: {
          fontSize: 12,
        },

        tabBarActiveTintColor: "#4da6ff",
        tabBarInactiveTintColor: "gray",

        tabBarStyle: {
          backgroundColor: "#0f1c2e",
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </SafeAreaView>
  );
}
