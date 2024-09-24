import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SignIn from './(auth)/SignIn';
import Splash from './Splash';
import Receiving from './Receiving/_layout';



const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false); 
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }

  return (
    <SafeAreaView className=" ">
      {/* <Receiving /> */}
      <SignIn />
    </SafeAreaView>
  );
};

export default App;
