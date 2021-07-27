import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native"
import eye from "../assets/icons/feather-eye3x.png"

export default function CreateNewPw({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greenText}>Create new password {"\n"}</Text>
      <Text style={styles.grayText}>
        Your new passowrd must be different from previous used password
        {"\n"}
        {"\n"}
      </Text>

      <Text style={styles.pwText}>Password</Text>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholder=""
          textAlign="left"
          secureTextEntry
        />
        <Image source={eye} style={styles.eye} />
      </View>

      <Text style={styles.pwText}>Confirm password</Text>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholder=""
          textAlign="left"
          secureTextEntry
        />
        <Image source={eye} style={styles.eye} />
      </View>
      <Text style={styles.grayText}>Both passwords must match.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Interests")}
        >
          <Text style={styles.resetText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "10%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "3%",
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
    paddingLeft: 15,
  },
  eye: {
    zIndex: 1,
    position: "absolute",
    height: "67%",
    width: "10%",
    //need this responsive
    marginLeft: 325,
  },
  buttonContainer: {
    width: "100%",
  },
  resetText: {
    color: "#fff",
    fontWeight: "bold",
  },
  greenText: {
    color: "#9BD09E",
    fontWeight: "bold",
    fontSize: 17,
  },
  grayText: {
    color: "#8C8C8C",
  },
  pwText: {
    color: "#8C8C8C",
    fontWeight: "bold",
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
