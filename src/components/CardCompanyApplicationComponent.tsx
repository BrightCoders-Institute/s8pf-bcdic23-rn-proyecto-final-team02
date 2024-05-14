import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextComponent, RowComponent, IconComponent} from '.';
import {aplications} from '../interface/CompanyAplicationsInterface';
import {globalStyles} from '../theme/globalTheme';

interface Props {
  CompanyAplications: aplications;
}

const CardCompanyApplicationComponent = ({CompanyAplications}: Props) => {
  return (
    <View style={[styles.card, globalStyles.shadow]}>
      <View style={styles.container2}>
        <View style={styles.container}>
          <View>
            <IconComponent name="person" color="black" />
          </View>
          <TextComponent styles={styles.text} text={CompanyAplications.name} />
        </View>

        <View style={styles.container}>
          <View>
            <IconComponent name="star" color="#F0AE02" />
          </View>
          <TextComponent
            styles={[styles.text, styles.start]}
            text={CompanyAplications.stars}
          />
        </View>
      </View>

      <View style={styles.container2}>
        <TextComponent styles={styles.text} text={CompanyAplications.job} />
        <RowComponent styles={styles.accepted} onPress={() => {}}>
          <TextComponent text="Accepted" color="white" size={16} font="bold" />
        </RowComponent>
      </View>

      <View style={styles.container2}>
        <TextComponent styles={styles.text} text={CompanyAplications.job} />
        <RowComponent styles={styles.pending} onPress={() => {}}>
          <TextComponent text="Pending" color="white" size={16} font="bold" />
        </RowComponent>
      </View>

      <View style={styles.container2}>
        <TextComponent styles={styles.text} text={CompanyAplications.job} />
        <RowComponent styles={styles.rejected} onPress={() => {}}>
          <TextComponent text="Rejected" color="white" size={16} font="bold" />
        </RowComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    marginBottom: 25,
    marginLeft: 11,
    width: 361,
    height: 'auto',
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
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
  start: {
    color: '#3526a7',
    fontWeight: '900',
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

export default CardCompanyApplicationComponent;
