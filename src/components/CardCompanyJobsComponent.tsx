import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {RowComponent, TextComponent} from '../components';
import {CompanyWork} from '../interface/companyworkinterface';

interface Props {
  companyWork: CompanyWork;
}

const CardCompanyJobsComponent = ({companyWork}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={companyWork.logo} />
        <TextComponent
          styles={styles.branch}
          text={companyWork.branch}
          color="black"
        />
      </View>

      <View style={styles.separator} />

      <View style={styles.contentContainer}>
        <Image style={styles.work} source={companyWork.work} />
        <View style={styles.content}>
          <TextComponent styles={styles.textContent} text={companyWork.job} />
          <TextComponent
            styles={styles.textContent}
            text={companyWork.salary}
          />
          <TextComponent styles={styles.textContent} text={companyWork.date} />
          <TextComponent styles={styles.textContent} text={companyWork.time} />
          <RowComponent styles={styles.button} onPress={() => {}}>
            <TextComponent
              text="See more >"
              color="white"
              size={10}
              font="bold"
            />
          </RowComponent>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: '#000',
    marginBottom: 25,
    marginLeft: 11,
    width: 338,
    height: 205,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  logo: {
    width: 43,
    height: 43,
    marginRight: 10,
  },
  work: {
    width: 153,
    height: 104,
    borderRadius: 10,
  },
  branch: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    backgroundColor: '#3825AE',
    marginTop: 8,
    marginBottom: 14,
    width: 296,
    height: 3.5,
    borderRadius: 10,
  },
  content: {
    width: 158,
  },
  textContent: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#3825AE',
    width: 134,
    height: 16,
    borderRadius: 5,
  },
});

export default CardCompanyJobsComponent;
