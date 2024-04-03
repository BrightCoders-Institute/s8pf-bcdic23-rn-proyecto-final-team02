import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {TextComponent} from '.';

const ButtonComponent = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <TextComponent styles={styles.title} text={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: '#6C63FF',
    width: 361,
    height: 38,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default ButtonComponent;
