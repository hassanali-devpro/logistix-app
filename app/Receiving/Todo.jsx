import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import data from "../../constants/data";
import Card from "../../components/Card";

const Todo = () => {
  return (
    <>
      <ScrollView className="flex-1">
        <View>
          <Text className="text-[#4f5668] text-sm font-normal my-2">
            Assign to me
          </Text>
        </View>

        {data.AssignReceiving.map((item, index) => (
          <Card 
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            packs={item.packs}
            loading={item.loading}
            user={item.user}

          />
        ))}

        <View>
          <Text className="text-[#4f5668] text-sm font-normal my-2">
            Available Receiving
          </Text>
        </View>

        {data.AvailableReceiving.map((item, index) => (
          <Card 
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            packs={item.packs}
            loading={item.loading}
            user={item.user}

          />
        ))}

      </ScrollView>
      <View className="pb-[35%]"></View>
    </>
  );
};

export default Todo;

