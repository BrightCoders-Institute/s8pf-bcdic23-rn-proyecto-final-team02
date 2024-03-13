import {View, Text, Platform} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const NotificationScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <ContainerComponent isScroll>
      <View style={Platform.OS === 'ios' ? {top: top + 15} : {}}>
        <SectionComponent>
          <TextComponent
            text="Alerts Screen"
            font="bold"
            color="black"
            size={22}
          />
        </SectionComponent>
      </View>
    </ContainerComponent>
  );
};

export default NotificationScreen;
