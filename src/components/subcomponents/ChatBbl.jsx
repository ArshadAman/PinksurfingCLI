import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ChatBbl = ({ sender, message, time }) => {
  const flexClass = `flex flex-row ${
    sender === "me" ? "justify-end" : "justify-start"
  }`;


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

  // Calculate the width based on the length of the message
  const messageLength = message.length;
  const minWidth = 100; // Set a minimum width
  const maxWidth = 300; // Set a maximum width
  const dynamicWidth = Math.min(
    maxWidth,
    Math.max(minWidth, messageLength * 10)
  ); // Adjust the factor as needed

  const bubbleColor = `${sender === "me" ? "rgba(192, 192, 192, 0.25)" : "#0f0e12"}`;

  const bubbleStyle = {
    width: dynamicWidth+10,
    backgroundColor: bubbleColor,
  };

  return (
    <View className={`${flexClass} my-2`}>
      <View
        className={`bubble flex flex-row px-2 py-2 rounded-md`}
        style={[bubbleStyle, sender !== "me" ? styles.shadowBox : null]}
      >
        <View className="flex w-full space-y-1">
          <Text className="text-white break-words">{message}
          </Text>
          <Text className="text-[12px] color-white">{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatBbl;
