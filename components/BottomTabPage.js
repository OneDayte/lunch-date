import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import message from "../assets/icons/message.png"
import heartbeat from "../assets/icons/heartbeat.png"
import profile from "../assets/icons/profile.png"
import Match from "./Match"
import Messages from "./Messages"
import FullProfilePreview from "./FullProfilePreview"

export default function BottomTabPage() {
  const Tab = createBottomTabNavigator()
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Profile Preview"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Messages") {
              return <Image source={message} />
            } else if (route.name === "Match") {
              return <Image source={heartbeat} />
            } else if (route.name === "Profile Preview") {
              return <Image source={profile} />
            }
          },
        })}
      >
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Match" component={Match} />
        <Tab.Screen name="Profile Preview" component={FullProfilePreview} />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
})
