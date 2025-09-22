import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';



const CounterController = () => {
  const [count, setCount] = useState(0)
  const incrementByOne = () => {
  setCount(count + 1)
}
const decrementByOne = () => {
  setCount(count - 1)
}
return (
  <View style={styles.container}>
    <Text style={styles.countText}>{count}</Text>
    <View style={styles.buttonContainer}>
      <Pressable 
        style={[styles.button, styles.decrementButton]} 
        onPress={decrementByOne}
      >
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Pressable 
        style={[styles.button, styles.incrementButton]} 
        onPress={incrementByOne}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CounterController