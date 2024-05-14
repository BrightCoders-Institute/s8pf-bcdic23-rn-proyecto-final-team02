import React, { useEffect } from 'react';
import {View, Image, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  CardWorkComponent,
  ContainerComponent,
  TextComponent,
  CardCompanyComponent,
  SectionComponent,
} from '../components';

import {WorkData} from '../data/WorkData';
import {CompanyData} from '../data/CompanyData';
import { supabase } from '../lib/supabase';
import useQuery from '../hook/useQuery';

const HomeScreen = () => {

  const { user, setUser } = useQuery();

  const getCurrentUser = async () => {

    const { data } = await supabase.auth.getUser();

    setUser({
      ...user,
      id: data.user?.id
    });

  };

  useEffect( () => {
    getCurrentUser();
  }, [ ] )

  const user_male = require('../assets/user-male-avatar.webp');
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent isScroll>
      <View style={{top: top + 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <SectionComponent>
            <TextComponent
              text="Hello Jonathan,"
              font="bold"
              color="black"
              size={22}
            />
            <TextComponent
              styles={{marginTop: 9}}
              text="Jobs wait for you"
              font="normal"
              color="black"
              size={22}
            />
          </SectionComponent>

          <SectionComponent>
            <Image
              source={user_male}
              style={{
                width: 73,
                height: 75,
              }}
            />
          </SectionComponent>
        </View>

        <View
          style={{
            height: 10,
            width: 196,
            backgroundColor: '#3825AE',
            marginBottom: 14,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            height: 10,
            width: 103,
            backgroundColor: '#3825AE',
            marginBottom: 23,
            borderRadius: 10,
          }}
        />

        <TextComponent
          styles={{marginBottom: 5}}
          text="Jobs that can interest you"
          font="bold"
          color="black"
          size={18}
        />
        <TextComponent
          text="Suggestions based on users who have applied for jobs similar to yours"
          styles={{marginBottom: 16}}
          font="normal"
          color="black"
          size={14}
        />

        <FlatList
          horizontal
          style={{height: 200}}
          showsHorizontalScrollIndicator={false}
          data={WorkData}
          keyExtractor={work => work.id}
          renderItem={({item}) => <CardWorkComponent work={item} />}
        />

        <TextComponent
          styles={{marginBottom: 16, marginTop: 25}}
          text="Nearby Businesses"
          font="normal"
          color="black"
          size={18}
        />

        <FlatList
          horizontal
          style={{height: 100}}
          showsHorizontalScrollIndicator={false}
          data={CompanyData}
          keyExtractor={company => company.id}
          renderItem={({item}) => <CardCompanyComponent company={item} />}
        />
      </View>
    </ContainerComponent>
  );
};

export default HomeScreen;
