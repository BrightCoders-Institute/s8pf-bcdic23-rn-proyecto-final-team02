import React from 'react';
import {View, StyleSheet, FlatList, Platform} from 'react-native';
import {CardCompanyJobsComponent, FabComponent} from '../components';
import {CompanyWorkData} from '../data/CompanyWorkData';
import {useNavigation} from '@react-navigation/native';

const CompanyJobsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={CompanyWorkData}
        keyExtractor={company => company.id}
        renderItem={({item}) => <CardCompanyJobsComponent companyWork={item} />}
      />

      <FabComponent
        iconName="add-outline"
        styles={
          Platform.OS === 'ios'
            ? {bottom: 50, right: 25}
            : {bottom: 40, right: 25}
        }
        onPress={() => navigation.navigate('FormScreen')}
      />
    </View>
  );
};

export default CompanyJobsScreen;
