import React, { useState, useRef } from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import axios from 'axios'; // Import Axios for making an OTP verification request
import { useRoute } from '@react-navigation/native';

export default function Otp({ navigation, route }) {
  const [otpFields, setOtpFields] = useState(["", "", "", "", "", ""]); 

  const { email } = route.params;

  const otpInputRefs = Array(6).fill().map((_, index) => useRef());

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtpFields = [...otpFields];
      newOtpFields[index] = value;
      setOtpFields(newOtpFields);
  
      if (value === "" && index > 0) {
        otpInputRefs[index - 1].current.focus();
      } else if (value !== "" && index < otpInputRefs.length - 1) {
        otpInputRefs[index + 1].current.focus();
      }
    }
  };
  
  const verifyOtp = () => {
    const otp = otpFields.join(""); 

    const { email } = route.params;

    axios.post('http://mobileapi.pinksurfing.com/users/confirm', {
      email,
      otp,
    })
    .then((response) => {
      // Handle the response, you can navigate to the next screen if OTP is valid
      if (response.data && response.data.isValid) {
        navigation.navigate('Welcome'); // Replace 'Welcome' with the name of the next screen
      } else {
        console.error('Invalid OTP');
      }
    })
    .catch((error) => {
      console.error('Error verifying OTP:', error.message);
    });
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
      <Image source={require("../../assets/login_image.webp")} style={{ width: "100%", height: 200 }} resizeMode="cover" />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image source={require("../../assets/img_logo.png")} style={{ width: 100, height: 100 }} resizeMode="contain" />
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Enter OTP</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%", marginTop: 20 }}>
          {otpFields.map((digit, index) => (
            <TextInput
              key={index}
              ref={otpInputRefs[index]} 
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              style={{
                width: 50,
                height: 50,
                fontSize: 20,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 10,
                textAlign: "center",
                backgroundColor: "#FFF",
              }}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        <Text style={{ marginTop: 10, fontSize: 16 }}>Verify your email</Text>
        <Text style={{ marginTop: 5, fontSize: 16 }}>We have sent an email to your registered email address</Text>

        <TouchableOpacity
  style={{
    marginTop: 30,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  }}
  onPress={verifyOtp} // Call the verifyOtp function when the submit button is pressed
>
  <Text style={{ color: "#FFF", fontSize: 18 }}>SUBMIT</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

