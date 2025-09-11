import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardDetail = ({ route, navigation }) => {
  const { name, greeting, message, emoji, backgroundColor, accentColor } = route.params;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.card, { borderColor: accentColor }]}>
        <Text style={[styles.emoji, { color: accentColor }]}>{emoji}</Text>
        <Text style={[styles.greeting, { color: accentColor }]}>{greeting}</Text>
        <Text style={styles.name}>Dear {name},</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.backButton, { backgroundColor: accentColor }]} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2c3e50',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#34495e',
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CardDetail;
