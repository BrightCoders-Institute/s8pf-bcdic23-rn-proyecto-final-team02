import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

const InputField = ({
  title,
  type,
  security,
}: {
  title: string;
  type: KeyboardTypeOptions;
  security?: true;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardType={type}
        style={styles.input}
        secureTextEntry={security}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: '#161616',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#9F99FF',

    width: 361,
    height: 50,
    padding: 5,

    fontSize: 18,
    color: 'black',
  },
});

export default InputField;
