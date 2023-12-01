import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import ChatBbl from "./subcomponents/ChatBbl";
// import AgoraUIKit, {PropsInterface} from 'agora-rn-uikit';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker

const styles = StyleSheet.create({
  shadowBox: {
    elevation: 1, // Adjust the elevation to control the shadow depth
    shadowColor: "#61656a",
    shadowOffset: {
      width: -3, // Negative value for left shadow
      height: -4, // Negative value for top shadow
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
});




const TextingScreen = ({ navigation, route }) => {

  const { userId, firstName, lastName } = route.params;

  const handleCameraIconPress = async () => {
    // Use ImagePicker to open the camera or gallery dialog
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // The user selected an image; you can now use `result.uri` to display it.
      // For example, you can update the user's profile picture with this image.
      console.log(result.uri);

      // You can send this image URI to your server and update the user's profile picture.
      // Implement the logic to update the user's profile picture here.
    }
  };


  return (
    <SafeAreaView className="h-full">
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={{ flex: 1 }}
      >
        <View className="header w-full flex flex-row items-center bg-[#1d2226] px-6 py-4 rounded-2xl shadow-2xl">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/back-arrow.png")}
              className="w-8 h-8"
            ></Image>
          </TouchableOpacity>
          <Image
            source={require("../../assets/profile.png")}
            className="w-16 h-16 rounded-full"
          ></Image>
          <View className="mx-1">
            <Text className="text-white font-semibold text-lg">
              {firstName} {lastName}

            </Text>
            <Text className="text-white">Online</Text>
          </View>
          <View className="flex flex-row mx-32 items-center space-x-5">
            <TouchableOpacity>
              <Image
                source={require("../../assets/call-nobe.png")}
                className="w-5 h-5"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/threedot.png")}
                className="w-1 h-4"
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView className="chat-body px-2 py mb-4">
          <ChatBbl sender="" message={"Hi, how are you?"} time={"01:23pm"} />
          <View className="rounded-md my-1 bg-black w-[30%] py-1.5 mx-auto">
            <Text className="text-center color-[#47464b]">Seen 01:45pm</Text>
          </View>
          <ChatBbl
            sender="me"
            message="Hello I am fine thank you."
            time={"01:23pm"}
          />

          <ChatBbl
            sender=""
            message="I am sending some documents please verify the docs and let me know if you like it or not."
            time={"01:23pm"}
          />
          <ChatBbl sender="" message="Doc" time={"01:23pm"} />
          <ChatBbl sender="" message="Audio" time={"01:23pm"} />
          <ChatBbl
            sender=""
            message="You can check out this podcast.. yeti mara nahi"
            time={"01:23pm"}
          />
          <ChatBbl
            sender="me"
            message="Sure, The Ranveer show ka hai na ye wala"
            time={"01:23pm"}
          />
          <ChatBbl
            sender="me"
            message="Bhai wo bada hi jhuta hai ajib ajib baatien bolta hai, sirf alien, yeti wagera bekar bhai bekar"
            time={"01:23pm"}
          />
        </ScrollView>

        <View className="flex flex-row items-center justify-around h-[70px]">
          <View className="input-box relative flex -top-2 ml-3 w-[80%]">
            <TouchableOpacity className="absolute top-2 z-10 px-2">
              <Text className="text-2xl">😀 </Text>
            </TouchableOpacity>
            <TextInput placeholder="Type something..."  placeholderTextColor="#61656a"


              className="py-4 rounded-full px-10 bg-[#1f2429] mb-4 text-white"
              style={styles.shadowBox}
            />
            <View className="absolute bottom-6 right-3 z-10 flex flex-row">
              <TouchableOpacity onPress={handleCameraIconPress}>
                <Text className="text-2xl px-2">📸</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-2xl px-2">📄</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity className="voice h-10 w-10 relative top-0">
            <Image
              source={require("../../assets/mic-icon.png")}
              className="w-7 h-7 bottom-3"
            ></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TextingScreen;
