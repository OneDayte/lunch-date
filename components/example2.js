import React from "react"
import { View, Text, StyleSheet } from "react-native"

const messageArray = [
    {
        "id": 7,
        "sender": 1517,
        "receiver": 1516,
        "message": "Hello cutie!",
        "timestamp": null,
        "created_at": "2021-05-14T06:00:54.335Z",
        "updated_at": "2021-05-14T06:00:54.335Z",
        "match_id": 668
    },
    {
        "id": 8,
        "sender": 1516,
        "receiver": 1517,
        "message": "What's up handsome!",
        "timestamp": null,
        "created_at": "2021-05-14T06:03:27.304Z",
        "updated_at": "2021-05-14T06:03:27.304Z",
        "match_id": 668
    },
    {
        "id": 7,
        "sender": 1517,
        "receiver": 1516,
        "message": "Nothing much, we should grab coffee sometime!",
        "timestamp": null,
        "created_at": "2021-05-14T06:00:54.335Z",
        "updated_at": "2021-05-14T06:00:54.335Z",
        "match_id": 668
    },
    {
        "id": 8,
        "sender": 1516,
        "receiver": 1517,
        "message": "Sure, let me check my schedule and get back to you.",
        "timestamp": null,
        "created_at": "2021-05-14T06:03:27.304Z",
        "updated_at": "2021-05-14T06:03:27.304Z",
        "match_id": 668
    }
]

export default function Example() {
  return (
    <View style={styles.container}>
      {messageArray.map((msg) => {
        return (<Text>{msg.message}</Text>)
      })} 
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
})
