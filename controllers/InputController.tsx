import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native';

const InputController = () => {
  const [text, setText] = useState("");
  const [showHello, setShow] = useState(false);

  const submitHandler = () => {
    if (text.trim()) {
      Keyboard.dismiss();
      setShow(true);
    }
  };

  const toggleInput = () => {
    setShow(false);
  };

  return (
    <View style={styles.container}>
      {showHello ? (
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hello {text}!</Text>
        </View>
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Enter your name..."
          placeholderTextColor="#999"
          onChangeText={setText}
          value={text}
          autoCapitalize="words"
          returnKeyType="done"
          onSubmitEditing={submitHandler}
        />
      )}
      
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          !text.trim() && styles.buttonDisabled
        ]}
        onPress={showHello ? toggleInput : submitHandler}
        disabled={!showHello && !text.trim()}
      >
        <Text style={styles.buttonText}>
          {showHello ? "Edit" : "Submit"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  greetingContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default InputController;