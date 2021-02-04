import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.numberInput, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  numberInput: {
    marginHorizontal: 5,
    marginVertical: 10,
    height: 40,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
});

export default Input;
