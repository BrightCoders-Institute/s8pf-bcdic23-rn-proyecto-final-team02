import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {RowComponent, TextComponent} from '../components';
import {globalStyles} from '../theme/globalTheme';
import { WorkDetails } from '../interface/workdetailsinterface';
import { Text } from 'react-native-paper';

interface Props {
  workdetails: WorkDetails;
}

const WorkDetailsComponent = ({workdetails}: Props) => {
  return (
    <View style={[styles.card, globalStyles.shadow]}>
      <RowComponent>
        <Image style={styles.logo} source={workdetails.logo} />
        <View style={styles.textContainer}>
          <TextComponent text={workdetails.company} color="black" font="700" size={16} />
        </View>
      </RowComponent>
      <View style={styles.content}>
      <View
          style={{
            height: 2,
            width: 296,
            backgroundColor: '#3825AE',
            marginBottom: 10,
            borderRadius: 10,
          }}
        />
        <TextComponent text={workdetails.job} color="black" font="600" size={14} />
        <TextComponent text={`Location: ${workdetails.location}`} color="black" font="400" size={11} />
        <TextComponent text={`Job Type: ${workdetails.jobType}`} color="black" font="400" size={11} />
        <TextComponent text={`Salary: ${workdetails.salary}`} color="black" font="400" size={11} />
        <TextComponent text="Company Overview" color="black" font="600" size={14} />    
        <TextComponent text={workdetails.companyOverview} color="black" font="400" size={11} />
        <TextComponent text="Job Description" color="black" font="600" size={14} />
        <TextComponent text={workdetails.jobDescription} color="black" font="400" size={11} />
        <TextComponent text="Key Responsibilities" color="black" font="600" size={14} />
        {Array.isArray(workdetails.keyResponsibilities) && workdetails.keyResponsibilities.map((responsibility, index) => (
          <TextComponent
            key={index}
            text={`\u2022 ${responsibility.item}`}
            color="black"
            font="400"
            size={11}
          />
        ))}
        <TextComponent text="Qualifications" color="black" font="600" size={14} />
        {Array.isArray(workdetails.qualifications) && workdetails.qualifications.map((qualification, index) => (
          <TextComponent
            key={index}
            text={`\u2022 ${qualification.item}`}
            color="black"
            font="400"
            size={11}
          />
        ))}
        <TextComponent text="Benefits" color="black" font="600" size={14} />
        {Array.isArray(workdetails.benefits) && workdetails.benefits.map((benefit, index) => (
          <TextComponent
            key={index}
            text={`\u2022 ${benefit.item}`}
            color="black"
            font="400"
            size={11}
          />
        ))}
        <RowComponent>
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
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 5,
      marginRight: 16,
      width: 338,
    },
    logo: {
      width: 25,
      height: 25,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    textContainer: {
      marginLeft: 10,
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
  });

export default WorkDetailsComponent;
