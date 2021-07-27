import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"
import email from "../assets/icons/green-mail3x.png"

export default function ResetPw({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.resetSec}>
        <Text style={styles.resetText}>Reset password {"\n"}</Text>
        <Text style={styles.emailText0}>
          Enter the email associated with this account and we will send an email
          with instructions to reset your account
        </Text>
        <Text style={styles.emailText1}>Email Address {"\n"}</Text>
      </View>
      <View style={styles.userSection}>
        <Image source={email} style={styles.icons} />
        <TextInput
          style={styles.textInput}
          placeholder="Email*"
          placeholderTextColor="#000000"
          textAlign="left"
          spellCheck={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Check Mail")}
        >
          <Text style={styles.sendText}>Send Instructions</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "10%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  resetSec: {
    textAlign: "left",
  },
  emailText0: {
    color: "#8C8C8C",
  },
  emailText1: {
    color: "#9BD09E",
    fontWeight: "bold",
    paddingTop: "15%",
  },
  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resetText: {
    color: "#9BD09E",
    fontWeight: "bold",
    fontSize: 17,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 42,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: 45,
  },
  icons: {
    zIndex: 1,
    position: "absolute",
    height: "75%",
    width: "7%",
    marginLeft: 10,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#9BD09E",
    height: 54,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
})
