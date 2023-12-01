import React, { useEffect, useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Menu from "./subcomponents/Menu";
import Header from "./subcomponents/Header";
import SubHeader from "./subcomponents/SubHeader";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PayChat({ navigation }) {
  const Personal = () => {
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('token'); // Replace with your actual token key

        // If token is available, proceed with the API request
        if (token) {
          const apiUrl = "http://mobileapi.pinksurfing.com/chat/group/allChats";
          const params = { chatType: "both" };

          const response = await axios.get(apiUrl, {
            params,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Handle the response data as needed
          console.log(response.data);
        } else {
          console.error("JWT token not found in AsyncStorage");
        }
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs once after the initial render


  return (
    <SafeAreaView className="flex flex-1 bg-[#111018] items-center relative top-[54px]">
      <View className="w-full">
        <View className="flex flex-row items-center w-full justify-between px-3 py-3">
          <Image
            source={require("../../assets/header/questionmakr.png")}
            className="w-10 h-10"
          ></Image>
          <Text className="text-white text-lg ml-9 font-bold">P$ Pay Chat</Text>
          <View className="flex flex-row">
            <Image
              source={require("../../assets/header/questionmakr.png")}
              className="w-10 h-10"
            ></Image>
            <Image
              source={require("../../assets/header/questionmakr.png")}
              className="w-10 h-10"
            ></Image>
          </View>
        </View>
        <View className="w-full h-[0.5px] bg-gray-200"></View>
      </View> 

      <View className="flex flex-row w-full justify-between py-2 items-center px-5">
        <Text className="text-white">Img</Text>
        <TextInput className="bg-black w-1/2 py-1.5 rounded-full shadow-sm shadow-white text-white px-2"></TextInput>
        <Text className="text-white">Circle</Text>
      </View>

      <View className="mt-1 relative">
        <Image
          source={require("../../assets/chat_body.webp")}
          className="w-[100vw] h-[68vh]"
        ></Image>
        <View className="absolute left-1/2 -ml-12 top-36">
          <Text className="text-white text-lg">No chats found</Text>
          <View className="absolute top-28 left-40 p-4">
            <View className="flex items-center">
              <Image
                source={require("../../assets/addcontact.png")}
                style={{ width: 25, height: 25 }}
                className="right-2"
              />
              <Text className="text-white w-32 text-[9px] right-2 top-1 whitespace-nowrap text-center">
                Pay Me
              </Text>
            </View>
          </View>
        </View>
        <View className="absolute left-1/2 -ml-12 top-[450px] ">
          <View className="absolute top-10 -left-5 p-4">
          <View className="flex items-center top-20 left-44">
          <TouchableOpacity onPress={Personal}>
        <Image
          source={require('../../assets/addcontact.png')}
          style={{ width: 25, height: 25 }}
          className="right-1"
        />
      </TouchableOpacity>

              <Text className="text-white w-32 text-[9px]  top-1 whitespace-nowrap text-center">
              Pay Out

              </Text>
            </View>
          </View>
          <Text className="text-white text-lg">No chats found</Text>
        </View>
      </View>

      {/* Menu bar */}
      {/* <Menu /> */}
    </SafeAreaView>
  );
}