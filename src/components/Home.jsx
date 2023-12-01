import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import Menu from "./subcomponents/Menu";
import Header from "./subcomponents/Header";
import SubHeader from "./subcomponents/SubHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [businessContacts, setBusinessContacts] = useState([]);
  const [personalContacts, setPersonalContacts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the access token from AsyncStorage
        const token = await AsyncStorage.getItem("token");

        // Define the API endpoint
        const apiUrl = "http://mobileapi.pinksurfing.com/chat/users/contactList?count=100&page=1";

        // Prepare the data to send to the server
        const data = {
          type: "business",
        };

        // Make the API request using axios
        const response = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          params: data,
        });
        console.log(response.data);

        // Handle the API response as needed
        // console.log("All Chats Data:", response.data);
        setBusinessContacts(response.data.data)

        // Set loading to false once the data is fetched
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };
    

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);


  const Personal = () => {
    // Navigate to the new page here
    navigation.navigate('Personal'); // Replace 'NewPage' with the actual name of your new page in your navigation stack
  };

  const Business = () => {
    navigation.navigate('Business')
  }

  const Separator = () => (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#444', marginBottom: 10 }} />
  );
  
  const handleUserClick = (userId, firstName, lastName) => {
    navigation.navigate('TextingScreen', {
      userId,
      firstName,
      lastName,
    });
  };

  return (
    <View className="flex flex-1 bg-[#111018] items-center relative top-[54px]">
      <Header />
      <SubHeader/>
      <View className="mt-10 relative">
        <Image
          source={require("../../assets/chat_body.webp")}
          className="w-[100vw] h-[68vh]"
        ></Image>
        <View className="absolute px-5 py-6 h-[50%] w-full">
        <ScrollView>
        <FlatList
          data={businessContacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleUserClick(item._id, item.firstName, item.lastName)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image source={require("../../assets/coins.png")} style={{ width: 50, height: 50 }} />
                <Text style={{ color: 'white', marginLeft: 10 }}>{item.firstName} {item.lastName}</Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={Separator}
        />
      </ScrollView>

          <View className="absolute bottom-0 right-0 p-4">
            <View className="flex items-center left-16 top-2 justify-center">
              <TouchableOpacity onPress={Business}>
              <Image
                source={require("../../assets/addcontact.png")}
                style={{ width: 25, height: 25 }}
                className="right-2"
              />
              </TouchableOpacity>
              <Text className="text-white w-32 text-[9px] right-4 top-1 whitespace-nowrap text-center">
                Business
              </Text>
              <Text className="text-white w-32 text-[9px] right-4 top-1 whitespace-nowrap text-center">
              Contact
              </Text>
            </View>
          </View>
        </View>
        <View className="absolute left-1/2 -ml-12 top-[450px]">
          <View className="absolute bottom-0 right-0 p-4">
          <View className="flex items-center top-20 left-44">
          <TouchableOpacity onPress={Personal}>
        <Image
          source={require('../../assets/addcontact.png')}
          style={{ width: 25, height: 25 }}
          className="right-1"
        />
      </TouchableOpacity>
              <Text className="text-white w-32 text-[9px] right-4 top-1 whitespace-nowrap text-center">
                Personal Contact
              </Text>
            </View>
          </View>
          <Text className="text-white text-lg">No chats found</Text>
        </View>
      </View>
      {/* Menu bar */}
      {/* <Menu /> */}
    </View>
  );
}