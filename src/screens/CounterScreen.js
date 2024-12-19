import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "increase", payload: 1 })}
      >
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "decrease", payload: 1 })}
      >
        <Text style={styles.buttonText}>Decrease</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Current Count:</Text>
      <Text style={styles.text}>{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CounterScreen;
