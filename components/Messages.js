import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native"
import msgBtn from "../assets/icons/msgBtn3x.png"
import picImgIcon from "../assets/icons/pickImg3x.png"
import cameraIcon from "../assets/icons/camera3x.png"

const messageArray = [
  {
    id: 7,
    sender: 1517,
    receiver: 1516,
    message: "Hello cutie!",
    timestamp: null,
    created_at: "2021-05-14T06:00:54.335Z",
    updated_at: "2021-05-14T06:00:54.335Z",
    match_id: 668,
  },
  {
    id: 8,
    sender: 1516,
    receiver: 1517,
    message: "What's up handsome!",
    timestamp: null,
    created_at: "2021-05-14T06:03:27.304Z",
    updated_at: "2021-05-14T06:03:27.304Z",
    match_id: 668,
  },
  {
    id: 7,
    sender: 1517,
    receiver: 1516,
    message: "Nothing much, we should grab coffee sometime!",
    timestamp: null,
    created_at: "2021-05-14T06:00:54.335Z",
    updated_at: "2021-05-14T06:00:54.335Z",
    match_id: 668,
  },
  {
    id: 8,
    sender: 1516,
    receiver: 1517,
    message: "Sure, let me check my schedule and get back to you.",
    timestamp: null,
    created_at: "2021-05-14T06:03:27.304Z",
    updated_at: "2021-05-14T06:03:27.304Z",
    match_id: 668,
  },
]

export default function Messages() {
  const [text, setText] = useState("")

  const onChangeMsg = (text) => {
    setText(text)
    console.log(text)
  }

  const submitMsg = () => {
    messageArray.push({
      message: text,
      timestamp: null,
    })
    setText("")
    console.log(messageArray)
  }

  return (
    <View style={styles.container}>
      {messageArray.map((msg) => {
        return <Text>{msg.message}</Text>
      })}
      <View style={styles.textInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message"
          onChangeText={onChangeMsg}
          value={text}
        />
        <TouchableOpacity onPress={submitMsg} style={styles.msgBtnContainer}>
          <Image style={styles.msgBtn} source={msgBtn} />
        </TouchableOpacity>
        <View style={styles.leftIcons}>
          <Image style={styles.cameraBtn} source={cameraIcon} />
          <Image style={styles.pickImgBtn} source={picImgIcon} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "space-evenly",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  leftIcons: {
    flexDirection: "row",
    position: "absolute",
    height: 42,
    alignItems: "center",
    paddingLeft: "25%",
    width: "25%",
    justifyContent: "space-between",
  },
  cameraBtn: {
    height: 20,
    width: 26,
  },
  pickImgBtn: {
    height: 20,
    width: 20,
  },
  textInput: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 42,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    textAlign: "left",
    paddingLeft: "15%",
  },
  msgBtnContainer: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  msgBtn: {
    height: 42,
    width: 42,
  },
})
