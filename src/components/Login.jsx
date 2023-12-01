import React, { useState, useRef, useEffect } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // Check if the user is already logged in when the component mounts
  useEffect(() => {
    // You can use a function to check your authentication status here
    // For simplicity, I'm using a placeholder condition
    const checkLoginStatus = () => {
      // Simulate checking the user's login status
      const userIsLoggedIn = true; // Replace with your actual authentication logic

      // If the user is already logged in, navigate to the Home screen
      if (userIsLoggedIn) {
        navigation.navigate('Home');
        setIsLoggedIn(true); // Update the state
      }
    };

    checkLoginStatus();
  }, []); // Run this effect only once when the component mounts

  const handleLogin = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  
    if (!emailPattern.test(email)) {
      console.error('Invalid email address.');
      return;
    }
  
    if (!passwordPattern.test(password)) {
      console.error('Password should contain at least one uppercase letter and one special symbol.');
      return;
    }
  
    axios
      .post('http://mobileapi.pinksurfing.com/users/login', {
        email,
        password,
        isLoggedIn: true,
      })
      .then(async (response) => {
        if (response.data.status === 'success' && response.data.token) {
          // Store the token in AsyncStorage
          await AsyncStorage.setItem('token', response.data.token);
  
          // Navigate to the Home screen
          navigation.navigate('Home');
        } else {
          console.error('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error.message);
      });
  };
    return (
    <View className="flex flex-1 justify-center items-center bg-[#16122d] relative top-[54px]">
      <Image
        source={require('../../assets/login.webp')}
        className="w-full h-1/2 object-cover"
      />

      {/* Centered logo with margin from top */}
      <View className="absolute w-full flex items-center justify-center mt-3 top-0">
        <Image
          source={require('../../assets/img_logo.png')}
        />
      </View>

      {/* Positioned plane_2 image above plane_1 */}
      <View className="w-full text-center relative">
        <Image
          source={require('../../assets/plane_1.webp')}
          className="w-full h-1/2 object-cover absolute"
        />
        <Image
          source={require('../../assets/plane_2.webp')}
          className="w-full h-3/5 object-cover top-20"
        />

        {/* Text input fields */}
        <View className="absolute w-full flex flex-col space-y-3 items-center mt-20 top-28 left-2">
          <View className="w-3/4 flex justify-center items-center space-y-4">
          <TextInput
  className="w-[95%] bg-[#16122d] text-white placeholder-gray-400 px-6 py-2 rounded-md shadow-sm shadow-gray-300 placeholder:text-lg left-7"
  placeholder="Email"
  placeholderTextColor="#999999"
  keyboardType="email-address"
  onChangeText={setEmail}
  value={email}
  onFocus={() => emailInputRef.current.focus()} 
  ref={emailInputRef}
/>
<TextInput
  className="w-[95%] bg-[#16122d] text-white placeholder-gray-400 px-6 py-2 rounded-md shadow-sm shadow-gray-300 placeholder:text-lg left-7"
  placeholder="Password"
  placeholderTextColor="#999999"
  secureTextEntry
  onChangeText={setPassword}
  value={password}
  onFocus={() => passwordInputRef.current.focus()} 
  ref={passwordInputRef} 
/>
          </View>
          <View className="top-3">
            <TouchableOpacity
              className={`py-2 px-10 bg-[#16122d] shadow-sm shadow-gray-300 rounded-lg left-5 ${
                !email || !password ? 'opacity-50' : ''
              }`}
              onPress={handleLogin}
              disabled={!email || !password}
            >
              <Text className="text-white text-lg">Sign In</Text>
            </TouchableOpacity>
            <Text   onPress={() => navigation.navigate('Recoverpass')}
 className="text-white my-3 text-center left-5">Recover Password
            
            </Text>
          </View>
        </View>
      </View>

      {/* TextInputs and Button removed */}
      <View className="bottom-[140px] flex items-center justify-cente space-x-2">
        <TouchableOpacity
          className="flex items-center"
          onPress={() => navigation.navigate('Signup')}
        >
          <Text className="text-white font-bold">Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
