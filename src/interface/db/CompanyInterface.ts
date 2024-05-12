export interface Company {
  id: number;
  name: string;
  address: string;
  password: string;
  rating: number;
  photo: string;
  phone: string;
  webSite: string;
}

export interface Branch {
  id: string;
  name: string;

  // Foreign Key
  idCompany: string;
}

export interface Job {
  id: string;
  name: string;
  state: boolean;
  salary: string;
  description: string;
  requirements: string;

  // Foreign Key
  idBranch: string;
}

export interface Application {
  state: 'accepted' | 'pending' | 'rejected';

  // Foreign Key
  userId: string;
  companyId: string;
}
