import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to text input screen"
        onPress={() => navigation.navigate("TextInput")}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default HomeScreen;
