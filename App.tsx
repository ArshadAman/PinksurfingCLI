import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login"; // Import your Login component
import Signup from "./src/components/Signup"; // Import your Signup component
import Otp from "./src/components/Otp"; // Import your Signup component
import Home from "./src/components/Home"; // Import your Signup component
import Chat from "./src/components/Chat"; // Import your Signup component
import Explore from "./src/components/Explore"; // Import your Signup component
import Shopnow from "./src/components/Shopnow"; // Import your Signup component
import Personal from "./src/components/Personal"; // Import your Signup component
import PayChat from "./src/components/PayChat"; // Import your Signup component
import Menu from "./src/components/subcomponents/Menu";
import Profile from "./src/components/Profile";
import Businesscard from "./src/components/Businesscard";
// import AgoraRtcEngine from 'react-native-agora';

import PayRecieve from "./src/components/PayRecieve";
import TextingScreen from "./src/components/TextingScreen";
import Recoverpass from "./src/components/Recoverpass";
import RecoverPasswordConfirmation from "./src/components/RecoverPasswordConfirmation";
import Business from "./src/components/Business";
import Settings from "./src/components/Settings";
import MyProfile from "./src/components/MyProfile";
import PersonalDetails from "./src/components/PersonalDetails";
import Changepass from "./src/components/Changepass";
import BusinessDetails from "./src/components/BusinessDetails";
import CallHistory from "./src/components/CallHistory";
import Prefrences from "./src/components/Prefrences";
import NewGroup from "./src/components/subcomponents/NewGroup";
import AddContact from "./src/components/subcomponents/AddContact";
import allcontacts from "./src/components/subcomponents/allcontacts";
// import PayMe from "./src/components/subcomponents/PayMe";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

<Stack.Screen
          name="Businesscard"
          component={Businesscard}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

{/* <Stack.Screen
          name="PayMe"
          component={PayMe}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        /> */}



<Stack.Screen
          name="allcontacts"
          component={allcontacts}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />


        <Stack.Screen
          name="Prefrences"
          component={Prefrences}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="Changepass"
          component={Changepass}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="CallHistory"
          component={CallHistory}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="BusinessDetails"
          component={BusinessDetails}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="Recoverpass"
          component={Recoverpass}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="RecoverPasswordConfirmation"
          component={RecoverPasswordConfirmation}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            headerShown: false, // Hide the header for the "Login" screen
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false, // Hide the header for the "Home" screen
          }}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false, // Hide the header for the "Chat" screen
          }}
        />

        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            headerShown: false, // Hide the header for the "Explore" screen
          }}
        />

        <Stack.Screen
          name="Shopnow"
          component={Shopnow}
          options={{
            headerShown: false, // Hide the header for the "Shopnow" screen
          }}
        />

        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{
            headerShown: false, // Hide the header for the "Personal" screen
          }}
        />

        <Stack.Screen
          name="PayChat"
          component={PayChat}
          options={{
            headerShown: false, // Hide the header for the "PayChat" screen
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false, // Hide the header for the "Profile" screen
          }}
        />

        <Stack.Screen
          name="PayRecieve"
          component={PayRecieve}
          options={{
            headerShown: false, // Hide the header for the "PayRecieve" screen
          }}
        />

        <Stack.Screen
          name="Business"
          component={Business}
          options={{
            headerShown: false, // Hide the header for the "PayRecieve" screen
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false, // Hide the header for the "PayRecieve" screen
          }}
        />

        <Stack.Screen
          name="TextingScreen"
          component={TextingScreen}
          options={{
            headerShown: false, // Hide the header for the "TextingScreen" screen
          }}
        />
        <Stack.Screen
          name="NewGroup"
          component={NewGroup}
          options={{
            headerShown: false, // Hide the header for the "TextingScreen" screen
          }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={{
            headerShown: false, // Hide the header for the "TextingScreen" screen
          }}
        />
      </Stack.Navigator>
      <Menu />
    </NavigationContainer>
  );
}