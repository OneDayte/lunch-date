import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native"
import location from "../assets/icons/location.png"
import RadioButton from "./radio"

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor="#000000"
          textAlign="left"
        />
      </View>
      <Text>{"\n"}</Text>
      <Text>Birthday {"\n"}</Text>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.birthday}
          placeholder="27"
          placeholderTextColor="#000000"
          textAlign="center"
        />
        <TextInput
          style={styles.birthday}
          placeholder="June"
          placeholderTextColor="#000000"
          textAlign="center"
        />
        <TextInput
          style={styles.birthday}
          placeholder="1990"
          placeholderTextColor="#000000"
          textAlign="center"
        />
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.locationSection}>
        <TextInput
          style={styles.locInput}
          placeholder="Location"
          textAlign="left"
          placeholderTextColor="#000000"
        />
        <Image source={location} style={styles.location} />
        <TextInput
          style={styles.zipInput}
          placeholder="Zipcode"
          textAlign="left"
          placeholderTextColor="#000000"
        />
      </View>
      <Text>{"\n"}</Text>
      <Text>Gender</Text>
      <View style={styles.genderContainer}>
        <View style={styles.gender}>
          <RadioButton style={styles.radio} />
          <Text style={styles.genderText}>Man</Text>
        </View>
        <View style={styles.gender}>
          <RadioButton style={styles.radio} />
          <Text style={styles.genderText}>Woman</Text>
        </View>
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Text style={styles.aboutHeader}>About</Text>
        <TextInput
          style={styles.about}
          placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
          placeholderTextColor="#000000"
          multiline={true}
          numberOfLines={10}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Add Images")}
        >
          <Text style={styles.addImgText}>Add Images</Text>
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
  },
  locationSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  locInput: {
    backgroundColor: "#F5F5F5",
    width: "59%",
    height: 42,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    //need responsive
    paddingLeft: 15,
  },
  zipInput: {
    backgroundColor: "#F5F5F5",
    width: "39%",
    height: 42,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    //need responsive
    paddingLeft: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "2.5%",
  },
  addImgText: {
    color: "#fff",
    fontWeight: "bold",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  gender: {
    flexDirection: "row",
    marginTop: "2.5%",
  },
  genderText: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  button: {
    backgroundColor: "#9BD09E",
    height: 54,
    borderRadius: 30,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "10%",
  },
  birthday: {
    backgroundColor: "#F5F5F5",
    height: 50,
    borderRadius: 8,
    width: "25%",
  },
  about: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 241,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    //need responsive
    paddingLeft: 15,
    paddingTop: 45,
    paddingRight: 15,
    paddingBottom: 15,
  },
  aboutHeader: {
    zIndex: 1,
    position: "absolute",
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  location: {
    flexDirection: "row",
    position: "absolute",
    height: "58%",
    width: "4.5%",
    //needs responsive
    marginLeft: 190,
  },
})
