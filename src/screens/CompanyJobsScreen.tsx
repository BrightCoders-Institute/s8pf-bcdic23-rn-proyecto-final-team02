import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {CardCompanyJobsComponent} from '../components';
import {CompanyWorkData} from '../data/CompanyWorkData';

const CompanyJobsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 12, marginTop: 30}}>
        <FlatList
          data={CompanyWorkData}
          keyExtractor={company => company.id}
          renderItem={({item}) => (
            <CardCompanyJobsComponent companyWork={item} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

export default CompanyJobsScreen;
