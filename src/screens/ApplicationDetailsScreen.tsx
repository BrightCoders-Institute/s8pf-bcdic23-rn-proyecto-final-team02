import React from 'react';
import {View, StyleSheet, FlatList, Platform} from 'react-native';
import {
  ApplicationDetails,
  ContainerComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CompanyAplicationsData} from '../data/CompanyAplicationsData';

const ApplicationDetailsScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <SectionComponent styles={{alignItems: 'center'}}>
        <TextComponent text="Application" font="bold" color="black" size={24} />
      </SectionComponent>

      <FlatList
        data={CompanyAplicationsData}
        keyExtractor={company => company.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ApplicationDetails Aplications={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

export default ApplicationDetailsScreen;
