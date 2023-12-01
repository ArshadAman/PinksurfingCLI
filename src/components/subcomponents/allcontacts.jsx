import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
 
export default function AllContacts({ route, navigation }) {
  const { groupName } = route.params;
  const [contacts, setContacts] = useState([]);
  const [contactSelections, setContactSelections] = useState([]);
 
  const handleCreateGroup = async () => {
    // Define the API endpoint to create the group
    const apiUrl = "http://mobileapi.pinksurfing.com/chat/group/createGroup";
  
    try {
      // Get the access token from AsyncStorage
      const token = await AsyncStorage.getItem("token");
      console.log(contactSelections);
      console.log(contacts);
  
      // Prepare the data to send to the server
      const data = {
        group_name: groupName,
        chatType: "business", // Modify as needed
        group_members: contacts
          .filter((_, index) => contactSelections[index])
          .map(contact => contact._id)
          .join(','), // Join array elements into a string
      };
  
      // Log the data before sending the request
      console.log("Data to be sent:", data);
  
      // Make the API request using axios
      const response = await axios.post(apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
  
      // Handle the API response as needed
      console.log("Group created:", response.data);
  
      // After creating the group, navigate to another screen or perform additional actions
      // For example:
      // TO DO AFTER:
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error:", error);
      // Log the error response if available
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
    }
  };
   
  const toggleMemberSelection = (index) => {
    const updatedSelections = [...contactSelections];
    updatedSelections[index] = !updatedSelections[index];
    setContactSelections(updatedSelections);
  };
 
  const listContacts = async () => {
    try {
      // Get the access token from AsyncStorage
      const token = await AsyncStorage.getItem("token");
 
      // Define the API endpoint
      const apiUrl = "http://mobileapi.pinksurfing.com/chat/users/contactList?count=100&page=1&type=business";
 
      // Make the API request using axios
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
 
      const responseData = response.data.data;
 
      // Initialize contactSelections as an array of false values, one for each contact
      setContactSelections(new Array(responseData.length).fill(false));
      // Update the state with the contact data
      setContacts(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
 
  useEffect(() => {
    listContacts();
  }, []);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Back arrow</Text>
        <Text style={styles.headerText}>PINK SURFING</Text>
      </View>
 
      {/* Search bar */}
      <View style={styles.searchBar}>
        {/* Add a search input here */}
      </View>
 
      <ScrollView style={styles.contactList}>
        {contacts.map((contact, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactItem}
            onPress={() => toggleMemberSelection(index)}
          >
            <View style={styles.contactInfo}>
              <Image
                source={{ uri: contact.image || 'https://example.com/default-image.jpg' }}
                style={styles.contactImage}
              />
              <View>
                <Text style={styles.contactName}>{`${contact.firstName} ${contact.lastName}`}</Text>
                <Text style={styles.contactEmail}>{contact.email}</Text>
              </View>
            </View>
            {contactSelections[index] && (
              <Text style={styles.selectedIndicator}>Selected</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
 
      <TouchableOpacity
        style={styles.createGroupButton}
        onPress={handleCreateGroup}
      >
        <Text style={styles.buttonText}>Create Group</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111018',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  searchBar: {
    margin: 5,
    // Define your styles for the search input
  },
  contactList: {
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    // Define your styles for each contact item
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    // Define your styles for the contact info
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    // Define your styles for the contact image
  },
  contactName: {
    color: 'white',
    fontSize: 18,
    // Define your styles for the contact name
  },
  contactEmail: {
    color: 'white',
    // Define your styles for the contact email
  },
  selectedIndicator: {
    color: 'white',
    // Define your styles for the selected indicator
  },
  createGroupButton: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 25,
    // Define your styles for the create group button
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
