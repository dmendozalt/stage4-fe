import { createAction, props } from '@ngrx/store';
import { ResidentialInfo } from '../models/person.model';

export const setResidentialInfo = createAction(
  '[Form] Set Residential Information',
  props<ResidentialInfo>()
);
