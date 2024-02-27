import React from 'react';
import { View, Image, StyleSheet,  FlatList } from 'react-native';
import { NavegatorComponent, TextComponent } from '../components';
import {CardWorkCompoment,CardCompanyCompoment} from '../components';
import { WorkData } from '../data/WorkData';
import { CompanyData } from '../data/CompanyData';

const HomeScreen = () => {
  const user_male=require('../assets/user-male-avatar.png')
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 14, marginTop: 77 }}>
        
        <TextComponent
          text="Hello Jonathan,"
          font="100"
          color="black"
          size={22}
        />

        <TextComponent
          styles={{ marginTop: 9 }}
          text="Jobs wait for you"
          font="bold"
          color="black"
          size={22}
        />

        <Image
          source={user_male}
          style={{ width: 73, height: 75, marginLeft: 276, position: 'absolute' }}
        />

        <View style={{ height: 10, width: 196, backgroundColor: '#3825AE', marginBottom: 14, marginTop: 3 }} />
        <View style={{ height: 10, width: 103, backgroundColor: '#3825AE', marginBottom: 23 }} />

        <TextComponent
        styles={{marginBottom:16}}
          text="Jobs that can interest you"
          font="normal"
          color="black"
          size={18}
        />

        <View style={{ height: 41, width: 338, backgroundColor: '#EFEFEF', marginBottom: 23,borderRadius:10}} />

        <FlatList
             horizontal
             data = {WorkData}
             keyExtractor={work => work.id}
             renderItem={({ item }) => <CardWorkCompoment work = {item} />}
            />

        <TextComponent
        styles={{marginBottom:16 ,marginTop:25}}
          text="Nearby Businesses"
          font="normal"
          color="black"
          size={18}
        />

        <FlatList
            data = {CompanyData}
            keyExtractor={company => company.id}
            renderItem={({ item }) => <CardCompanyCompoment company = {item} />}
          />

         <View style={{marginTop:11}}>

          <NavegatorComponent  />

         </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
});

export default HomeScreen;