import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ImageBackground, StatusBar, } from "react-native";
import React from "react";
import Header from "./subcomponents/Header";

const PayRecieve = () => {
  return (
    <SafeAreaView className="h-full">
      <ImageBackground
        source={require("../../assets/bg.webp")} // Replace with your background image path
        style={{ flex: 1 }}
      >
      <StatusBar style="auto"
       />

      <View className="flex items-center">
        <Header />
      </View>
      <View className="mt-5">
        <Text className="text-white text-xl px-2">Pay and Recieve</Text>
        <View className="w-full h-0.5 mt-1 bg-white"></View>
      </View>

      <View className="flex flex-row space-x-2">
        <TouchableOpacity className="bg-gray-500 w-1/2 py-2">
          <Text className="text-white text-center">Send</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-500 w-1/2 py-2">
          <Text className="text-white text-center">Recieve</Text>
        </TouchableOpacity>
      </View>

      <View className="box w-96 h-96 flex justify-center border border-fuchsia-500 mx-auto my-auto rounded-lg">
        <Text className="text-white mx-auto">Icon</Text>
        <View className="mx-10">
          <Text aria-label="usd" className="text-white">USD</Text>
          <TextInput className="bg-gray-100 px-2 py-3 text-center rounded" placeholder="0000"></TextInput>
          <Text className="text-white text-center my-2">~0</Text>
        </View>
        <View className="mx-10 mt-5">
          <Text aria-label="usd" className="text-white">Send</Text>
          <TextInput className="bg-gray-100 px-2 py-3 text-left rounded" placeholder="Wallet Address"></TextInput>
          <TouchableOpacity className="bg-blue-700 mt-6 py-3 px-2 w-1/2 mx-auto rounded-xl shadow-md"><Text className="text-white text-center">SEND</Text></TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PayRecieve;
