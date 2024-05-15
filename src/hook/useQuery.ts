import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { supabase } from '../lib/supabase';

type UserField = 'id' | 'name' | 'address' | 'password' | 'photo' | 'phone' | 'web_site';

interface JobData { 
  id_job: number;
  position: string;
  state: string;
  salary: number;
  description: string;
  requirements: string;
  img:string;
  date:string;
}

interface Values {
  position: string;
  state: boolean;
  salary: string;
  description: string;
  requirements: string;
  img: string;
}

const useQuery = () => {

    // Estado para almacenar los datos de trabajo
    const [jobs, setJobs] = useState<JobData[]>([]);
    // Estado para indicar si la consulta está en curso
    const [loading, setLoading] = useState<boolean>(false);

  // Worker data
  const [user, setUser] = useState<User>({
    id: '',
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    photo: '',
    working: 'notworking',
  });

  // Loading state
  const [ queryLoading, setQueryLoading ] = useState(false);

  const createUser = async ( email: string ) => {


    // setQueryLoading(true);

    const { data, error } = await supabase
      .from('users')
      .insert(user)
    ;

    if (error) Alert.alert( error.message );

    // setQueryLoading(false);

  };

  const getUserId = async () => {

    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.log(error);
    } else {
      user.id = data.user?.email;
    }

  };

  const getUser = async () => {

    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('id', user.id)
    ;

    if ( error ) {
      Alert.alert(error.message);
    } else {
      data.map( ( info: User ) => {
        setUser(info)
      });
    }

  };

  const registerJob = async (jobData: Values) => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .insert([jobData]);
  
      if (error) {
        throw error;
      } else {
        Alert.alert('Success', 'Job registered successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to register job: ' + error.message);
    }
  };

  // Función para obtener los trabajos
  const getJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('jobs').select('*');
      if (error) {
        throw error;
      } else {
        // Actualizar el estado con los datos de trabajo obtenidos
        setJobs(data as JobData[]);
      }
    } catch (error) {
      Alert.alert('Error', 'Error al obtener trabajos: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (jobId: number) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id_job', jobId);
  
      if (error) {
        throw error;
      } else {
      }
    } catch (error) {
      throw error;
    }
  };


  return {
    // Props
    user,
    setUser,

    // Methods
    createUser,
    getUser,
    getUserId,
    registerJob,
    getJobs,
    deleteJob,
    jobs,
    loading,
  };
};

export default useQuery;
