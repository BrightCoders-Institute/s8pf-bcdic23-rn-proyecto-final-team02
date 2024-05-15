import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RowComponent, TextComponent } from '../components';
import { useNavigation } from '@react-navigation/native';
import useQuery from '../hook/useQuery'; // Import the JobData interface from useQuery
import { globalStyles } from '../theme/globalTheme';

const CardWorkComponent = () => {
  const { jobs, loading, getJobs } = useQuery();
  const navigate = useNavigation();

  useEffect(() => {
    getJobs(); // Call the function to get jobs when the component mounts
  }, []);

  return (
    <>
      {jobs.map((job, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, globalStyles.shadow]}
          onPress={() => navigate.navigate('WorkDetailScreen', { jobId: job.id_job })}
          activeOpacity={0.8}>
          <Image style={styles.image} source={{ uri: job.img }} />
          <View style={styles.content}>
            <TextComponent text={job.position} color="black" font="500" size={16} />
            <TextComponent text={`Salary: $${job.salary}`} color="black" font="500" size={14} />
            <RowComponent styles={styles.bottom}>
              <View style={styles.apply}>
                <TextComponent
                  color="white"
                  text="Apply Now"
                  font="bold"
                  size={10}
                />
              </View>
            </RowComponent>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 16,
    width: 150,
    height: 200,
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  apply: {
    backgroundColor: '#3825AE',
    width: 60,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  content: {
    marginHorizontal: 10,
    paddingTop: 4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CardWorkComponent;