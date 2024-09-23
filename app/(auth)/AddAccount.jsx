import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { icons } from "../../constants";
import { useRouter } from "expo-router"; // Import useRouter
import Icon from 'react-native-vector-icons/Feather';

const AddAccount = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="w-full h-full bg-[#001338]">
      <StatusBar barStyle="light-content" />
      <Image source={icons.auth} className="w-[414px] h-[45%]" />

      <View className="h-[60%] w-full px-6 py-10 absolute bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl flex justify-between items-start">
        <View className="w-full flex flex-col justify-start items-start gap-5 mb-5">
          <Text className="text-black text-2xl font-semibold tracking-tight">
            Log in to your account
          </Text>

          <TextInput
            className="w-full h-12 px-4 py-3 rounded-lg border border-[#c5c6cc]"
            placeholder="Email Address"
            placeholderTextColor="#a2a9b9"
            TextEntry={true}
          />

          <View className="w-full h-12 px-4 pr-6 py-3 rounded-lg border border-[#c5c6cc] flex-row justify-between items-center">
            <TextInput
              className="w-full"
              placeholder="Password"
              placeholderTextColor="#a2a9b9"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={isPasswordVisible ? "eye" : "eye-off"} 
                className="p-4"
                style={{ width: 16, height: 14 }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="">
            <Text className="text-[#1e69ff] text-sm font-semibold">
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push("/Home")} 
            activeOpacity={0.7}
            className=" text-lg font-semibold px-2.5 py-4 bg-[#1e69ff] rounded-lg w-full flex flex-row justify-center items-center"
          >
            <Text className="text-gray-100">Login</Text>
          </TouchableOpacity>

          <View className="h-0 w-full border-[0.5px] border-[#d1d4dc]" />
        </View>

        <Text className="w-full text-center text-[#4f5668] text-sm font-normal mb-5">
          Or continue with
        </Text>

        <View className="flex-row justify-center items-center gap-4">
          <TouchableOpacity
            activeOpacity={0.7}
            className=" w-[45%] p-3 bg-white rounded-lg border border-[#7aa7ff] flex-col justify-center items-center"
          >
            <Image className="w-6 h-6 rounded-full" source={icons.google} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            className=" w-[45%] p-3 bg-white rounded-lg border border-[#7aa7ff] flex-col justify-center items-center"
          >
            <Image className="w-6 h-6 rounded-full" source={icons.microsoft} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddAccount;
