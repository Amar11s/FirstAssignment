import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeController from './controllers/HomeController';
import CounterController from './controllers/CounterController';
import GreetingController from './controllers/GreetingController';
import CardDetail from './controllers/CardDetail';
import ToggleVisibilityController from './controllers/ToggleVisibilityController';
import TickingTimer from './controllers/TimerController';
import InputController from './controllers/InputController';
import TodoController from './controllers/TodoController';
import GridController from './controllers/GridController';
import FetchController from './controllers/FetchController';
import DarkModeController from './controllers/DarkModeController';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeController} />
        <Stack.Screen name="CounterController" component={CounterController} />
        <Stack.Screen name="GreetingController" component={GreetingController} />
        <Stack.Screen name="CardDetail" component={CardDetail} />
        <Stack.Screen name="ToggleVisibilityController" component={ToggleVisibilityController} />
        <Stack.Screen name="TickingTimer" component={TickingTimer} />
        <Stack.Screen name="InputController" component={InputController} />
        <Stack.Screen name="TodoController" component={TodoController} />
        <Stack.Screen name="GridController" component={GridController} />
        <Stack.Screen name="FetchController" component={FetchController} />
        <Stack.Screen name="DarkModeController" component={DarkModeController} />

      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
