import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import TextComponent from './TextComponent';

const AuthLogoComponent = ({
  src,
  onPress,
  text,
  disabled,
}: {
  src: any;
  onPress: any;
  text: string;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.square}>
        <Image style={styles.icon} source={src} />
      </View>
      <TextComponent
        styles={styles.text}
        size={14}
        font="bold"
        text={`Sign ${text}`}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 304,
    height: 44,
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#6C63FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: '95%',
    borderRadius: 3,
    backgroundColor: 'white',
  },
  icon: {
    width: 22,
    height: 22,
  },
  text: {
    flex: 6,
    textAlign: 'center',
    color: 'white',
  },
});

export default AuthLogoComponent;
