import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        source={require("../../assets/images/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        source={require("../../assets/images/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        source={require("../../assets/images/mountain.jpg")}
        score={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
