import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SubHeader() {

  const navigation = useNavigation()

  const CallHistory = () => {
    // Navigate to the new page here
    navigation.navigate('CallHistory'); // Replace 'NewPage' with the actual name of your new page in your navigation stack
  };


  return (
    <View className="flex flex-row top-6 w-[30vw] justify-center">
    <View className="flex flex-row items-center space-x-2">
      <Image
        source={require("../../../assets/header/coins.png")}
        className="w-10 h-10"
      ></Image>
      <Text className="text-white text-md font-bold">14500 MyBiz</Text>
    </View>
    <Image
      source={require("../../../assets/header/search.png")}
      className="w-48 h-10 mx-2"
    ></Image>
    <View className="flex flex-row items-center space-x-1">
      <TouchableOpacity onPress={CallHistory}>
      <Image
        source={require("../../../assets/header/call-nobe.png")}
        className="w-6 h-6"
      ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
        source={require("../../../assets/header/hand.png")}
        className="w-10 h-10"
      ></Image>
      </TouchableOpacity>
    </View>
  </View>
  )
}
