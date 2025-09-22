import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
interface Item {
    id: string;
    name: string;
    screen: string;
}

const data: Item[] = [
    { id: '1', name: 'Simple Counter App', screen: 'CounterController' },
    { id: '2', name: 'Personalized Greeting Component', screen: 'GreetingController' },
    { id: '4', name: 'Toggle Visibility', screen: 'ToggleVisibilityController' },
    { id: '3', name: 'Timer Component', screen: 'TickingTimer' },
    { id: '5', name: 'Input Handling', screen: 'InputController' },
    { id: '6', name: 'Todo List', screen: 'TodoController' },
    { id: '7', name: 'Responsive Card Grid', screen: 'GridController' },
    { id: '8', name: 'Memoized Component', screen: 'MemoizationController' },
    { id: '9', name: 'Custom Hook', screen: 'FetchController' },
    { id: '10', name: 'Dark Mode Toggle', screen: 'DarkModeController' },
];

const HomeController = ({ navigation }) => {
    const handleItemPress = (item: Item) => {
        navigation.navigate(item.screen); 
    };
    const renderItem = ({ item }: { item: Item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
            <Text>{item.name} </Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default HomeController;