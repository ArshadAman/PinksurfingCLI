import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./Chat"; // Import your Chat screen component
// import PayChatScreen from "./PayChatScreen"; // Import your Pay-Chat screen component
// import ShopNowScreen from "./ShopNowScreen"; // Import your Shop Now screen component
// import ShareScreen from "./ShareScreen"; // Import your Share screen component
import ExploreScreen from "./Explore"; // Import your Explore screen component
// import ProfileScreen from "./ProfileScreen"; // Import your Profile screen component

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Chat" component={ChatScreen} />
    {/* <Tab.Screen name="Pay-Chat" component={PayChatScreen} />
    <Tab.Screen name="Shop Now" component={ShopNowScreen} />
    <Tab.Screen name="Share" component={ShareScreen} /> */}
    <Tab.Screen name="Explore" component={ExploreScreen} />
    {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
  </Tab.Navigator>
);

export default TabNavigator;
