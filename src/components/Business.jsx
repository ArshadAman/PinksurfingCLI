import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function Business({ navigation }) {
  const [selectedContactMethod, setSelectedContactMethod] = useState('Email');
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const selectOption = (option) => {
    setSelectedContactMethod(option);
    toggleOptions();
  };

  return (
    <SafeAreaView className="bg-[#111018] w-full h-full">
      <View className="header text-white flex flex-row items-center">
        <Text className="text-white pl-5">Back arrow</Text>
        <Text className="text-white text-2xl mx-14">PINK SURFING</Text>
      </View>

      {/* Search bar */}
      <View className="search-bar">
        <TextInput className="bg-gray-700 py-2 px-5 w-[90%] mx-auto my-3 rounded-full text-white placeholder:text-white" placeholder={"Search"}></TextInput>
      </View>
      <View className="btns px-5 my-5 space-y-6">
          <TouchableOpacity className="flex flex-row space-x-3" onPress={()=>navigation.navigate("NewGroup")}>
            <Text className="text-white">Icon</Text>
            <Text className="text-white font-bold">New Group</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row space-x-3" onPress={()=>navigation.navigate("AddContact")}>
            <Text className="text-white">Icon</Text>
            <Text className="text-white font-bold">Add Contact</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
