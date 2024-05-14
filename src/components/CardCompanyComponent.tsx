import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextComponent} from '../components';
import {Company} from '../interface/companyinterface';
import {globalStyles} from '../theme/globalTheme';
import {useNavigation} from '@react-navigation/native';

interface Props {
  company: Company;
}

const CardCompanyComponent = ({company}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.card, globalStyles.shadow]}
      activeOpacity={0.8}>
      <Image style={styles.imagen} source={company.picture} />

      <View style={styles.content}>
        <TextComponent text={company.name} color="black" font="500" size={16} />
        <TextComponent
          text={company.distancing}
          color="#514D4D"
          font="300"
          size={14}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 16,
    marginBottom: 13,
    width: 330,
    height: 65,
  },
  imagen: {
    width: 43,
    height: 43,
    marginLeft: 23,
    marginTop: 11,
    position: 'absolute',
  },
  content: {
    marginLeft: 84,
    paddingLeft: 11,
    paddingBottom: 14,
    paddingTop: 7,
    gap: 6,
  },
});

export default CardCompanyComponent;
