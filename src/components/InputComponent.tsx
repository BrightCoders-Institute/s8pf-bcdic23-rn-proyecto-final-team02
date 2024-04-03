import {
  TextInput as NativeTextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RowComponent, IconComponent} from '../components';

const InputComponent = (props: TextInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);

  const handleShowHide = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <RowComponent styles={stylesInput.inputContainer}>
      <NativeTextInput
        {...props}
        secureTextEntry={secureTextEntry}
        style={stylesInput.input}
        placeholderTextColor="#8a8a8a"
      />
      {props.secureTextEntry ? (
        <TouchableOpacity activeOpacity={0.8} onPress={handleShowHide}>
          {secureTextEntry ? (
            <IconComponent name="eye-off-outline" size={20} />
          ) : (
            <IconComponent name="eye-outline" size={20} />
          )}
        </TouchableOpacity>
      ) : null}
    </RowComponent>
  );
};

export const stylesInput = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    padding: 0,
    color: '#161616',
  },
});

export default InputComponent;
