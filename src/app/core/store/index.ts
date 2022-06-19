import { ActionReducerMap } from '@ngrx/store';
import { PersonState } from './models/person.model';
import { personalInfoReducers } from './reducers/personal-info.reducer';
import { residentialInfoReducers } from './reducers/residential-info.reducer';

export const reducers: ActionReducerMap<PersonState> = {
  personalInfo: personalInfoReducers,
  residentialInfo: residentialInfoReducers,
};
