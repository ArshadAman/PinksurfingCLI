
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
import Modal from 'react-native-modal';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

export default function Preferences({ navigation }) {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then((authToken) => {
        axios.get('http://mobileapi.pinksurfing.com/settings/listCurrencies', {
          headers: {
            Authorization: 'Bearer ' + authToken,
          },
        })
          .then((response) => {
            const currencyData = response.data.currencies;
            setCurrencies(currencyData);
          })
          .catch((error) => {
            console.error("Error fetching currency data:", error);
          });
      })
      .catch((error) => {
        console.error("Error retrieving auth token from AsyncStorage:", error);
      });
  }, []);

  const handleSave = () => {
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 54,
      }}
    >
      <ImageBackground
        source={require("../../assets/bg.webp")}
        style={{ flex: 1 }}
      >
        <View className="w-full">
          <View className="flex flex-row items-center w-full justify-between px-3">
            <Image
              source={require("../../assets/back-arrow.png")}
              className="w-5 h-6 ml-10 mt-3"
            ></Image>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginLeft: 38 }}>Preferences</Text>
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
              <Text style={styles.inputLabel}>Local Currency</Text>
              <RNPickerSelect
                onValueChange={(value) => setSelectedCurrency(value)}
                items={currencies.map(currency => ({ label: currency.name, value: currency.value }))}
                value={selectedCurrency}
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Time Zone</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                value=""
                onChangeText=""
              />
            </View>
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
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
    width: '85%',
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
    height: 45,
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
