import { createAction, props } from '@ngrx/store';
import { PersonalInfo } from '../models/person.model';

export const setPersonalInfo = createAction(
  '[Form] Set Personal Information',
  props<PersonalInfo>()
);
