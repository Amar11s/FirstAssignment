import React, { useState } from "react"
import { TextInput, Text, StyleSheet, FlatList, Pressable, View, TouchableOpacity } from "react-native"

const TodoController = () => {
    const [tasks, updateTasks] = useState([])
    const [text, updateText] = useState("")

    const addTask = () => {
        if (text.trim()) {
            updateTasks(tasks => [...tasks, text])
            updateText("") 
        }
    }
    
    const deleteRow = (index) => {
        updateTasks(tasks => tasks.filter((_, i) => i !== index))
    }
    
    const cell = ({ item, index }) => (
        <TouchableOpacity style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <Pressable onPress={() => deleteRow(index)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Task..." 
                value={text} 
                onChangeText={updateText}
                style={styles.input}
                onSubmitEditing={addTask}
            />
            <Pressable onPress={addTask} style={styles.addButton}>
                <Text style={styles.buttonText}>Add Task</Text>
            </Pressable>
            <FlatList
                data={tasks}
                renderItem={cell}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    taskText: {
        flex: 1,
    },
    deleteButton: {
        backgroundColor: '#FF3B30',
        padding: 8,
        borderRadius: 5,
    },
    deleteText: {
        color: 'white',
        fontSize: 12,
    },
    list: {
        flex: 1,
    },
})

export default TodoController;