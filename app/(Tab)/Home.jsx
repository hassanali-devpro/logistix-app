import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { icons } from "../../constants";
import cardData from "../../constants/data"; // Import cardData directly
import Card from "../../components/Card"; // Import the Card component
import { useRouter } from "expo-router"; 


const Home = () => {
  const router = useRouter();

  return (
    <View className="bg-white h-screen w-screen px-4">
      <View className="flex flex-row justify-between w-full py-2">
        <Image source={icons.logo3d} className="h-10 w-[130px]" />
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={icons.avatar} className="h-10 w-10" />
        </TouchableOpacity>
      </View>
      <View className="py-4">
        <Text className="text-5xl font-bold">Today</Text>
      </View>

      <ScrollView className="flex-1">
        <View>
          <Text className="text-[#4f5668] text-sm font-normal my-2">
            Important
          </Text>
        </View>

        <TouchableOpacity className="flex-row items-center justify-between p-4 border-[0.5px] border-[#d1d4dc] rounded-xl" activeOpacity={0.7} onPress={() => router.push("/Tasks")}>
          <View className="flex-row items-center space-x-4">
            <Image source={icons.check} className="w-10 h-10" />
            <View className="flex-col">
              <Text className="text-[#1a1d23] text-lg font-semibold">
                My Tasks
              </Text>
              <Text className="text-[#4f5668] text-sm font-normal">
                5 tasks assigned to you
              </Text>
            </View>
          </View>
          <Image source={icons.chevron} className="w-3 h-6" />
        </TouchableOpacity>

        <View>
          <Text className="text-[#4f5668] text-sm font-normal my-2">Activities</Text>
        </View>

        <View className="border-[1px] border-[#d1d4dc] rounded-xl">
        <TouchableOpacity className="flex-row items-center justify-between p-4 border-b-[1px] border-[#d1d4dc]" activeOpacity={0.7} onPress={() => router.push("/Receiving")}  >
          <View className="flex-row items-center space-x-4">
            <Image source={icons.receive} className="w-10 h-10" />
            <View className="flex-col">
              <Text className="text-[#1a1d23] text-lg font-semibold">
                Receive
              </Text>
            </View>
          </View>
          <Image source={icons.chevron} className="w-3 h-6" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between p-4 border-b-[1px] border-[#d1d4dc]" activeOpacity={0.7} >
          <View className="flex-row items-center space-x-4">
            <Image source={icons.qa} className="w-10 h-10" />
            <View className="flex-col">
              <Text className="text-[#1a1d23] text-lg font-semibold">
                QA
              </Text>
            </View>
          </View>
          <Image source={icons.chevron} className="w-3 h-6" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between p-4 border-b-[1px] border-[#d1d4dc]" activeOpacity={0.7} onPress={() => router.push("/PutAway")}>
          <View className="flex-row items-center space-x-4">
            <Image source={icons.away} className="w-10 h-10" />
            <View className="flex-col">
              <Text className="text-[#1a1d23] text-lg font-semibold">
                Put-Away
              </Text>
            </View>
          </View>
          <Image source={icons.chevron} className="w-3 h-6" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between p-4 border-b-[1px] border-[#d1d4dc]" activeOpacity={0.7} onPress={() => router.push("/Picking")}>
          <View className="flex-row items-center space-x-4">
            <Image source={icons.pick} className="w-10 h-10" />
            <View className="flex-col">
              <Text className="text-[#1a1d23] text-lg font-semibold">
                Pick
              </Text>
            </View>
          </View>
          <Image source={icons.chevron} className="w-3 h-6" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between p-4 border-b-[1px] border-[#d1d4dc]" activeOpacity={0.7} >
          <View className="flex-row items-center space-x-4">
            <Image source={icons.ship} className="w-10 h-10" />
            <View className="flex-col">
              <Text className="text-[#1a1d23] text-lg font-semibold">
                Ship/Return
              </Text>
            </View>
          </View>
          <Image source={icons.chevron} className="w-3 h-6" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between p-4 border-b-[1px] border-[#d1d4dc]" activeOpacity={0.7} >
          <View className="flex-row items-center space-x-4">
            <Image source={icons.cycle} className="w-10 h-10" />
            <View className="flex-col">
              <Text className="text-[#1a1d23] text-lg font-semibold">
                Cycle Count
              </Text>
            </View>
          </View>
          <Image source={icons.chevron} className="w-3 h-6" />
        </TouchableOpacity>
        </View>
      <View className="pb-[35%]"></View>
      </ScrollView>
    </View>
  );
};

export default Home;
