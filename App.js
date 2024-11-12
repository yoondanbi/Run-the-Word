// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/HomeScreen";
import MyPageScreen from "./components/MyPageScreen";
import SettingsScreen from "./components/SettingsScreen";
import WordTestScreen from "./components/WordTestScreen";
import WrongNoteScreen from "./components/WrongNoteScreen";
import WordStudyScreen from "./components/WordStudyScreen";

// Stack Navigator 정의
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// HomeScreen에서 다른 화면으로 이동하는 버튼을 추가할 때 사용
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="WordTest" component={WordTestScreen} />
    <Stack.Screen name="WrongNote" component={WrongNoteScreen} />
    <Stack.Screen name="WordStudy" component={WordStudyScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "MyPage") {
              iconName = "person-outline";
            } else if (route.name === "Settings") {
              iconName = "settings-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6A0DAD",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
