import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const RemTextInput = ({ onChangeText, value, placeholder }) => {
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#385E2B",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default RemTextInput;
