import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  const handleExploreClick = () => {
    navigation.navigate("Explore");
  };
  const handleShopClick = () => {
    navigation.navigate("Shopnow");
  };
  const handlepaychatclick = () => {
    navigation.navigate("PayChat");
  };
  return (
    <View className="flex flex-row my-1 space-x-4 py-5 bg-[#111018] rounded-md fixed bottom-5 justify-center">
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <View className="flex items-center">
          <Image
            source={require("../../../assets/chat.png")}
            className="w-10 h-10"
          ></Image>
          <Text className="text-white">Chat</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlepaychatclick}>
        <View className="flex items-center">
          <Image
            source={require("../../../assets/chat.png")}
            className="w-10 h-10"
          ></Image>
          <Text className="text-white">Pay-Chat</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShopClick}>
        <View className="flex items-center">
          <Image
            source={require("../../../assets/shop.png")}
            className="w-10 h-10"
          ></Image>
          <Text className="text-white">Shop Now</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("TextingScreen")}>
        <View className="flex items-center">
          <Image
            source={require("../../../assets/share.png")}
            className="w-10 h-10"
          ></Image>
          <Text className="text-white">Share</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleExploreClick}>
        <View className="flex items-center">
          <Image
            source={require("../../../assets/explore.png")}
            className="w-10 h-10"
          ></Image>
          <Text className="text-white">Explore</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <View className="flex items-center">
          <Image
            source={require("../../../assets/profile.png")}
            className="w-10 h-10"
          ></Image>
          <Text className="text-white">Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
