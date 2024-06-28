import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from 'react-native';
export default function _layout() {
  return (
    <>
      <StatusBar hidden={false} />
    <Stack
      // screenOptions={{
        //   headerStyle: {
          //     backgroundColor: "light-blue",
          //   },
          //   headerTintColor: "white",
          // }}
          // options={{ headerShown: false }}
          >
      <Stack.Screen
        name="index"
        options={{
            headerShown: false }}
            />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/(drawer)/(tabs)/feed"/> */}
    </Stack>
        </>
  );
}
