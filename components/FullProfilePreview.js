import React, { useEffect, useState, useContext } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import location from "../assets/icons/location.png"
import axios from "axios"
import { ValuesContext } from "./context/context"
import { SliderBox } from "react-native-image-slider-box"

export default function FullProfilePreview() {
  const [info, setInfo] = useState()

  const images = [
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]

  const allContext = useContext(ValuesContext)

  useEffect(() => {
    //axios
    //.get("http://onedayte.herokuapp.com/users/1")
    //.then((res) => console.log(res.data))
    //.catch((err) => console.log("Error: ", err))

    console.log("thepic", allContext.submitValues.picture_one)
  })

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: allContext.submitValues.picture_one }}
        //style={styles.picture}
      />
      <View style={styles.gallery}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#9BD09E"
        />
      </View>
      <View style={styles.row}>
        <Text>John Kang{/*info.first_name, info.last_name*/}</Text>
        <Text>Age 25 {/*info.age*/}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.locationRow}>
          <Image source={location} style={styles.icon} />
          <Text>Oakland, CA, 94601{/*info.location, info.location*/}</Text>
        </View>
        <Text>5 mi away</Text>
      </View>
      <View style={styles.about}>
        <Text style={styles.text}>About</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata
        </Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.infor}>
        <Text style={styles.text}>My infor</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Gender</Text>
          <Text style={styles.text}>Male</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Interest in</Text>
          <Text style={styles.text}>Woman</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Relationship Type</Text>
          <Text style={styles.text}>Casual</Text>
        </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationRow: {
    flexDirection: "row",
  },
  icon: {
    height: 18,
    width: 12,
    marginRight: "4%",
  },
  about: {
    backgroundColor: "#9BD09E",
    borderRadius: 5,
    padding: 12,
    height: "30%",
    marginTop: 30,
  },
  line: {
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: "#E4E4E4",
  },
  infor: {
    marginTop: 30,
    backgroundColor: "#9BD09E",
    borderRadius: 5,
    padding: 12,
    height: "25%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  picture: {
    height: "25%",
    width: "100%",
    resizeMode: "stretch",
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 15,
  },
  gallery: {
    marginBottom: 30,
  },
})
