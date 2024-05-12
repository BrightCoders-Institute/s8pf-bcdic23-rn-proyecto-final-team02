import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import { User } from '../interface/db/UserInterface';
import { Company } from '../interface/db/CompanyInterface';

const useQuery = ( { isWorker } : { worker: boolean } ) => {

  // Worker data
  const [worker, setWorker] = useState<User>({
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

  // Company data
  const [ company, setCompany ] = useState<Company>({
    id: 0,
    name: '',
    address: '',
    password: '',
    rating: 0,
    photo: '',
    phone: '',
    webSite: ''
  });

  // Loading state
  const [changeLoading, setChangeLoading] = useState(false);

  const createCompany = async () => {
    
  };

  return {};
};

export default useQuery;
