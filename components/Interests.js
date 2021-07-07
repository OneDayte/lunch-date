import React, {useState, useEffect} from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native"
import arrow from "../assets/icons/arrow0.png"
import axios from "axios"
import * as SecureStore from 'expo-secure-store'

export default function Interests({ navigation }) {
  const [initialState, setInitialState] = useState({})

  const getUserToken = () => {
    return SecureStore.getItemAsync('secure_token');
  };

  useEffect(() => {
    getUserToken().then((jwtToken) => {
      axios.get("https://onedayte.herokuapp.com/users/edit_info", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': jwtToken
        }
      })
      .then((res) => {
        //we'll have to change up the res.data first
        console.log('apple', res.data)
        setInitialState(res.data)
      })
    })
    .catch((err) => {
      //handle error
    })
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.header}>What are you looking for?</Text>
      <View>
        <Text style={styles.text}>Interest In</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.selectedText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notSelectedBtn}>
            <Text>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notSelectedBtn}>
            <Text>Binary</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Relationship Type</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.selectedText}>Casual</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notSelectedBtn}>
            <Text>Serious</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Age Range</Text>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="18"
            placeholderTextColor="#000000"
          />
          <Text style={styles.text}> til </Text>
          <TextInput
            style={styles.textInput}
            placeholder="25"
            placeholderTextColor="#000000"
          />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Location</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Oakland, CA"
          placeholderTextColor="#000000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Zipcode</Text>
        <TextInput
          style={styles.textInput}
          placeholder="94601"
          placeholderTextColor="#000000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Max Distances</Text>
        <TextInput
          style={styles.textInput}
          placeholder="50 mi"
          placeholderTextColor="#000000"
        />
      </View>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image source={arrow} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    paddingTop: "5%",
    paddingLeft: "10%",
    paddingRight: "10%",
    justifyContent: "space-around",
  },
  header: {
    fontWeight: "bold",
    color: "#9BD09E",
  },
  text: {
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "2.5%",
  },
  button: {
    backgroundColor: "#9BD09E",
    height: 42,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },
  notSelectedBtn: {
    backgroundColor: "#F6F6F6",
    height: 42,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },
  selectedText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#F5F5F5",
    width: "30%",
    height: 42,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  arrow: {
    alignSelf: "flex-end",
  },
})
