import React, {ReactNode} from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {globalStyles} from '../theme/globalTheme';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const {children, styles, onPress} = props;

  return onPress ? (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[stylesRow.rowCenter, globalStyles.shadow, styles]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[stylesRow.rowCenter, styles]}>{children}</View>
  );
};

export const stylesRow = StyleSheet.create({
  rowCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RowComponent;
