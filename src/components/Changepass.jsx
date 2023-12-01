import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput
} from "react-native";
import Menu from "./subcomponents/Menu";
import Modal from 'react-native-modal'; // Import react-native-modal
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function Changepass({ navigation }) {
    // const [firstName, setFirstName] = React.useState('');
    // const [lastName, setLastName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [countryCode, setCountryCode] = React.useState('');
    // const [phoneNumber, setPhoneNumber] = React.useState('');
    // const [position, setPosition] = React.useState('');
    // const [industry, setIndustry] = React.useState('');
    // const [status, setStatus] = React.useState('');

    useEffect(() => {
        // Retrieve the auth token from AsyncStorage (or your preferred storage mechanism)
        AsyncStorage.getItem('token')
          .then((authToken) => {
            // Make an API call to fetch user data using the retrieved auth token
            axios.get('http://mobileapi.pinksurfing.com/detail/user', {
              headers: {
                Authorization: 'Bearer ' + authToken,
              },
            })
              .then((response) => {
                // const userData = response.data.userInfo;
                // setFirstName(userData.firstName);
                // setLastName(userData.lastName);
                // setEmail(userData.email);
                // setCountryCode(userData.countrycode);
                // setPhoneNumber(userData.phone);
                // setPosition(userData.position);
                // setIndustry(userData.industry);
                // setStatus(userData.status);
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
              source={require("../../assets/back-arrow.png")}
              className="w-5 h-6 ml-10 mt-3"
            ></Image>
<Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginLeft: 27 }}>Change Password</Text>
            <View className="flex flex-row">
              <Image
                source={require("../../assets/header/img_settings.png")}
                className="w-5 h-5"
              ></Image>
            </View>
          </View>
          
          <View className="w-full h-[0.5px] bg-gray-200"></View>

        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Old Password</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                value=""
                onChangeText=""
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>New Password</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                value=""
                onChangeText="{setLastName}"
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                value=""
                onChangeText=""
              />
            </View>
          </View>
          {/* <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Country Code</Text>
              <TextInput
                style={styles.input}
                placeholder={countryCode}
                value={countryCode}
                onChangeText={setCountryCode}
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder={phoneNumber}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Position</Text>
              <TextInput
                style={styles.input}
                placeholder={position}
                value={position}
                onChangeText={setPosition}
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Industry</Text>
              <TextInput
                style={styles.input}
                placeholder={industry}
                value={industry}
                onChangeText={setIndustry}
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Status/Mood</Text>
              <TextInput
                style={styles.input}
                placeholder={status}
                value={status}
                onChangeText={setStatus}
              />
            </View>
          </View> */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Update</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 30,
  },
  formGroup: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    width: '85%', // Adjust the width as needed
  },
  inputLabel: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    padding: 12,
    height: 45, // Adjust the height as needed
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    width: '70%',
    marginTop: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
