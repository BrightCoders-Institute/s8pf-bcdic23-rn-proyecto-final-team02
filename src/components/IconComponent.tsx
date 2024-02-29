import {View, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: any;
  size?: number;
  color?: string;
  styles?: StyleProp<ViewStyle>;
}

const IconComponent = (props: Props) => {
  const {name, size, color, styles} = props;

  return (
    <View style={styles}>
      <IonIcon name={name} size={size ?? 24} color={color ?? '#6C63FF'} />
    </View>
  );
};

export default IconComponent;
