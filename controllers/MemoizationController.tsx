import React, { useState, memo } from "react";
import { View, Text, Button } from "react-native";

// Child component (memoized)
const Child = memo(({ text }) => {
  console.log("Child rendered");
  return (
    <View style={{ marginTop: 20 }}>
      <Text>Child Text: {text}</Text>
    </View>
  );
});

const MemoizationController = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Hello");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Counter: {counter}</Text>
      <Button title="Increment Counter" onPress={() => setCounter(c => c + 1)} />

      <View style={{ marginTop: 10 }}>
        <Button title="Change Text" onPress={() => setText("Updated " + Date.now())} />
      </View>

      {/* Pass only the necessary prop */}
      <Child text={text} />
    </View>
  );
};

export default MemoizationController;
