import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GreetingCard = ({ 
  name, 
  greeting, 
  message, 
  onPress,
  backgroundColor = '#ffffff',
  accentColor = '#4ECDC4',
  emoji = '🎉'
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.card, { backgroundColor }]}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={[styles.greetingText, { color: accentColor }]}>
          {greeting}
        </Text>
        <Text style={styles.nameText}>{name}!</Text>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 120,
  },
  emoji: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 8,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 8,
  },
  messageText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
});

export default GreetingCard;