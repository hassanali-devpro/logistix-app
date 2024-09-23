import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import auth from '../assets/images/auth.png';

const Splash = () => {
  return (
    <>
      <View className="w-full h-full bg-[#021230]">
        <Image
          source={auth}
          className="w-full h-full object-cover" 
        />
      </View>
      <StatusBar hidden={true} />
      </>
  );
};

export default Splash;
