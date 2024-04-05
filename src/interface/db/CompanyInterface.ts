export interface Company {
  name: string;
  phone: string;
  address: string;
  webSite: string;

  branch: Branch;
  jobs: Job;
}

export interface Branch {
  name: string;
}

export interface Job {
  job: string;
  active: boolean;
  paymentFrequency: string;
  salary: string;
  temporary: boolean;
  working_day: string[];
  daysOff: string[];

  applications: Application[];
  benefits: Benefit[];
  requeriments: Requeriment[];
}

export interface Application {
  applicant: string;
  puntuation: number;
}

export interface Benefit {
  name: string;
  description: string;
}

export interface Requeriment {
  name: string;
  description: string;
  mandatory: boolean;
  puntuation: number;
}
