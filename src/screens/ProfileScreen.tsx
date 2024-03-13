import {View, Platform} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent isScroll>
      <View style={Platform.OS === 'ios' ? {top: top + 15} : {}}>
        <SectionComponent>
          <TextComponent text="Profile" font="bold" color="black" size={22} />
        </SectionComponent>
      </View>
    </ContainerComponent>
  );
};

export default ProfileScreen;
