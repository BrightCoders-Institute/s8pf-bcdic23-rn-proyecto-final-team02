import {View, StyleProp, ViewStyle, StyleSheet, ScrollView} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  isScroll?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const ContainerComponent = (props: Props) => {
  const {children, isScroll, styles} = props;

  return isScroll ? (
    <ScrollView style={[stylesContent.container, styles]} showsVerticalScrollIndicator={false} >
      {children}
    </ScrollView>
  ) : (
    <View style={[stylesContent.container, styles]}>{children}</View>
  );
};

export const stylesContent = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default ContainerComponent;
