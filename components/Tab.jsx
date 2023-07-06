import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screen/Home";
import { ProfileScreen } from "./screen/Profile";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Tabshit() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color = "black", size = 25 }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color = "black", size = 25 }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
