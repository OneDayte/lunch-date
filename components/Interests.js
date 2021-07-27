import React, {useState, useEffect} from "react"
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
  const [menSelected, setMenSelected] = useState(true)
  const [womenSelected, setWomenSelected] = useState(false)
  const [nonBinarySelected, setNonBinarySelected] = useState(false)

  const [casualSelected, setCasualSelected] = useState(true)
  const [seriousSelected, setSeriousSelected] = useState(false)

  const [ageMin, setAgeMin] = useState("")
  const [ageMax, setAgeMax] = useState("")

  const [location, setLocation] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [maxDistance, setMaxDistance] = useState("")

  const next = () => navigation.navigate("Profile")

  const selectGender = (gender) => {
    if (gender === "women") {
      setWomenSelected(true)
      setMenSelected(false)
      setNonBinarySelected(false)
    } else if (gender === "men") {
      setMenSelected(true)
      setWomenSelected(false)
      setNonBinarySelected(false)
    } else if (gender === "non-binary") {
      setNonBinarySelected(true)
      setMenSelected(false)
      setWomenSelected(false)
    }
  }

  const typeSelection = (type) => {
    if (type === "casual") {
      setCasualSelected(true)
      setSeriousSelected(false)
    } else if (type === "serious") {
      setSeriousSelected(true)
      setCasualSelected(false)
    }
  }

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
                style={menSelected ? styles.button : styles.notSelectedBtn}
                onPress={() => selectGender("men")}
              >
                <Text
                  style={menSelected ? { color: "#fff" } : { color: "#000" }}
                >
                  Men
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={womenSelected ? styles.button : styles.notSelectedBtn}
                onPress={() => selectGender("women")}
              >
                <Text
                  style={womenSelected ? { color: "#fff" } : { color: "#000" }}
                >
                  Women
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  nonBinarySelected ? styles.button : styles.notSelectedBtn
                }
                onPress={() => selectGender("non-binary")}
              >
                <Text
                  style={
                    nonBinarySelected ? { color: "#fff" } : { color: "#000" }
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
                style={casualSelected ? styles.button : styles.notSelectedBtn}
                onPress={() => typeSelection("casual")}
              >
                <Text
                  style={casualSelected ? { color: "#fff" } : { color: "#000" }}
                >
                  Casual
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={seriousSelected ? styles.button : styles.notSelectedBtn}
                onPress={() => typeSelection("serious")}
              >
                <Text
                  style={
                    seriousSelected ? { color: "#fff" } : { color: "#000" }
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
              <Text style={styles.fixText}>Location</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Oakland, CA"
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
                placeholder="94601"
                placeholderTextColor="#000000"
                onChangeZipCode={onChangeZipCode}
              />
            </View>
          </View>
          <View style={styles.rowsContainer}>
            <View style={styles.singleRowContainer}>
              <Text style={styles.fixText}>Max Distances</Text>
              <TextInput
                style={styles.textInput}
                placeholder="50 mi"
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
              next()
              context.changeValues(location)
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
