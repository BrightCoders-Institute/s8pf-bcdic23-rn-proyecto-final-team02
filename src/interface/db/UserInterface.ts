export interface User {
  name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  photo: string;
  working: boolean;

  applications: Application[];
  docuemtens: Document[];
}

export interface Application {
  company: string;
  state: 'Pending' | 'Rejected' | 'Accepted';
}

export interface Document {
  name: 'Curriculum' | 'Aditional';
  route: string;
}
