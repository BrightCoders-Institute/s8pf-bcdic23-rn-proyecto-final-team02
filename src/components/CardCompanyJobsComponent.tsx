import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ContainerComponent, IconComponent, RowComponent, TextComponent } from '../components';
import { globalStyles } from '../theme/globalTheme';
import useQuery from '../hook/useQuery'; 
import { useNavigation } from '@react-navigation/native';

const CardCompanyJobsComponent = () => {
  const { jobs, loading, getJobs,deleteJob } = useQuery(); // Agrega deleteJob aquí
  const navigate = useNavigation();

  useEffect(() => {
    getJobs(); // Call the function to get jobs when the component mounts
  }, []);

  const { top } = useSafeAreaInsets();

  const handleDeleteJob = async (jobId) => {
    try {
      await deleteJob(jobId);
      // If deletion is successful, refresh the job list
      getJobs();
    } catch (error) {
      Alert.alert('Error', 'Failed to delete job: ' + error.message);
    }
  };



  return (
    <>
      {jobs.map((job, index) => (
        <View key={index} style={{ flex: 1 }}>
          <ContainerComponent styles={Platform.OS === 'ios' ? { top: top } : { top: top + 20 }}>
            <View style={[styles.card, globalStyles.shadow]}>
              <View style={styles.contentContainer}>
                <RowComponent styles={{ flex: 1, justifyContent: 'space-between' }} isCenter>
                  <View style={styles.info}>
                    <TextComponent text={job.position} font="bold" />
                    <TextComponent text={job.description} styles={{ marginVertical: 5 }} />
                    <TextComponent text={job.date} font="300" />
                  </View>
                  <RowComponent>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => console.log('edit')}>
                      <IconComponent name="create-outline" size={30} styles={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleDeleteJob(job.id_job)}>
                      <IconComponent name="trash-outline" size={30} styles={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>
                  </RowComponent>
                </RowComponent>
              </View>
            </View>
          </ContainerComponent>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginBottom: 25,
    width: '100%',
    padding: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  info: {
    width: 250,
  },
});

export default CardCompanyJobsComponent;