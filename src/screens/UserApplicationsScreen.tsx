import React from 'react';
import {View, Platform, StyleSheet, FlatList} from 'react-native';
import {
  CardUserApplicationComponent,
  ContainerComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {CompanyWorkData} from '../data/CompanyWorkData';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const UserApplicationsScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      {/* <SectionComponent styles={{alignItems: 'center'}}>
        <TextComponent
          text="My applications"
          font="bold"
          color="black"
          size={22}
        />
      </SectionComponent> */}

      <FlatList
        data={CompanyWorkData}
        keyExtractor={company => company.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CardUserApplicationComponent companyWork={item} />
        )}
      />
    </View>
  );
};

export default UserApplicationsScreen;
