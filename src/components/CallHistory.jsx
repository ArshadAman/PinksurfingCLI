import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "./subcomponents/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CallHistory({ navigation }) {
  const [callHistory, setCallHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCallHistory = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        "http://mobileapi.pinksurfing.com/chat/calls/history?count=100&page=1&chatType=personal",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network request failed");
      }

      const data = await response.json();

      // Log the entire data received
      console.log("Response data:", data);

      setCallHistory(data);
    } catch (error) {
      setError(error.message);
      // Log any errors that occurred during the fetch
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCallHistory();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} className="flex items-center">
      <ImageBackground
        source={require("../../assets/bg.webp")} // Replace with your background image path
        style={{ flex: 1 }}
      >
        <View className="w-full">
          <View className="flex flex-row items-center w-full justify-between px-3">
            <Image
              source={require("../../assets/header/questionmakr.png")}
              className="w-10 h-10"
            />
            <Image
              source={require("../../assets/header/ps.png")}
              className="w-12.5 h-4 ml-11"
            />
            <View className="flex flex-row">
              <Image
                source={require("../../assets/header/questionmakr.png")}
                className="w-10 h-10"
              />
              <TouchableOpacity>
                <Image
                  source={require("../../assets/header/img_settings.png")}
                  className="w-5 h-5 mt-2.5 ml-1"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full h-[0.5px] bg-gray-200"></View>
        </View>
        <ScrollView>
          <View className="flex items-center">
            {/* Check if callHistory is an array before mapping */}
            {Array.isArray(callHistory) &&
              callHistory.map((call, index) => (
                <View key={index} className="flex items-center mb-5">
                  <Image
                    source={{ uri: call.receiver_image }}
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    className="mr-2"
                  />
                  <View>
                    <Text>{call.receiver_name}</Text>
                    <Text>
                      {call.call_make_time} - {call.call_end_time}
                    </Text>
                  </View>
                  {call.group_name && (
                    <View>
                      <Image
                        source={{ uri: call.group_image }}
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                        className="mr-2"
                      />
                      <Text>{call.group_name}</Text>
                    </View>
                  )}
                </View>
              ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
