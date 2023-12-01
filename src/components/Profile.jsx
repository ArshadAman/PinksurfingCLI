import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import React, {useRef} from "react";
import Header from "./subcomponents/Header";

export default function Profile({ navigation }) {

  const Settings = () => {
    navigation.navigate('Settings')
  }


  const Businesscard = () => {
    navigation.navigate('Businesscard')
  }




  return (
    <SafeAreaView className="flex items-center h-full">
   <ImageBackground
        source={require("../../assets/bg.webp")} // Replace with your background image path
        style={{ flex: 1 }}
      >
 <View className="w-full">
        <View className="flex flex-row items-center w-full justify-between px-3">
          <Image
            source={require("../../assets/header/questionmakr.png")}
            className="w-10 h-10"
          ></Image>
          <Image 
          source={require("../../assets/header/ps.png")}
          className="w-12.5 h-4 ml-11"
          ></Image>
          <View className="flex flex-row">
            <Image
              source={require("../../assets/header/questionmakr.png")}
              className="w-10 h-10"
            ></Image>
            <TouchableOpacity onPress={Settings}>
            <Image
              source={require("../../assets/header/img_settings.png")}
              className="w-5 h-5 mt-2.5 ml-1"
            ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full h-[0.5px] bg-gray-200"></View>
      </View>
      <ScrollView className="">
        <View className="flex items-center">
          <View className="profile-image w-32 h-32 rounded-full border border-white flex items-center justify-center my-5">
            <Image
              source={require("../../assets/login.webp")}
              className="w-28 h-28 rounded-full"
            ></Image>
          </View>
          <View className="flex items-center">
          <Text className="color-white font-bold text-lg mb-2">Raihan Khan</Text>
</View>
<View className="ps-assets mt-3 bg-[#1b1b27] w-96 rounded-xl">
            <View className="head flex flex-row justify-between px-4 py-2">
              <Text className="color-white font-bold text-lg">PS Assets</Text>
              <Text>Icon</Text>
            </View>

            <View className="head flex flex-row justify-between px-4 py-2">
              <Text>Icon</Text>
              <View>
                <Text className="text-xs color-white">Total Balance</Text>
                <Text className="text-lg color-white">0.0000 USD</Text>
              </View>
            </View>
            <View className="w-[95%] mx-auto h-4 rounded-xl bg-red-500"></View>
            <View className="flex flex-row justify-between mx-3 my-3">
              <View>
                <View className="space-y-3">
                  <Text className="text-white">Growth Account</Text>
                  <View className="w-10 h-1 bg-white"></View>
                </View>
              </View>
              <View>
                <View className="space-y-3">
                  <Text className="text-white">Current Account</Text>
                  <View className="w-10 h-1 bg-white"></View>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between mx-3 my-3">
              <View>
                <View className="space-y-1.5">
                  <Text className="color-white">BTC</Text>
                  <Text className="color-white">ETH</Text>
                  <Text className="color-white">MYBIZ</Text>
                  <Text className="color-white">USDT</Text>
                </View>
              </View>
              <View className="space-y-1.5">
                <View className="flex flex-row space-x-1">
                <Text className="text-white">0.0000</Text>
                  <View className="flex flex-row space-x-1">
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">BUY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">SELL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="flex flex-row space-x-1">
                <Text className="text-white">0.0000</Text>
                  <View className="flex flex-row space-x-1">
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">BUY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">SELL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="flex flex-row space-x-1">
                <Text className="text-white">0.0000</Text>
                  <View className="flex flex-row space-x-1">
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">BUY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">SELL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="flex flex-row space-x-1">
                  <Text className="text-white">0.0000</Text>
                  <View className="flex flex-row space-x-1">
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">BUY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-black px-1 rounded">
                      <Text className="text-white">SELL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="my-cards mt-4 bg-[#1b1b27] w-96 h-48 rounded-xl">
            <Text className="p-2 text-lg text-white">My Cards and IDs</Text>
            <View className="buttons space-y-3  flex h-full p-5">
              <View className="flex flex-row space-x-1 justify-around w-full">
                <TouchableOpacity onPress={Businesscard} className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">Business Card</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">My PayChat Card</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">Insurance Cards</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row space-x-1 justify-around w-full">
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">Driver License</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">Credit Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">MISC Documents</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row space-x-1 justify-around w-full">
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">Business Card</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">Business Card</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-500 px-2 py-1 rounded-xl">
                  <Text className="text-white">Business Card</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


          {/* Folded Cards */}
           <View className="mt-4 bg-[#1b1b27] w-96  rounded-xl h-14">
            <Text className="p-4 text-white text-lg">Current Transactions</Text>
           </View>
          {/* Folded Cards */}
          <View className="mt-4 bg-[#1b1b27] w-96  rounded-xl h-14">
            <Text className="p-4 text-white text-lg">Active Finances</Text>

           </View>
          {/* Folded Cards */}
          <View className="mt-4 bg-[#1b1b27] w-96  rounded-xl h-14">
            <Text className="p-4 text-white text-lg">My Gallery</Text>

           </View>
          {/* Folded Cards */}
          <View className="mt-4 bg-[#1b1b27] w-96  rounded-xl h-14">
            <Text className="p-4 text-white text-lg">My Documents</Text>

           </View>
          {/* Folded Cards */}
          <View className="mt-4 bg-[#1b1b27] w-96  rounded-xl h-14">
            <Text className="p-4 text-white text-lg">Create My Store +</Text>

           </View>
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

