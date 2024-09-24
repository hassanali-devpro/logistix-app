import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Slot, Stack } from "expo-router";
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown : false}}/>
      <Stack.Screen name="(auth)" options={{headerShown : false}}/>
      <Stack.Screen name="(Tab)" options={{headerShown : false}}/>
      <Stack.Screen name="Receiving" options={{headerShown : false}}/>
      <Stack.Screen name="PutAway" options={{headerShown : false}}/>
      <Stack.Screen name="Picking" options={{headerShown : false}}/>
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
