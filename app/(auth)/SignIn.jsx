import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { icons } from "../../constants";
import { useRouter } from "expo-router"; // Import useRouter

const LoginScreen = () => {
  const router = useRouter(); // Initialize the router for navigation

  return (
    <View className="w-full h-full bg-[#001338]">
      <StatusBar barStyle="light-content" />
      <Image source={icons.auth} className="w-[414px] h-[45%]" />

      <View className="h-[60%] w-full px-6 py-10 absolute bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl flex justify-between items-start">
        <View className="w-full flex flex-col justify-start items-start gap-6">
          <Text className="text-black text-2xl font-semibold tracking-tight">
            Log in
          </Text>

          <View className="w-full rounded-xl border border-[#d1d4dc] flex-col justify-start items-center">
            <TouchableOpacity
              activeOpacity={0.7}
              className="p-4 flex-row justify-between items-center w-full"
              onPress={() => router.push("/Home")} 
            >
              <View className=" flex flex-row justify-start items-center">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  source={icons.avatar}
                />
                <Text className="text-[#353a46] text-base font-semibold">
                  Paul Anderson
                </Text>
              </View>
              <Image
                className="w-6 h-6 rounded-full mr-4"
                source={icons.face}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              className="p-4 flex-row justify-between items-center w-full border-t border-b border-[#d1d4dc]"
              onPress={() => router.push("/Home")} 
            >
              <View className=" flex flex-row justify-start items-center">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  source={icons.avatar1}
                />
                <Text className="text-[#353a46] text-base font-semibold">
                  Alexander Hayes
                </Text>
              </View>
              <Image
                className="w-6 h-6 rounded-full mr-4"
                source={icons.face}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              className="p-4 flex-row justify-between items-center w-full"
              onPress={() => router.push("/Home")} 
            >
              <View className=" flex flex-row justify-start items-center">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  source={icons.avatar2}
                />
                <Text className="text-[#353a46] text-base font-semibold">
                  Olivia Carter
                </Text>
              </View>
              <Image
                className="w-6 h-6 rounded-full mr-4"
                source={icons.dialpad}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-center items-center gap-4">
          <View className="w-[45%]">
            <TouchableOpacity
              onPress={() => {
                router.push("/AddAccount"); // Navigate to AddAccount
              }}
              activeOpacity={0.7}
              className="px-3 py-[11px] bg-white rounded-lg border border-[#7aa7ff] flex-col justify-center items-center"
            >
              <Image className="w-6 h-6 rounded-full mb-1" source={icons.circle} />
              <Text className="text-[#1e69ff] text-sm font-semibold leading-tight">
                Add another account
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            className=" w-[45%] px-3 py-[11px] bg-white rounded-lg border border-[#7aa7ff] flex-col justify-center items-center"
          >
            <Image className="w-6 h-6 rounded-full mb-1" source={icons.edit} />
            <Text className="text-[#1e69ff] text-sm font-semibold leading-tight">
              Modify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
