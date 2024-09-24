import { View, Text, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView, StatusBar } from "react-native";

import React, { useState } from "react";
import { icons } from "../../constants";
import Todo from "./Todo";
import OnHold from "./OnHold";
import Completed from "./Completed";
import { useNavigation } from '@react-navigation/native'; 



const TabIcon = ({ name, focused, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`flex flex-row w-[33.33%] justify-center items-center h-[52px] py-4 border-b-2 ${ focused ? "border-b-[#1F69FF]" : "border-b-transparent" }`}>
      <Text className={`text-sm font-medium leading-4 ${focused ? "text-[#1F69FF]" : ""}`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const _layout = () => {
  const [selectedTab, setSelectedTab] = useState("Todo");
  const navigation = useNavigation();


  const renderContent = () => {
    switch (selectedTab) {
      case "Todo":
        return <Todo />;
      case "OnHold":
        return <OnHold />;
      case "Completed":
        return <Completed />;
      default:
        return <Todo />;
    }
  };

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <SafeAreaView className="bg-white h-screen w-screen px-4 pt-6">
    <View className="flex flex-row justify-between w-full py-2">
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Image source={icons.chevronleft} className="h-10 w-10" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={icons.plus} className="h-10 w-10" />
        </TouchableOpacity>
      </View>

      <View className="py-4">
        <Text className="text-5xl font-bold">Picking</Text>
      </View>

      <View className="w-full h-10 rounded-lg flex-row justify-between items-center bg-[#F3F4F6]">
        <TouchableOpacity>
          <Image source={icons.search} className="m-4 w-5 h-5" />
        </TouchableOpacity>
        <TextInput
          className="w-full"
          placeholder="Search"
          placeholderTextColor="#a2a9b9"
        />
      </View>

      <View className="flex flex-row justify-between w-full py-4">
        <TabIcon name="To Do &#183; 1" focused={selectedTab === "Todo"} onPress={() => setSelectedTab("Todo")} />
        <TabIcon name="On Hold &#183; 1" focused={selectedTab === "OnHold"} onPress={() => setSelectedTab("OnHold")} />
        <TabIcon name="Completed" focused={selectedTab === "Completed"} onPress={() => setSelectedTab("Completed")} />
      </View>

      <ScrollView>{renderContent()}</ScrollView>
    </SafeAreaView>
    </>
  );
};

export default _layout;
