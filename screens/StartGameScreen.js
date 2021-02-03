import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.numberInput} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button color="#ff6961" title="Reset" onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Button color="#ff6961" title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    marginHorizontal: 5,
    width: '60%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    width: '40%',
  },
});

export default StartGameScreen;
