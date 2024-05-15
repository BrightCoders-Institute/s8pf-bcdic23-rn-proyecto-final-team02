import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  CardWorkComponent,
  ContainerComponent,
  TextComponent,
  CardCompanyComponent,
  SectionComponent,
} from '../components';

import { WorkData } from '../data/WorkData';
import { CompanyData } from '../data/CompanyData';
import useQuery from '../hook/useQuery';

const HomeScreen = () => {

  const {
    user,
    setUser,
    createUser,
    getUser,
    getUserId,
  } = useQuery();

  useEffect( () => {

    getUserId().finally( () => getUser());

  }, [ ] )

  const user_male = require('../assets/user-male-avatar.webp');
  const { top } = useSafeAreaInsets();

  return (
    <ContainerComponent isScroll>
      <View style={[styles.container, { top: top + 15 }]}>
        <View style={styles.header}>
          <SectionComponent>
            <TextComponent
              text="Hello Jonathan,"
              font="bold"
              color="black"
              size={22}
            />
            <TextComponent
              styles={styles.marginTop}
              text="Jobs wait for you"
              font="normal"
              color="black"
              size={22}
            />
          </SectionComponent>
          <SectionComponent>
            <Image source={user_male} style={styles.avatar} />
          </SectionComponent>
        </View>

        <View style={[styles.indicator, styles.indicatorLarge]} />
        <View style={[styles.indicator, styles.indicatorSmall]} />

        <TextComponent
          styles={styles.marginBottom}
          text="Jobs that can interest you"
          font="bold"
          color="black"
          size={18}
        />
        <TextComponent
          text="Suggestions based on users who have applied for jobs similar to yours"
          styles={styles.subTitle}
          font="normal"
          color="black"
          size={14}
        />

        <FlatList
          horizontal
          style={styles.jobsList}
          showsHorizontalScrollIndicator={false}
          data={WorkData}
          keyExtractor={(work) => work.id}
          renderItem={({ item }) => <CardWorkComponent work={item} />}
        />

        <TextComponent
          styles={styles.nearbyTitle}
          text="Nearby Businesses"
          font="normal"
          color="black"
          size={18}
        />

        <FlatList
          horizontal
          style={styles.companiesList}
          showsHorizontalScrollIndicator={false}
          data={CompanyData}
          keyExtractor={(company) => company.id}
          renderItem={({ item }) => <CardCompanyComponent company={item} />}
        />

        
      </View>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  avatar: {
    width: 73,
    height: 75,
  },
  marginTop: {
    marginTop: 9,
  },
  indicator: {
    backgroundColor: '#3825AE',
    borderRadius: 10,
  },
  indicatorLarge: {
    height: 10,
    width: 196,
    marginBottom: 14,
  },
  indicatorSmall: {
    height: 10,
    width: 103,
    marginBottom: 23,
  },
  marginBottom: {
    marginBottom: 5,
  },
  subTitle: {
    marginBottom: 16,
  },
  jobsList: {
    height: 200,
  },
  nearbyTitle: {
    marginBottom: 16,
    marginTop: 25,
  },
  companiesList: {
    height: 100,
  },
});

export default HomeScreen;