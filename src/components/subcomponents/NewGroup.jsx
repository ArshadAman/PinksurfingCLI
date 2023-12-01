import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function NewGroup({ navigation }) {
  const [groupName, setGroupName] = useState("");

  const navigateToAllContacts = () => {
    navigation.navigate("allcontacts", { groupName: groupName });
  };

    return (
      //http://mobileapi.pinksurfing.com/chat/group/createGroup
      <SafeAreaView className="bg-[#111018] w-full h-full">
        <View className="header text-white flex flex-row items-center">
          <Text className="text-white pl-5">Back arrow</Text>
          <Text className="text-white text-2xl mx-14">PINK SURFING</Text>
        </View>
  
        {/* Search bar */}
        <View className="search-bar">
          <Text className="text-white pl-3 mt-5 text-xs">Group Name</Text>
          <TextInput className="bg-white py-3.5 px-2 w-[95%] mx-auto my-1 rounded-md text-black placeholder:text-black" onChangeText={(text) => setGroupName(text)}
 placeholder={"Enter Group Name"}></TextInput>
        </View>
        <View className="btns flex flex-row justify-center fixed top-[63vh]">
            <TouchableOpacity onPress={navigateToAllContacts}
 className="bg-black py-3 w-1/2 rounded-full">
              <Text className="text-white font-bold text-center">Create Group</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
