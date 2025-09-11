import React from 'react';
import { StyleSheet, View, Text, ScrollView, useWindowDimensions } from 'react-native';

const GridController = () => {
  const { width } = useWindowDimensions();
  
  // Calculate number of columns based on screen width
  const getColumns = () => {
    if (width >= 768) return 3; // Tablet landscape or larger
    if (width >= 480) return 2; // Tablet portrait or large phone
    return 1; // Small phone
  };
  
  const columns = getColumns();
  
  // Sample data for cards
  const cardData = [
    { id: 1, title: 'Card 1', description: 'This is the description for the first card in the grid layout.' },
    { id: 2, title: 'Card 2', description: 'Another card with some interesting content to display.' },
    { id: 3, title: 'Card 3', description: 'Third card with a slightly longer description that might wrap to multiple lines.' },
    { id: 4, title: 'Card 4', description: 'Fourth card description goes here in this responsive grid.' },
    { id: 5, title: 'Card 5', description: 'The fifth card has some unique information to share with users.' },
    { id: 6, title: 'Card 6', description: 'Final card in our grid with a complete description for demonstration.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Responsive Card Grid</Text>
      <View style={[styles.grid, { maxWidth: columns === 1 ? '100%' : 900 }]}>
        {cardData.map((card) => (
          <View 
            key={card.id} 
            style={[
              styles.card, 
              { 
                width: columns === 1 ? '100%' : `${100/columns - 2}%`,
                margin: columns === 1 ? 5 : 8
              }
            ]}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 8,
  },
  cardContent: {
    margin: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default GridController;