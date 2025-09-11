import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.7;
const CIRCLE_BORDER_WIDTH = 8;

const TickingTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progress = (seconds % 60) / 60;
  
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={[styles.progressBackground, styles.progressContainer]} />
        
        <View 
          style={[
            styles.progressContainer,
            styles.progressFill,
            { transform: [{ rotate: `${progress * 360}deg` }] }
          ]}
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.timerText}>
            {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
          </Text>
          <Text style={styles.label}>elapsed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    position: 'absolute',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  progressBackground: {
    borderWidth: CIRCLE_BORDER_WIDTH,
    borderColor: '#e6e6e6',
  },
  progressFill: {
    borderWidth: CIRCLE_BORDER_WIDTH,
    borderLeftColor: '#4a6cfa',
    borderTopColor: '#4a6cfa',
    borderRightColor: '#e6e6e6',
    borderBottomColor: '#e6e6e6',
  },
  textContainer: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 42,
    fontWeight: '300',
    color: '#2d3436',
    letterSpacing: 1,
  },
  label: {
    fontSize: 14,
    color: '#7f8fa6',
    marginTop: 4,
    fontWeight: '500',
  },
});

export default TickingTimer;