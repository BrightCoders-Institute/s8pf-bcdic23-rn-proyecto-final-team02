import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { supabase } from '../lib/supabase';

type UserField = 'name' | 'address' | 'password' | 'photo' | 'phone' | 'web_site';

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

const useQuery = () => {

    // Estado para almacenar los datos de trabajo
    const [jobs, setJobs] = useState<JobData[]>([]);
    // Estado para indicar si la consulta está en curso
    const [loading, setLoading] = useState<boolean>(false);

  // Worker data
  const [user, setUser] = useState<User>({
    first_name: '',
    address: '',
    applications: [],
    documents: [],
    email: '',
    gender: '',
    last_name: '',
    password: '',
    phone: '',
    photo: '',
    working: false
  });

  // Loading state
  const [ queryLoading, setQueryLoading ] = useState(false);

  const createUser = async () => {

    setQueryLoading(true);

    const { data, error } = await supabase
      .from('users')
      .insert(user)
      .select();

    if ( error ) {
      Alert.alert(error.message);
    } else {
      // Map data and give the information to company (useState);
      data.map( ( info: User ) => setUser( info ) );
  
      Alert.alert('Aviso', 'Compañia creada correctamente');
    }

    setQueryLoading(false);

  };

  const getUser = async () => {

    const { data, error } = await supabase
      .from('user')
      .select()
      .eq('id_user', user.id_user)
    ;

    if ( error ) {

      Alert.alert(error.message);

    } else {

      // Map data and give the information to company (useState);
      data.map( ( info: User ) => setUser( info ) );
  
      Alert.alert('Aviso', 'Compañia creada correctamente');

    }

  };
  

  const editUser = async (  field: UserField ) => {

  }

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
    createUser,
    registerJob,
    getJobs,
    deleteJob,
    jobs,
    loading,
  };
};

export default useQuery;
