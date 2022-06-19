export interface PersonalInfo {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
}

export interface ResidentialInfo {
  address: string;
  neighborhood: string;
  department: string;
  city: string;
}

export interface PersonState {
  personalInfo: PersonalInfo;
  residentialInfo: ResidentialInfo;
}
