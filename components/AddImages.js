import React, { useEffect, useState, useContext } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native"
import addImgBtn from "../assets/icons/addImgBtn3x.png"
import * as ImagePicker from "expo-image-picker"
import { ValuesContext } from "./context/context"
import axios from "axios"
import * as SecureStore from "expo-secure-store"

export default function AddImages({ navigation }) {
  const [pic1, setPic1] = useState(null)
  const [pic2, setPic2] = useState(null)
  const [pic3, setPic3] = useState(null)
  const [pic4, setPic4] = useState(null)
  const [pic5, setPic5] = useState(null)
  const [pic6, setPic6] = useState(null)

  const allContext = useContext(ValuesContext)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
          alert("Please allow camera roll permissions to upload images!")
        }
      }
    })()
  }, [])

  const uploadImgs = async (img) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled && img === "img1") {
      setPic1(result.uri)
    } else if (!result.cancelled && img === "img2") {
      setPic2(result.uri)
    } else if (!result.cancelled && img === "img3") {
      setPic3(result.uri)
    } else if (!result.cancelled && img === "img4") {
      setPic4(result.uri)
    } else if (!result.cancelled && img === "img5") {
      setPic5(result.uri)
    } else if (!result.cancelled && img === "img6") {
      setPic6(result.uri)
    }
  }

  const submitAll = () => {
    if (
      (pic1 === null) &
      (pic2 === null) &
      (pic3 === null) &
      (pic4 === null) &
      (pic5 === null) &
      (pic6 === null)
    ) {
      alert("Please upload at least one photo!")
    } else {
      SecureStore.getItemAsync("secure_token").then((token) => {
        let axiosConfig = {
          headers: {
            Authorization: token,
          },
        }

        axios
          .put(
            "http://onedayte.herokuapp.com/users/1",
            {
              ...allContext.submitValues,
              picture_one: pic1,
              picture_two: pic2,
              picture_three: pic3,
              picture_four: pic4,
              picture_five: pic5,
              picture_six: pic6,
            },
            axiosConfig
          )
          .then((res) => {
            console.log(res.data)
            allContext.changeValues({
              picture_one: pic1,
              picture_two: pic2,
              picture_three: pic3,
              picture_four: pic4,
              picture_five: pic5,
              picture_six: pic6,
            })
            navigation.navigate("Profile Preview")
          })
          .catch((err) => console.log(err))
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text0}>
        Make sure your photos are clearly visible.
      </Text>
      <View style={styles.imgContainer}>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => uploadImgs("img1")}
        >
          <Image source={{ uri: pic1 }} style={styles.img} />
          <Image source={addImgBtn} style={styles.iconPadding} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => uploadImgs("img2")}
        >
          <Image source={{ uri: pic2 }} style={styles.img} />
          <Image source={addImgBtn} style={styles.iconPadding} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => uploadImgs("img3")}
        >
          <Image source={{ uri: pic3 }} style={styles.img} />
          <Image source={addImgBtn} style={styles.iconPadding} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => uploadImgs("img4")}
        >
          <Image source={{ uri: pic4 }} style={styles.img} />
          <Image source={addImgBtn} style={styles.iconPadding} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => uploadImgs("img5")}
        >
          <Image source={{ uri: pic5 }} style={styles.img} />
          <Image source={addImgBtn} style={styles.iconPadding} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={() => uploadImgs("img6")}
        >
          <Image source={{ uri: pic6 }} style={styles.img} />
          <Image source={addImgBtn} style={styles.iconPadding} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={submitAll}>
        <Text style={styles.text1}>Continue</Text>
      </TouchableOpacity>
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
    paddingBottom: "10%",
  },
  imgContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  text0: {
    fontWeight: "bold",
    textAlign: "center",
  },
  imgButton: {
    backgroundColor: "#7E8082",
    height: "25%",
    width: "47.5%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  iconPadding: {
    height: "37.5%",
    width: "28.5%",
    marginRight: "5%",
    marginBottom: "5%",
  },
  img: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#9BD09E",
    height: 54,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  text1: {
    fontWeight: "bold",
    color: "#fff",
  },
})
