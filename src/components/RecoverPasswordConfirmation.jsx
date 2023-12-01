import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// Import FontAwesome for the back button
import axios from 'axios';

export default function RecoverPasswordConfirmation({ navigation }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUpdatePassword = () => {
    // Check if new and confirm passwords match
    if (newPassword !== confirmPassword) {
      console.error('New password and confirm password do not match.');
      return;
    }

    // Make an API request to update the password
    axios
      .post('http://mobileapi.pinksurfing.com/users/forgetPassword_reset', {
        otp: '270297',
        newPassword,
        source: 'developers111@yopmail.com',
      })
      .then((response) => {
        // Handle the response as needed
        console.log('Password update API response:', response.data);

        if (response.data && response.data.success) {
          // Password updated successfully, navigate to a success screen or display a success message
          navigation.navigate('PasswordUpdateSuccess'); // Replace with the name of your success screen
        } else {
          console.error('Password update request failed:', response.data?.message);
          // Display an error message to the user indicating the reason for failure
        }
      })
      .catch((error) => {
        console.error('Error during password update:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover Password</Text>
      <TextInput
        placeholder="Old Password"
        onChangeText={setOldPassword}
        value={oldPassword}
        style={styles.input}
        secureTextEntry={!showPassword}
      />
      <TextInput
        placeholder="New Password"
        onChangeText={setNewPassword}
        value={newPassword}
        style={styles.input}
        secureTextEntry={!showPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        style={styles.input}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.eyeButton}
      >
        {/* <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={24} color="#7D3BF6" /> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleUpdatePassword}
        disabled={!oldPassword || !newPassword || !confirmPassword}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#7D3BF6',
    borderWidth: 2,
    borderRadius: 10, // Rounded corners for the input
    padding: 10,
    marginBottom: 20,
  },
  eyeButton: {
    position: 'absolute',
    top: 150, // Adjust the position as needed
    right: 30, // Adjust the position as needed
  },
  button: {
    backgroundColor: '#7D3BF6',
    width: '80%', // Increase button width
    paddingVertical: 15, // Increase button height
    borderRadius: 10, // Rounded corners for the button
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
