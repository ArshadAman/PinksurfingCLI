import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111018" }}>
      <StatusBar backgroundColor="#111018" barStyle="light-content" />

      {/* Header */}
      <Image
        source={require("../../assets/header.png")} // Replace with your header image path
        style={{ width: "100%", height: 80, resizeMode: "cover" }}
      />

      {/* Chat Messages */}
      <ScrollView style={{ flex: 1, backgroundColor: "#f0f0f0", padding: 12 }}>
        {/* Render chat messages */}
      </ScrollView>

      {/* Message Input */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TouchableOpacity
          style={{ padding: 6, backgroundColor: "#f0f0f0", borderRadius: 24 }}
        >
          <Image
            source={require("../../assets/cameraicon.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 24,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#ccc",
            marginLeft: 12,
          }}
        />
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              padding: 6,
              backgroundColor: "#f0f0f0",
              borderRadius: 24,
              marginRight: 8,
            }}
          >
            <Image
              source={require("../../assets/cameraicon.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 6, backgroundColor: "#f0f0f0", borderRadius: 24 }}
          >
            <Image
              source={require("../../assets/cameraicon.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 12, backgroundColor: "#075e54", borderRadius: 24 }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
