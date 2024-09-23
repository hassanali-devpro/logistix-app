import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SignIn from './(auth)/SignIn';
import AddAccount from './(auth)/AddAccount';
import Splash from './Splash';



const App = () => {


  return (
    <SafeAreaView className=" ">
      <SignIn />
      {/* <AddAccount /> */}
    </SafeAreaView>
  );
};

export default App;
