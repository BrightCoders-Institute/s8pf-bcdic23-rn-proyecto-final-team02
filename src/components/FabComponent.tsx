import {StyleProp, ViewStyle, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {IconComponent} from '.';

interface Props {
  iconName: string;
  iconSize?: number;
  onPress: () => void;
  backgroundColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const FabComponent = (props: Props) => {
  const {iconName, iconSize, onPress, backgroundColor, styles} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          ...stylesFab.fabButton,
          backgroundColor: backgroundColor ?? 'white',
        },
        styles,
      ]}>
      <IconComponent name={iconName} size={iconSize} color="black" />
    </TouchableOpacity>
  );
};

export const stylesFab = StyleSheet.create({
  fabButton: {
    backgroundColor: 'white',
    width: 40,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 100,
    position: 'absolute',

    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default FabComponent;
