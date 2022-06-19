import { Action, createReducer, on } from '@ngrx/store';
import { setResidentialInfo } from '../actions/residential-info.action';
import { ResidentialInfo } from '../models/person.model';

const initialState: ResidentialInfo = {
  address: '',
  neighborhood: '',
  department: '',
  city: '',
};

export const residentialInfoReducers = createReducer(
  initialState,
  on(setResidentialInfo, (state, residentialInfo) => residentialInfo)
);
