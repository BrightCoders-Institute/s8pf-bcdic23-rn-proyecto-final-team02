import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {CompanyWork} from '../interface/companyworkinterface';
import {
  TextComponent,
  RowComponent,
  ContainerComponent,
  SectionComponent,
} from '.';
import {globalStyles} from '../theme/globalTheme';

interface Props {
  companyWork: CompanyWork;
}

const CardUserApplicationComponent = ({companyWork}: Props) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <ContainerComponent
        styles={Platform.OS === 'ios' ? {top: top} : {top: top + 20}}>
        <TouchableOpacity
          style={[styles.card, globalStyles.shadow]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ApplicationDetailsScreen')}>
          <View style={styles.container}>
            <Image style={styles.logo} source={companyWork.logo} />
            <TextComponent size={16} font="500" text={companyWork.company} />
            <TextComponent size={16} font="500" text="-" />
            <TextComponent size={16} font="500" text={companyWork.branch} />
          </View>

          <SectionComponent styles={styles.sections}>
            <TextComponent size={16} font="500" text={companyWork.job} />
            <RowComponent styles={styles.accepted} onPress={() => {}}>
              <TextComponent
                text="Accepted"
                color="white"
                size={16}
                font="bold"
              />
            </RowComponent>
          </SectionComponent>

          <View style={styles.sections}>
            <TextComponent size={16} font="500" text={companyWork.job} />
            <RowComponent styles={styles.pending} onPress={() => {}}>
              <TextComponent
                text="Pending"
                color="white"
                size={16}
                font="bold"
              />
            </RowComponent>
          </View>

          <View style={styles.sections}>
            <TextComponent styles={styles.text} text={companyWork.job} />
            <RowComponent styles={styles.rejected} onPress={() => {}}>
              <TextComponent
                text="Rejected"
                color="white"
                size={16}
                font="bold"
              />
            </RowComponent>
          </View>
        </TouchableOpacity>
        <View style={Platform.OS === 'ios' ? {} : {height: 30}} />
      </ContainerComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  logo: {
    width: 43,
    height: 43,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  accepted: {
    backgroundColor: '#406405',
    width: 124,
    height: 31,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pending: {
    backgroundColor: '#997006',
    width: 124,
    height: 31,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejected: {
    backgroundColor: '#8A2B2B',
    width: 124,
    height: 31,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardUserApplicationComponent;
