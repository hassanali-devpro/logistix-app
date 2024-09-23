import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Card = ({ icon, title, description,packs,loading }) => {
  return (
    <TouchableOpacity 
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}
      activeOpacity={0.7}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <Image source={icon} style={{ width: 40, height: 40 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ color: '#1a1d23', fontSize: 18, fontWeight: '600' }}>{title}</Text>
          {description && (
            <Text style={{ color: '#4f5668', fontSize: 14, fontWeight: '400' }}>{description}</Text>
          )}
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6}}>
        <Image source={require("../../assets/icons/package.png")} style={{ width: 16, height: 16 }} />
        <Text style={{ color: '#4f5668', fontSize: 14, fontWeight: '400' }}>{packs}</Text>
        {loading && (<Image source={require("../../assets/icons/loading.png")} style={{ width: 24, height: 24 }} />)}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
