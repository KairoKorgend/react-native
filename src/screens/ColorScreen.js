import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View style={styles.container}>
        {colors.map((color, index) => (
          <View
            key={index}
            style={{ height: 100, width: 100, backgroundColor: color }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    margin: 10,
  },
});

export default ColorScreen;
