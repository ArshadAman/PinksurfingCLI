import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Menu from "./subcomponents/Menu";

export default function Shopnow({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.webViewContainer}>
        <WebView
          source={{ uri: "https://pinksurfing-frontend.vercel.app" }} // Replace with your website URL
          style={styles.webView}
        />
      </View>

      {/* Menu bar */}
      {/* <Menu /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111018",
    alignItems: "center",
    marginTop: 50,
  },
  webViewContainer: {
    flex: 1,
    width: "100%",
  },
  webView: {
    flex: 1,
  },
});
