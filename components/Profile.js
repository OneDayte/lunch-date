import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { ValuesContext } from "./context/context"

export default function Profile({ navigation }) {
  const [day, setDay] = useState("27")
  const [month, setMonth] = useState("June")
  const [year, setYear] = useState("1990")

  const [myGender, setMyGender] = useState("male")

  const [about, setAbout] = useState("")

  const onChangeDay = (text) => {
    setDay(text)
  }
  const onChangeMonth = (text) => {
    setMonth(text)
  }
  const onChangeYear = (text) => {
    setYear(text)
  }

  const onChangeAbout = (text) => {
    setAbout(text)
  }

  return (
    <ValuesContext.Consumer>
      {(context) => (
        <View style={styles.container}>
          <View>
            <Text style={styles.boldText}>Birthday</Text>
            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.birthday}
                placeholder="27"
                placeholderTextColor="#000000"
                textAlign="center"
                onChangeText={onChangeDay}
              />
              <TextInput
                style={styles.birthday}
                placeholder="June"
                placeholderTextColor="#000000"
                textAlign="center"
                onChangeText={onChangeMonth}
              />
              <TextInput
                style={styles.birthday}
                placeholder="1990"
                placeholderTextColor="#000000"
                textAlign="center"
                onChangeText={onChangeYear}
              />
            </View>
          </View>
          <View>
            <Text style={styles.boldText}>Gender</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={
                  myGender === "male" ? styles.button : styles.notSelectedBtn
                }
                onPress={() => setMyGender("male")}
              >
                <Text
                  style={
                    myGender === "male" ? { color: "#fff" } : { color: "#000" }
                  }
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  myGender === "female" ? styles.button : styles.notSelectedBtn
                }
                onPress={() => setMyGender("female")}
              >
                <Text
                  style={
                    myGender === "female"
                      ? { color: "#fff" }
                      : { color: "#000" }
                  }
                >
                  Female
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  myGender === "non_binary"
                    ? styles.button
                    : styles.notSelectedBtn
                }
                onPress={() => setMyGender("non_binary")}
              >
                <Text
                  style={
                    myGender === "non_binary"
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
            <Text style={styles.aboutHeader}>About</Text>
            <TextInput
              style={styles.about}
              placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
              placeholderTextColor="#000000"
              multiline={true}
              numberOfLines={10}
              onChangeText={onChangeAbout}
            />
            <TouchableOpacity
              style={styles.addImgButton}
              onPress={() => {
                navigation.navigate("Add Images")
                // context.changeValues({
                //   gender: myGender,
                //   birth_date: Number(day),
                //   about: about,
                // })
              }}
            >
              <Text style={styles.addImgText}>Add Images</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ValuesContext.Consumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    paddingLeft: "10%",
    paddingRight: "10%",
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
    justifyContent: "space-evenly",
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
    marginTop: "2.5%",
  },
  gender: {
    flexDirection: "row",
    marginTop: "2.5%",
  },
  genderText: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  addImgButton: {
    backgroundColor: "#9BD09E",
    height: 54,
    borderRadius: 30,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "10%",
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
  boldText: {
    fontWeight: "bold",
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
