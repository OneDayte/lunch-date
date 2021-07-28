import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native"
import arrow from "../assets/icons/arrow.png"
import { ValuesContext } from "./context/context"

export default function Interests({ navigation }) {
  const [genderSelect, setGenderSelect] = useState("men")

  const [preferenceSelect, setPreferenceSelect] = useState("casual")

  const [ageMin, setAgeMin] = useState("18")
  const [ageMax, setAgeMax] = useState("25")

  const [location, setLocation] = useState("Oakland")
  const [zipCode, setZipCode] = useState("94501")
  const [maxDistance, setMaxDistance] = useState("10")

  const onChangeAgeMin = (text) => {
    setAgeMin(text)
  }
  const onChangeAgeMax = (text) => {
    setAgeMax(text)
  }
  const onChangeLocation = (text) => {
    setLocation(text)
  }
  const onChangeZipCode = (text) => {
    setZipCode(text)
  }
  const onChangeMaxDistance = (text) => {
    setMaxDistance(text)
  }

  return (
    <ValuesContext.Consumer>
      {(context) => (
        <KeyboardAvoidingView style={styles.container} behavior="height">
          <Text style={styles.header}>What are you looking for?</Text>
          <View>
            <Text style={styles.text}>Interest In</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={
                  genderSelect === "men" ? styles.button : styles.notSelectedBtn
                }
                onPress={() => setGenderSelect("men")}
              >
                <Text
                  style={
                    genderSelect === "men"
                      ? { color: "#fff" }
                      : { color: "#000" }
                  }
                >
                  Men
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  genderSelect === "women"
                    ? styles.button
                    : styles.notSelectedBtn
                }
                onPress={() => setGenderSelect("women")}
              >
                <Text
                  style={
                    genderSelect === "women"
                      ? { color: "#fff" }
                      : { color: "#000" }
                  }
                >
                  Women
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  genderSelect === "non_binary"
                    ? styles.button
                    : styles.notSelectedBtn
                }
                onPress={() => setGenderSelect("non_binary")}
              >
                <Text
                  style={
                    genderSelect === "non_binary"
                      ? { color: "#fff" }
                      : { color: "#000" }
                  }
                >
                  Non Binary
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.text}>Relationship Type</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={
                  preferenceSelect === "casual"
                    ? styles.button
                    : styles.notSelectedBtn
                }
                onPress={() => setPreferenceSelect("casual")}
              >
                <Text
                  style={
                    preferenceSelect === "casual"
                      ? { color: "#fff" }
                      : { color: "#000" }
                  }
                >
                  Casual
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  preferenceSelect === "serious"
                    ? styles.button
                    : styles.notSelectedBtn
                }
                onPress={() => setPreferenceSelect("serious")}
              >
                <Text
                  style={
                    preferenceSelect === "serious"
                      ? { color: "#fff" }
                      : { color: "#000" }
                  }
                >
                  Serious
                </Text>
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
                keyboardType="numeric"
                maxLength={2}
                onChangeText={onChangeAgeMin}
              />
              <Text style={styles.fixText}> til </Text>
              <TextInput
                style={styles.textInput}
                placeholder="25"
                placeholderTextColor="#000000"
                keyboardType="numeric"
                maxLength={2}
                onChangeText={onChangeAgeMax}
              />
            </View>
          </View>
          <View style={styles.rowsContainer}>
            <View style={styles.singleRowContainer}>
              <Text style={styles.fixText}>City</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Oakland"
                placeholderTextColor="#000000"
                onChangeText={onChangeLocation}
              />
            </View>
          </View>
          <View style={styles.rowsContainer}>
            <View style={styles.singleRowContainer}>
              <Text style={styles.fixText}>Zipcode</Text>
              <TextInput
                style={styles.textInput}
                placeholder="94501"
                maxLength={5}
                placeholderTextColor="#000000"
                onChangeText={onChangeZipCode}
              />
            </View>
          </View>
          <View style={styles.rowsContainer}>
            <View style={styles.singleRowContainer}>
              <Text style={styles.fixText}>Max Distances</Text>
              <TextInput
                style={styles.textInput}
                placeholder="10 mi"
                placeholderTextColor="#000000"
                keyboardType="numeric"
                maxLength={5}
                onChangeText={onChangeMaxDistance}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={() => {
              navigation.navigate("Profile")
              context.changeValues({
                city: location,
                zip_code: Number(zipCode),
                preference: genderSelect,
                relationship_type: preferenceSelect,
                lower_bound_range: Number(ageMin),
                upper_bound_range: Number(ageMax),
                max_distance: Number(maxDistance),
              })
            }}
          >
            <Image source={arrow} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </ValuesContext.Consumer>
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
    fontSize: 17,
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
  rowsContainer: {
    flexDirection: "row",
  },
  singleRowContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
  fixText: {
    paddingTop: "3%",
    fontWeight: "bold",
  },
  arrowContainer: {
    alignSelf: "flex-end",
  },
})
