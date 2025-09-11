import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GreetingCard from './GreetingCard';

const GreetingController = ({ navigation }) => {
  // Data array - much cleaner!
  const cardsData = [
    {
      id: '1',
      name: 'Sarah',
      greeting: 'Happy Birthday',
      message: 'Wishing you a day filled with happiness and joy!',
      emoji: '🎂',
      backgroundColor: '#FFF0F5',
      accentColor: '#FF69B4',
    },
    {
      id: '2',
      name: 'John',
      greeting: 'Congratulations',
      message: 'Your hard work and dedication have truly paid off!',
      emoji: '🏆',
      backgroundColor: '#F0F8FF',
      accentColor: '#4682B4',
    },
    {
      id: '3',
      name: 'Emily',
      greeting: 'Thank You',
      message: 'Your kindness and support mean the world to me!',
      emoji: '💖',
      backgroundColor: '#F0FFF0',
      accentColor: '#32CD32',
    },
    {
      id: '4',
      name: 'Michael',
      greeting: 'Welcome Aboard',
      message: 'We\'re thrilled to have you on the team!',
      emoji: '👋',
      backgroundColor: '#FFFACD',
      accentColor: '#FFD700',
    },
  ];

  const handleCardPress = (card) => {
    navigation.navigate('CardDetail', {
      ...card // Spread all card data as params
    });
  };

  const renderCard = ({ item }) => (
    <GreetingCard
      name={item.name}
      greeting={item.greeting}
      message={item.message}
      emoji={item.emoji}
      backgroundColor={item.backgroundColor}
      accentColor={item.accentColor}
      onPress={() => handleCardPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Greeting Cards</Text>
      
      <FlatList
        data={cardsData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2c3e50',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default GreetingController;