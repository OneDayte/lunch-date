import React, { useState } from "react"
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import ResetPw from "./components/ResetPw"
import CheckMail from "./components/CheckMail"
import CreateNewPw from "./components/CreateNewPw"
import Interests from "./components/Interests"
import Profile from "./components/Profile"
import AddImages from "./components/AddImages"
import backArrow from "./assets/icons/back-arrow3x.png"
import { ValuesContext } from "./components/context/context"

const Stack = createStackNavigator()

function Header(props) {
  if (props.page === "Reset Pw" || props.page === "Create New Pw") {
    return (
      <TouchableOpacity style={styles.header}>
        <Image source={backArrow} style={styles.backArrow} />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={styles.headerText}>Back</Text>
      </TouchableOpacity>
    )
  } else if (props.page === "Profile" || props.page === "Add Imgs") {
    return (
      <TouchableOpacity style={styles.header}>
        <Image source={backArrow} style={styles.backArrow} />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity style={styles.header}>
        <Image source={backArrow} style={styles.backArrow} />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={styles.headerText}>Sign In</Text>
      </TouchableOpacity>
    )
  }
}

export default function App() {
  const [userValues, setUserValues] = useState()

  const valuesFunction = (props) => {
    setUserValues((prevState) => ({
      ...prevState,
      ...props,
    }))
  }

  return (
    <ValuesContext.Provider
      value={{ changeValues: valuesFunction, submitValues: userValues }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Sign In"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={{
              headerTitle: false,
              headerBackImage: () => <Header />,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Reset Pw"
            component={ResetPw}
            options={{
              headerTitle: false,
              headerBackImage: () => <Header page={"Reset Pw"} />,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Check Mail"
            component={CheckMail}
            options={{ headerTitle: false, headerLeft: false }}
          />
          <Stack.Screen
            name="Create New Pw"
            component={CreateNewPw}
            options={{
              headerTitle: false,
              headerBackImage: () => <Header page={"Create New Pw"} />,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Interests"
            component={Interests}
            options={{ headerTitle: false, headerLeft: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitleStyle: { fontWeight: "bold", color: "#9BD09E" },
              headerBackImage: () => <Header page={"Profile"} />,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Add Images"
            component={AddImages}
            options={{
              headerTitle: false,
              headerBackImage: () => <Header page={"Profile"} />,
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ValuesContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#9BD09E",
  },
  backArrow: {
    height: "100%",
    width: 30,
    marginLeft: 20,
  },
})
