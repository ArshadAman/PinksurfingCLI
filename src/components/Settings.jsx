import React, { useState, useEffect } from 'react';
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
import Modal from 'react-native-modal'; // Import react-native-modal
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker



export default function Settings({ navigation }) {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModalVisible(!isLogoutModalVisible);
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countrycode: "",
    phone: "",
    position: "",
    industry: "",
    status: "",
    businessProfile: {
      logo: "",
    },
  });


  const MyProfile = () => {
    // Navigate to the new page here
    navigation.navigate('MyProfile'); // Replace 'NewPage' with the actual name of your new page in your navigation stack
  };

  const PersonalDetails = () => {
    // Navigate to the new page here
    navigation.navigate('PersonalDetails'); // Replace 'NewPage' with the actual name of your new page in your navigation stack
  };

  const Prefrences = () => {
    // Navigate to the new page here
    navigation.navigate('Prefrences'); // Replace 'NewPage' with the actual name of your new page in your navigation stack
  };


  const Changepass = () => {
    // Navigate to the new page here
    navigation.navigate('Changepass'); // Replace 'NewPage' with the actual name of your new page in your navigation stack
  };

  const BusinessDetails = () => {
    // Navigate to the new page here
    navigation.navigate('BusinessDetails'); // Replace 'NewPage' with the actual name of your new page in your navigation stack
  };

  useEffect(() => {
    // Retrieve the auth token from AsyncStorage (or your preferred storage mechanism)
    AsyncStorage.getItem("token")
      .then((authToken) => {
        // Make an API call to fetch user data using the retrieved auth token
        axios
          .get("http://mobileapi.pinksurfing.com/detail/user", {
            headers: {
              Authorization: "Bearer " + authToken,
            },
          })
          .then((response) => {
            const userData = response.data.userInfo;
            setUserData(userData);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      })
      .catch((error) => {
        console.error("Error retrieving auth token from AsyncStorage:", error);
      });
  }, []);

  const handleSave = () => {
    // Implement the logic to save user profile here
  };


  const handleLogout = async () => {
    try {
      // Retrieve the token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
  
      if (token) {
        // Make the API call to log the user out
        const response = await fetch("http://mobileapi.pinksurfing.com/settings/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // Use the retrieved token
            "Content-Type": "application/json",
          },
        });
  
        if (response.status === 200) {
          // Successful logout
          toggleLogoutModal();
  
          // Redirect to the login screen
          navigation.navigate("Login");
        } else {
          // Handle errors, e.g., display an error message to the user
          console.error("Logout failed:", response.status);
        }
      } else {
        // Handle the case where the token is not available
        console.error("Token not found in AsyncStorage.");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: "#111018",
        alignItems: "center",
        paddingTop: 54,
      }}
    >
      <ImageBackground
        source={require("../../assets/bg.webp")} // Replace with your background image path
        style={{ flex: 1 }}
      >

        <View className="w-full">
        <View className="flex flex-row items-center w-full justify-between px-3">
          <Image
            source={require("../../assets/header/questionmakr.png")}
            className="w-10 h-10 ml-3"
          ></Image>
          <Image 
          source={require("../../assets/header/ps.png")}
          className="w-12.5 h-4 ml-6"
          ></Image>
          <View className="flex flex-row">
            {/* <Image
              source={require("../../assets/header/questionmakr.png")}
              className="w-10 h-10"
            ></Image> */}
            {/* <TouchableOpacity onPress={Settings}> */}
            <Image
              source={require("../../assets/header/img_settings.png")}
              className="w-5 h-5"
            ></Image>
            {/* </TouchableOpacity> */}
          </View>
        </View>
        <View className="w-full h-[0.5px] bg-gray-200"></View>
      </View>
        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}
          className="space-y-6"
        >

<View className="profile-image w-32 h-32 rounded-full border border-white flex items-center justify-center my-5 relative">
  {userData.businessProfile && userData.businessProfile.logo ? (
    <Image
      source={{ uri: userData.businessProfile.logo }}
      className="w-28 h-28 rounded-full"
    />
  ) : (
    <Image
      source={require("../../assets/login.webp")}
      className="w-28 h-28 rounded-full"
    />
  )}
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 16,
            padding: 4,
          }}
          onPress={handleCameraIconPress} // Open the camera or gallery dialog
        >
          <Image
            source={require("../../assets/cameraicon.png")}
            style={{
              width: 29,
              height: 24,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
</View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity onPress={MyProfile} className="bg-[#1b1b27] px-6 py-3 rounded-md w-[90vw]">
              <Text className="text-white font-bold">My Profile</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity onPress={PersonalDetails} className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Personal Details
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity onPress={BusinessDetails} className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Business Details
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity onPress={Changepass} className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity onPress={Prefrences} className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Preferences
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">Notification Preference</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">Referral</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Change Language
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row  space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Identity Verification
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                2 Steps Verification
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Bank Account
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row space-x-5">
            <TouchableOpacity className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]">
              <Text className="text-white font-bold">
                Support
              </Text>
            </TouchableOpacity>
          </View>
            <View className="flex flex-row space-x-5">
            <TouchableOpacity
              onPress={toggleLogoutModal} // Show the logout confirmation dialog
              className="bg-[#1b1b27] px-6 py-3 rounded-xl w-[90vw]"
            >
              <Text className="text-white font-bold">Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>

      <Modal isVisible={isLogoutModalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ // Adjust the height and width here
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}>
            <Text>Are you sure you want to logout?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  backgroundColor: 'blue',
                  paddingVertical: 10,
                  paddingHorizontal: 25,
                  borderRadius: 15,
                  marginRight: 20,
                }}
              >
                <Text style={{ color: 'white' }}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleLogoutModal}
                style={{
                  backgroundColor: 'red',
                  paddingVertical: 10,
                  paddingHorizontal: 25,
                  borderRadius: 15,
                }}
              >
                <Text style={{ color: 'white' }}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      {/* Menu bar */}
      {/* <Menu /> */}
    </SafeAreaView>
  );
}
