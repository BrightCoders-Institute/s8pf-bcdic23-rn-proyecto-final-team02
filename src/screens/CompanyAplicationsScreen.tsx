import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  ContainerComponent,
  SectionComponent,
  TextComponent,
  CardCompanyAplicationComponent,
} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CompanyAplicationsData} from '../data/CompanyAplicationsData';

const UserAplicationsScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <ContainerComponent>
      <View style={Platform.OS === 'ios' ? {top: top + 15} : {}}>
        <SectionComponent styles={{alignItems: 'center'}}>
          <TextComponent
            text="Applications"
            font="bold"
            color="black"
            size={22}
          />
        </SectionComponent>

        <FlatList
          data={CompanyAplicationsData}
          keyExtractor={company => company.id}
          renderItem={({item}) => (
            <CardCompanyAplicationComponent CompanyAplications={item} />
          )}
        />
      </View>
    </ContainerComponent>
  );
};

export const styles = StyleSheet.create({
  sections: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 100,
  },
  buttonStar: {
    backgroundColor: '#3526a7',
    borderRadius: 10,
    width: 80,
    height: 30,
  },
  sectionName: {
    alignSelf: 'flex-start',
    marginHorizontal: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    borderBottomWidth: 0.2,
  },
});

export default UserAplicationsScreen;
