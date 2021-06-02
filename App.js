import React from "react"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import ResetPw from "./components/ResetPw"
import CheckMail from "./components/CheckMail"
import CreateNewPw from "./components/CreateNewPw"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Reset Pw" component={ResetPw} />
        <Stack.Screen name="Check Mail" component={CheckMail} />
        <Stack.Screen name="Create New Pw" component={CreateNewPw} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
})