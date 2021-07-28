import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"
import logo from "../assets/logo/logo3x.png"
import user from "../assets/icons/feather-user3x.png"
import lock from "../assets/icons/material-lock-outline3x.png"
import greenLock from "../assets/icons/green-lock-outline3x.png"
import eye from "../assets/icons/feather-eye3x.png"
import darkUser from "../assets/icons/dark-feather-user3x.png"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"
import axios from "axios"
import * as SecureStore from "expo-secure-store"

export default function SignIn({ navigation }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [onEmailTouch, setOnEmailTouch] = useState(false)
  const [onPwTouch, setOnPwTouch] = useState(false)

  let [fontsLoaded] = useFonts({
    "custom-Font": require("../assets/fonts/SFProText-Regular.ttf"),
  })

  const onChangeUser = (text) => {
    setUsername(text)
  }

  const onChangePassword = (text) => {
    setPassword(text)
  }

  const SignIn = () => {
    if (username === "" || password === "") {
      setError(true)
      setErrorMessage("Please fill out the form!")
    }

    const signInObject = {
      auth: {
        email: username,
        password: password,
      },
    }

    const setUserToken = (token) => {
      return SecureStore.setItemAsync("secure_token", token)
    }

    const getUserToken = () => {
      return SecureStore.getItemAsync("secure_token")
    }

    axios
      .post("http://onedayte.herokuapp.com/auth/sign_in/", signInObject)
      .then((response) => {
        setUserToken(response.data.jwt)

        axios
          .get("http://onedayte.herokuapp.com/users/confirmed_user", {
            headers: {
              "Content-Type": "application/json",
              Authorization: response.data.jwt,
            },
          })
          .then((second_response) => {
            if (!second_response.data.completed_info) {
              navigation.navigate("Interests")
            } else {
              //this is where navigation should go if they have already completed their information.
              //possibly straight to their match?
            }
          })

        // getUserToken().then(a => console.log(a))
      })
      .catch((err) => {
        setError(true)
        setErrorMessage(
          "The email address and password combination does not match any account. Please try again."
        )
        console.log(err)
      })
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.midComponent}>
          <View style={styles.inputSection}>
            <Image
              source={onEmailTouch ? user : darkUser}
              style={styles.userIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#8C8C8C"
              textAlign="left"
              spellCheck={false}
              value={username}
              onChangeText={onChangeUser}
              autoCapitalize="none"
              onTouchStart={() => setOnEmailTouch(true)}
              onBlur={() => setOnEmailTouch(false)}
            />
          </View>
          <View style={styles.inputSection}>
            <Image
              source={onPwTouch ? greenLock : lock}
              style={styles.lockIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#8C8C8C"
              textAlign="left"
              secureTextEntry
              value={password}
              onChangeText={onChangePassword}
              onTouchStart={() => setOnPwTouch(true)}
              onBlur={() => setOnPwTouch(false)}
            />
            <Image source={eye} style={styles.eye} />
          </View>
          <TouchableOpacity style={styles.button} onPress={SignIn}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
          {error ? (
            <Text
              style={{
                textAlign: "center",
                color: "#D35365",
                marginBottom: "3%",
              }}
            >
              {errorMessage}
            </Text>
          ) : null}
          <Text style={{ textAlign: "center" }}>
            Forgot your password?{" "}
            <Text
              style={styles.otherText}
              onPress={() => navigation.navigate("Reset Pw")}
            >
              Tap to reset
            </Text>
          </Text>
        </View>

        <Text>
          Don't have an account?{" "}
          <Text
            style={styles.boldText}
            onPress={() => navigation.navigate("Sign Up")}
          >
            Sign Up
          </Text>
        </Text>

        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  logo: {
    height: 125,
    width: 350,
  },
  midComponent: {
    bottom: "7%",
  },
  textInput: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 42,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    //need responsive
    paddingLeft: 45,
  },
  button: {
    backgroundColor: "#9BD09E",
    height: 54,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  otherText: {
    color: "#9BD09E",
  },
  boldText: {
    color: "#9BD09E",
    fontWeight: "bold",
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "3%",
  },
  userIcon: {
    zIndex: 1,
    position: "absolute",
    height: "73%",
    width: "7.5%",
    //need this responsive
    marginLeft: 10,
  },
  lockIcon: {
    zIndex: 1,
    position: "absolute",
    height: "73%",
    width: "6.1%",
    //need this responsive
    marginLeft: 12,
  },
  eye: {
    zIndex: 1,
    position: "absolute",
    height: "68%",
    width: "10%",
    //need this responsive
    marginLeft: 325,
  },
})
