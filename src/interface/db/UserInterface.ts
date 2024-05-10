export interface User {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  password: string;
  phone: string;
  address: string;
  photo: string;
  working: boolean;

  applications: Application[];
  documents: Document[];
}

export interface Application {
  company: string;
  state: 'pending' | 'rejected' | 'accepted';
}

export interface Document {
  name: 'curriculum' | 'aditional';
  route: string;
}
