import React from 'react';
import { View, Image, StyleSheet,  FlatList } from 'react-native';
import { NavigatorComponent, TextComponent } from '../components';
import {CardCompanyJobsComponent} from '../components';

import { CompanyWorkData } from '../data/CompanyWorkData';

const CompanyJobsScreen = () => {
  return (
    <View style={styles.container}>
      <View  style={{ marginLeft: 12, marginTop: 30 }}>

       <FlatList
            data = {CompanyWorkData}
            keyExtractor={company => company.id}
            renderItem={({ item }) => <CardCompanyJobsComponent companyWork = {item} />}
          />

      <NavigatorComponent  />
      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:16
  },
});

export default CompanyJobsScreen;