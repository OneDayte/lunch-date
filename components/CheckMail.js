import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import envelope from "../assets/icons/envelope.png"

export default function CheckMail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.component1}>
        <Image source={envelope} />
        <Text>{"\n"}</Text>

        <Text style={styles.checkText}>Check your mail {"\n"}</Text>
        <Text style={styles.grayText}>
          We have sent password recover instructions to your email.
        </Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.openEmailText}>Open email app</Text>
          </TouchableOpacity>
        </View>
        <Text>{"\n"}</Text>
        <Text
          style={styles.greenText}
          onPress={() => navigation.navigate("Create New Pw")}
        >
          Skip, I'll confirm later
        </Text>
      </View>
      <View style={styles.component2}>
        <Text style={styles.grayText}>
          Didn't receive the email? Check your spam filter or try another email
          address.
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
    paddingTop: "20%",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "space-between",
  },
  component1: {
    alignItems: "center",
    width: "100%",
  },
  component2: {
    paddingBottom: "40%",
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
  },
  openEmailText: {
    color: "#fff",
    fontWeight: "bold",
  },
  greenText: {
    color: "#9BD09E",
  },
  checkText: {
    color: "#9BD09E",
    fontWeight: "bold",
  },
  grayText: {
    color: "#8C8C8C",
    textAlign: "center",
  },
})
