import {View, Text, ViewStyle, StyleProp, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const SectionComponent = (props: Props) => {
  const {children, styles} = props;

  return <View style={[stylesSection.container, styles]}>{children}</View>;
};

export const stylesSection = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default SectionComponent;
