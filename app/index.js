import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { Video, ResizeMode } from "expo-av";
import { useRouter } from "expo-router";

const Home = () => {
  const video = useRef(null);
  const router = useRouter();

  return (
    <>
      <View>
        {/* <Video
          ref={video}
          source={{
            uri: "https://cdn.pixabay.com/video/2023/02/09/149897-797491512_large.mp4",
          }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
        /> */}
      </View>
      <View style={styles.container}>
        <Text>Ayor </Text>
        <Text> Coding School</Text>
        <Text>Build Apps, webs, </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={styles.buttons}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={styles.buttons}>Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 300, // Set a specific width
    height: 200, // Set a specific height
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 3,
  },
  buttons: {
    padding: 3,
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
  },
});

export default Home;
