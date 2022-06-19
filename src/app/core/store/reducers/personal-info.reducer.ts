import { Action, createReducer, on } from '@ngrx/store';
import { setPersonalInfo } from '../actions/personal-info.action';
import { PersonalInfo } from '../models/person.model';

const initialState: PersonalInfo = {
  name: '',
  lastName: '',
  age: 1,
  email: '',
  phone: '',
};

export const personalInfoReducers = createReducer(
  initialState,
  on(setPersonalInfo, (state, personalInfo) => personalInfo)
);
