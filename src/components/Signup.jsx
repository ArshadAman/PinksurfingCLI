import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import axios from 'axios';

export default function Recoverpass({ navigation }) {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = () => {
    // Make an API request to initiate the password recovery process
    axios
      .post('http://mobileapi.pinksurfing.com/users/forgetPassword', {
        source: email,
      })
      .then((response) => {
        // Handle the response as needed
        if (response.data && response.data.success) {
          // Password recovery initiated successfully, navigate to a confirmation screen
          navigation.navigate('RecoverPasswordConfirmation'); // Replace with the name of your confirmation screen
        } else {
          console.error('Password recovery request failed.');
        }
      })
      .catch((error) => {
        console.error('Error during password recovery:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Navigate back when the back button is pressed
          style={styles.backButton}
        >
          <FontAwesomeIcon name="angle-left" size={32} color="#7D3BF6" style={{ marginTop: 20 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot your</Text>
        <Text style={styles.subtitle}>Password?</Text>
      </View>
      <TextInput
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleRecoverPassword}
        disabled={!email} // Disable the button if email is empty
        style={styles.button}
      >
        <Text style={styles.buttonText}>Proceed</Text>
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
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 32,
    paddingBottom: 12,
    fontWeight: 'bold',
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
  button: {
    backgroundColor: '#7D3BF6',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10, // Rounded corners for the button
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
