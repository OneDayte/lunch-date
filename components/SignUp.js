import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"
import logo from "../assets/logo/logo.png"
import user from "../assets/icons/feather-user.png"
import darkUser from "../assets/icons/dark-feather-user.png"
import lock from "../assets/icons/material-lock-outline.png"
import eye from "../assets/icons/feather-eye.png"
import email from "../assets/icons/mail_outline.png"

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
        <View style={styles.inputSection}>
          <Image source={user} style={styles.icons} />
          <TextInput
            style={styles.textInput}
            placeholder="User Name"
            placeholderTextColor="#9BD09E"
            textAlign="left"
            spellCheck={false}
          />
        </View>
        <View style={styles.inputSection}>
          <Image source={darkUser} style={styles.icons} />
          <TextInput
            style={styles.textInput}
            placeholder="Full Name*"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            spellCheck={false}
          />
        </View>
        <View style={styles.inputSection}>
          <Image source={email} style={styles.icons} />
          <TextInput
            style={styles.textInput}
            placeholder="Email*"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            spellCheck={false}
          />
        </View>
        <View style={styles.inputSection}>
          <Image source={lock} style={styles.icons} />
          <TextInput
            style={styles.textInput}
            placeholder="Password*"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            secureTextEntry
          />
          <Image source={eye} style={styles.eye} />
        </View>
        <View style={styles.inputSection}>
          <Image source={lock} style={styles.icons} />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            secureTextEntry
          />
          <Image source={eye} style={styles.eye} />
        </View>
      </View>
      <View style={styles.bottomComponent}>
        <Text style={styles.textCenter}>
          By clicking Sign Up you agree to the following
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("working")}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.textCenter}>
          Forgot your password?{" "}
          <Text
            style={styles.otherText}
            onPress={() => navigation.navigate("Reset Pw")}
          >
            Tap to reset
          </Text>
        </Text>
      </View>
    </View>
  )
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
    marginTop: "3%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
  },
  otherText: {
    color: "#9BD09E",
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "3%",
  },
  bottomComponent: {
    width: "100%",
  },
  icons: {
    zIndex: 1,
    position: "absolute",
    //need this responsive
    marginLeft: 10,
  },
  eye: {
    zIndex: 1,
    position: "absolute",
    //need this responsive
    marginLeft: 325,
  },
})
