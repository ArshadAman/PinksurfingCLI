import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <View class="top area relative">
        <Image
          source={require("../../../assets/header/header.png")}
          className="h-14 absolute"
        ></Image>
        <Image
          source={require("../../../assets/header/ps.png")}
          className="w-13 h-4 mt-6"
        ></Image>
      </View>
    </View>
  );
};

export default Header;
