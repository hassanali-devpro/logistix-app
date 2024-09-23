import { Text, View, Image, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6 mb-2"
        style={{ tintColor: color }}
      />
      <Text className={`text-xs font-normal leading-4 ${focused ? "text-[#1F69FF]" : ""}`}>
        {name}
      </Text>
    </View>
  );
};

const Layout = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <SafeAreaView />
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 16,
          paddingTop: 16,
          // paddingLeft: 16,
          paddingRight: 16,
          height: 88,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Tasks"
        options={{
          title: "My Tasks",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.list}
              color={color}
              name="My Tasks"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Scan"
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.scan}
              color={color}
              name="Scan"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Time"
        options={{
          title: "Time Check",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.clock}
              color={color}
              name="Time Check"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
    </>
  );
};

export default Layout;
