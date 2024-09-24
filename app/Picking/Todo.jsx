import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import data from "../../constants/data";
import Card from "../../components/Card";

const Todo = () => {
  return (
    <>
      <ScrollView className="flex-1">

        {data.availablePicking.map((item, index) => (
          <Card 
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            packs={item.packs}
            loading={item.loading}

          />
        ))}

      </ScrollView>
      <View className="pb-[35%]"></View>
    </>
  );
};

export default Todo;

