import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, source, score }) => {
  return (
    <View style={styles.container}>
      <Image source={source} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: 10,
    margin: 10,
  },
});

export default ImageDetail;
