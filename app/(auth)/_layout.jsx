import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  
  return (
    <>
      <Stack
        screenOptions={{
          headerTitle: '', 
        }}
      >
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen name="AddAccount" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
