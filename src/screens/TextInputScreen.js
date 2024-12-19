import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextInputScreen = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <Text style={styles.text}>Enter name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Your name"
      />
      {text.length > 5 ? (
        <Text style={styles.text}>Your name is {text}</Text>
      ) : (
        <Text style={styles.text}>
          Password must be longer than 5 characters
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginLeft: 12,
    marginTop: 20,
  },
});

export default TextInputScreen;
