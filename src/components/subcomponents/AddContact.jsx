import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export default function AddContact({ navigation }) {
  const [email, setEmail] = useState("");
  const [selectedType, setSelectedType] = useState("Email");



  const retroAddContact = async () => {
    try {
      // Get the access token from AsyncStorage
      const token = await AsyncStorage.getItem("token");

      console.log("Access token:", token); // Debug log for the access token

      // Define the API endpoint
      const apiUrl = "http://mobileapi.pinksurfing.com/chat/users/addContact";

      // Prepare the request data
      const requestData = {
        email,
        type: 'business'
      };

      console.log("Request Data:", requestData); // Debug log for request data

      // Make the API request using fetch
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Adjust based on server expectations
          Authorization: token,
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      console.log("API Response:", responseData); // Debug log for the API response

      // Check the response and show the result
      if (response.status === 200) {
        console.log("Contact added successfully");
        navigation.navigate("allcontacts")
        // You can add additional logic to show a success message here
      } else {
        console.error("Error adding contact");
        navigation.navigate("allcontacts")

        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors here
    }
  };
  
  return (
    <SafeAreaView className="bg-[#111018] w-full h-full">
      <View className="header text-white flex flex-row items-center">
        <Text className="text-white pl-5">Back arrow</Text>
        <Text className="text-white text-2xl mx-14">PINK SURFING</Text>
      </View>

      {/* Search bar */}
      <View className="flex flex-col items-center">
        <View>
          <Text className="text-white mt-5 mb-2">Select Type</Text>
          <SelectDropdown
            data={["Email", "Mobile No"]}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            className="bg-blue-400 rounded-full"
            defaultValue={"Email"}
            buttonStyle={{
              backgroundColor: "white",
              width: "80%",
              borderRadius: "10px",
            }}
          />
        </View>
      </View>
      <View className="flex items-center flex-col w-full my-5">
        <View className="w-[80%]">
          <Text  className="text-white mb-1">Email Address</Text>
          <TextInput  onChangeText={(Text) => setEmail(Text)} className="bg-white py-3.5 rounded-md px-2"   autoCapitalize={false} placeholder="Enter your Email Address">

          </TextInput>
        </View>
      </View>
      <View className="btns flex flex-row justify-center">
        <TouchableOpacity onPress={retroAddContact}
 className="bg-black py-3 w-[80%] rounded-full">
          <Text className="text-white font-bold text-center">Add to Contact</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-white font-semibold text-center mt-6 mb-3">--OR--</Text>
      <View className="btns flex flex-row justify-center">
        <TouchableOpacity className="bg-black py-3 w-[80%] rounded-full">
          <Text className="text-white font-bold text-center">Scan OR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
