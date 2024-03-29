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
import darkUser from "../assets/icons/dark-feather-user3x.png"
import lock from "../assets/icons/material-lock-outline3x.png"
import greenLock from "../assets/icons/green-lock-outline3x.png"
import eye from "../assets/icons/feather-eye3x.png"
import emailIcon from "../assets/icons/mail_outline.png"
import greenEmail from "../assets/icons/green-mail3x.png"
import axios from "axios"

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [onLastNameTouch, setOnLastNameTouch] = useState(false)
  const [onFirstNameTouch, setOnFirstNameTouch] = useState(false)
  const [onEmailTouch, setOnEmailTouch] = useState(false)
  const [onPwTouch1, setOnPwTouch1] = useState(false)
  const [onPwTouch2, setOnPwTouch2] = useState(false)

  const onChangeFirstName = (text) => {
    setFirstName(text)
  }
  const onChangeLastName = (text) => {
    setLastName(text)
  }
  const onChangeEmail = (text) => {
    setEmail(text)
  }
  const onChangePassword = (text) => {
    setPassword(text)
  }
  const onChangePasswordConfirmation = (text) => {
    setPasswordConfirmation(text)
  }

  const createAccount = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      passwordConfirmation === ""
    ) {
      setError(true)
      setErrorMsg("Please fill out the form!")
    } else {
      alert("function called!")

      console.log(firstName, lastName, email, password, passwordConfirmation)

      const userInfo = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }

      axios
        .post("http://onedayte.herokuapp.com/users", userInfo)
        .then(navigation.navigate("Sign In"))
        .catch((err) => console.log("Bananas: ", err, userInfo))
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <View style={styles.inputSection}>
          <Image
            source={onLastNameTouch ? user : darkUser}
            style={styles.userIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name*"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            spellCheck={false}
            value={lastName}
            onChangeText={(text) => onChangeLastName(text)}
            onTouchStart={() => setOnLastNameTouch(true)}
            onBlur={() => setOnLastNameTouch(false)}
          />
        </View>
        <View style={styles.inputSection}>
          <Image
            source={onFirstNameTouch ? user : darkUser}
            style={styles.userIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="First Name*"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            spellCheck={false}
            value={firstName}
            onChangeText={(text) => onChangeFirstName(text)}
            onTouchStart={() => setOnFirstNameTouch(true)}
            onBlur={() => setOnFirstNameTouch(false)}
          />
        </View>
        <View style={styles.inputSection}>
          <Image
            source={onEmailTouch ? greenEmail : emailIcon}
            style={styles.userIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email*"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            spellCheck={false}
            value={email}
            onChangeText={(text) => onChangeEmail(text)}
            onTouchStart={() => setOnEmailTouch(true)}
            onBlur={() => setOnEmailTouch(false)}
          />
        </View>
        <View style={styles.inputSection}>
          <Image
            source={onPwTouch1 ? greenLock : lock}
            style={styles.lockIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password*"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            secureTextEntry
            value={password}
            onChangeText={(text) => onChangePassword(text)}
            onTouchStart={() => setOnPwTouch1(true)}
            onBlur={() => setOnPwTouch1(false)}
          />
          <Image source={eye} style={styles.eye} />
        </View>
        <View style={styles.inputSection}>
          <Image
            source={onPwTouch2 ? greenLock : lock}
            style={styles.lockIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor="#8C8C8C"
            textAlign="left"
            secureTextEntry
            value={passwordConfirmation}
            onChangeText={(text) => onChangePasswordConfirmation(text)}
            onTouchStart={() => setOnPwTouch2(true)}
            onBlur={() => setOnPwTouch2(false)}
          />
          <Image source={eye} style={styles.eye} />
        </View>
        {error ? (
          <Text
            style={{
              textAlign: "center",
              color: "#D35365",
              marginBottom: "3%",
            }}
          >
            {errorMsg}
          </Text>
        ) : null}
      </View>
      <View style={styles.bottomComponent}>
        <Text style={styles.textCenter}>
          By clicking Sign Up you agree to the following
        </Text>
        <TouchableOpacity style={styles.button} onPress={createAccount}>
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
  logo: {
    height: 125,
    width: 350,
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
  userIcon: {
    zIndex: 1,
    position: "absolute",
    height: "74%",
    width: "7.5%",
    //need this responsive
    marginLeft: 10,
  },
  lockIcon: {
    zIndex: 1,
    position: "absolute",
    height: "73%",
    width: "6.3%",
    //need this responsive
    marginLeft: 12,
  },
  eye: {
    zIndex: 1,
    position: "absolute",
    height: "67%",
    width: "10%",
    //need this responsive
    marginLeft: 325,
  },
})
