import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";

const DarkModeController= () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
      <View style={[styles.container, themeStyles.container]}>

      <Text style={[styles.title, themeStyles.text]}>
        {isDarkMode ? "Dark Mode is ON 🌙" : "Light Mode is ON ☀️"}
      </Text>

      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
      />
   </View>
  );
};

export default DarkModeController;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "600",
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
});
