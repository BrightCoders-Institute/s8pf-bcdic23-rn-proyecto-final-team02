import React from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  RowComponent,
  TextComponent,
  IconComponent,
  ContainerComponent,
} from '../components';
import {CompanyWork} from '../interface/companyworkinterface';
import {useNavigation} from '@react-navigation/native';

interface Props {
  companyWork: CompanyWork;
}

const WorkDetailsComponent = ({companyWork}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <ContainerComponent
        isScroll
        styles={Platform.OS === 'ios' ? {top: top} : {top: top + 20}}>
        <View style={styles.card}>
          <RowComponent>
            <Image style={styles.logo} source={companyWork.logo} />
            <View style={{paddingHorizontal: 10}}>
              <TextComponent
                text={companyWork.company}
                color="black"
                font="700"
                size={16}
              />
            </View>
          </RowComponent>

          <View style={styles.content}>
            <View
              style={{
                height: 2,
                width: '100%',
                backgroundColor: '#3825AE',
                marginBottom: 10,
              }}
            />
          </View>
          <View style={{marginHorizontal: 10}}>
            <TextComponent
              text={companyWork.job}
              color="black"
              font="600"
              size={14}
            />
            <RowComponent styles={styles.iconRow}>
              <IconComponent name="location-outline" color="black" size={18} />
              <TextComponent
                text={`Location: ${companyWork.branch}`}
                color="black"
                font="400"
                size={11}
              />
            </RowComponent>
            <RowComponent styles={styles.iconRow}>
              <IconComponent name="briefcase-outline" color="black" size={18} />
              <TextComponent
                text={`Job Type: ${companyWork.jobType}`}
                color="black"
                font="400"
                size={11}
              />
            </RowComponent>
            <RowComponent styles={styles.iconRow}>
              <IconComponent name="cash-outline" color="black" size={18} />
              <TextComponent
                text={`Salary: ${companyWork.salaryType}`}
                color="black"
                font="400"
                size={11}
              />
            </RowComponent>
            <RowComponent styles={styles.iconRowTitle}>
              <TextComponent
                text="Company Overview"
                color="black"
                font="600"
                size={14}
              />
              <IconComponent name="business-outline" color="black" size={18} />
            </RowComponent>
            <TextComponent
              text={companyWork.companyOverview}
              color="black"
              font="400"
              size={11}
              styles={styles.description}
            />
            <RowComponent styles={styles.iconRowTitle}>
              <TextComponent
                text="Job Description"
                color="black"
                font="600"
                size={14}
              />
              <IconComponent name="clipboard-outline" color="black" size={18} />
            </RowComponent>
            <TextComponent
              text={companyWork.jobDescription}
              color="black"
              font="400"
              size={11}
              styles={styles.description}
            />
            <RowComponent styles={styles.iconRowTitle}>
              <TextComponent
                text="Key Responsibilities"
                color="black"
                font="600"
                size={14}
              />
              <IconComponent name="key-outline" color="black" size={18} />
            </RowComponent>

            {Array.isArray(companyWork.keyResponsibilities) &&
              companyWork.keyResponsibilities.map((responsibility, index) => (
                <TextComponent
                  key={index}
                  text={`\u2022 ${responsibility.item}`}
                  color="black"
                  font="400"
                  size={11}
                  styles={styles.bulletList}
                />
              ))}

            <RowComponent styles={styles.iconRowTitle}>
              <TextComponent
                text="Qualifications"
                color="black"
                font="600"
                size={14}
              />
              <IconComponent name="trophy-outline" color="black" size={21} />
            </RowComponent>

            {Array.isArray(companyWork.qualifications) &&
              companyWork.qualifications.map((qualification, index) => (
                <TextComponent
                  key={index}
                  text={`\u2022 ${qualification.item}`}
                  color="black"
                  font="400"
                  size={11}
                  styles={styles.bulletList}
                />
              ))}
            <RowComponent styles={styles.iconRowTitle}>
              <TextComponent
                text="Benefits"
                color="black"
                font="600"
                size={14}
              />
              <IconComponent
                name="stats-chart-outline"
                color="black"
                size={18}
              />
            </RowComponent>
            {Array.isArray(companyWork.benefits) &&
              companyWork.benefits.map((benefit, index) => (
                <TextComponent
                  key={index}
                  text={`\u2022 ${benefit.item}`}
                  color="black"
                  font="400"
                  size={11}
                  styles={styles.bulletList}
                />
              ))}
          </View>

          <RowComponent
            onPress={() => {}}
            styles={{marginVertical: 20}}
            isCenter>
            <View style={styles.apply}>
              <TextComponent
                color="white"
                text="Apply Here"
                font="bold"
                size={15}
              />
            </View>
          </RowComponent>
        </View>
      </ContainerComponent>
      <View style={Platform.OS === 'ios' ? {height: 100} : {height: 60}} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1,
  },
  logo: {
    width: 25,
    height: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 10,
  },
  apply: {
    backgroundColor: '#3825AE',
    width: 295,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 5,
  },
  content: {
    marginHorizontal: 10,
    paddingTop: 4,
  },
  description: {
    marginTop: 4,
    letterSpacing: 0.5,
  },
  iconRow: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 4,
    padding: 0,
  },
  iconRowTitle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 12,
    padding: 0,
  },
  bulletList: {
    marginTop: 4,
  },
});

export default WorkDetailsComponent;
