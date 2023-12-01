import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Menu from "./subcomponents/Menu";

export default function Explore({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: "#111018",
        alignItems: "center",
        paddingTop: 54,
      }}
    >
      {/* <ImageBackground
        source={require("../../assets/bg.webp")} // Replace with your background image path
        style={{ flex: 1 }}
      > */}

        <View className="w-full">
          <View className="flex flex-row items-center w-full justify-between px-3">
            <Image
              source={require("../../assets/mic-icon.png")}
              className="w-10 h-10 ml-3"
            ></Image>
            <Text className="text-white text-lg ml-24 font-bold">Explore</Text>
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

        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}
          className="space-y-6"
        >
          <View className="flex flex-row space-x-5">
            <TouchableOpacity
              onPress={() => navigation.navigate("PayRecieve")}
              className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[40vw]"
            >
              <Text className="text-white font-bold">Pay & Recieve</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#1b1b27] px-3 py-3 rounded-xl w-[45vw]">
              <Text className="text-white font-bold">Create Invoice</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">Deposit & Withdraw</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Shopping Mall & Market Place
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Sell Item / Create your store
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Trade Arena Coming Soon
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Healthcare Coming Soon
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">Video</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">Make Suggestion</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Game: V Juris Forces Coming Soon
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row  space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Gigs / Freelance Coming Soon
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Job Posting Coming Soon
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      {/* </ImageBackground> */}

      {/* Menu bar */}
      {/* <Menu /> */}
    </SafeAreaView>
  );
}
