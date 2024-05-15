import React from 'react';
import {View, FlatList, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FabComponent, WorkDetailsComponent} from '../components';
import {CompanyWorkData} from '../data/CompanyWorkData';

const WorkDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back-outline"
        onPress={() => navigation.goBack()}
        styles={
          Platform.OS === 'ios' ? {top: 60, left: 16} : {top: 20, left: 16}
        }
      />
      <FlatList
        data={CompanyWorkData}
        keyExtractor={company => company.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <WorkDetailsComponent companyWork={item} />}
      />
    </View>
  );
};

export default WorkDetailScreen;
