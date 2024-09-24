import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Card = ({ icon, title, description, packs, loading, user }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between p-4 border-t border-t-[#d1d4dc]"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center space-x-4">
        <Image source={icon} className="w-10 h-10" />
        <View className="flex-col">
          <Text className="text-[#1a1d23] text-lg font-semibold">{title}</Text>
          <View className="flex flex-row items-center ">
            {user && (<Image source={user} className="w-4 h-4 mr-1" />)}
            <Text className="text-[#4f5668] text-sm font-normal">
              {description}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center space-x-1.5">
        <Image
          source={require("../../assets/icons/package.png")}
          className="w-4 h-4"
        />
        <Text className="text-[#4f5668] text-sm font-normal">{packs}</Text>
        {loading && (
          <Image
            source={require("../../assets/icons/loading.png")}
            className="w-6 h-6"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
